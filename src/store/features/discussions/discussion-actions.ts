import {Question} from "../../../models/Question";
import {Exhibit} from "../../../models/Exhibit";
import {fetchNextResponse, fetchResponse} from "../../../services/ai-api-client";
import {AppDispatch, discussionActions, RootState} from "../../store";
import {Answer} from "../../../models/Answer";

export const fetchResponseForPendingQuestion = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState();
        const activeDiscussion = state.discussion.activeDiscussion;

        if (state.discussion.activeDiscussion.questions.length === 1) {
            const model = state.model.selectedModel;
            const question = activeDiscussion.questions[activeDiscussion.questions.length - 1];
            const answer = await generateFirstResponse(question, activeDiscussion.exhibit, model);
            dispatch(discussionActions.addAnswer({text: answer}));
        } else {
            const answer = await generateNextResponse(activeDiscussion.questions, activeDiscussion.answers, state.model.selectedModel);
            dispatch(discussionActions.addAnswer({text: answer}));
        }
    }

    async function generateFirstResponse(question: Question, exhibit: Exhibit, model: string) {
        try {
            return await fetchResponse(question, exhibit, model);
        } catch (error) {
            console.error('Promise rejected with error: ' + error);
            return "Could not generate a response";
        }
    }

    async function generateNextResponse(questionHistory: Question[], answerHistory: Answer[], model: string) {
        try {
            return await fetchNextResponse(questionHistory, answerHistory, model);
        } catch (error) {
            console.error('Promise rejected with error: ' + error);
            return "Could not generate a response";
        }
    }
}