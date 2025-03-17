import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Exhibit} from "../../../models/Exhibit";
import {Answer} from "../../../models/Answer";
import {Discussion} from "../../../models/Discussion";
import {NoneDiscussion} from "../../../models/helpers/modelHelpers";

export interface DiscussionState {
    activeDiscussion: Discussion,
    waitingForResponse: boolean
}

const initialDiscussionState: DiscussionState = {activeDiscussion: NoneDiscussion(), waitingForResponse: false};

export const discussionSlice = createSlice({
    name: 'discussion',
    initialState: initialDiscussionState,
    reducers: {
        activateDiscussion: (state, action: PayloadAction<Exhibit>) => {
            state.activeDiscussion = {questions: [], answers: [], exhibit: action.payload};
        },
        addQuestion: (state, action: PayloadAction<string>) => {
            state.activeDiscussion.questions.push({text: action.payload});
            state.waitingForResponse = true;
        },
        finishDiscussion: (state) => {
            state.activeDiscussion = NoneDiscussion();
        },
        addAnswer(state, action: PayloadAction<Answer>) {
            state.activeDiscussion.answers.push(action.payload);
            state.waitingForResponse = false;
        }
    }
});