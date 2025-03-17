import {Question} from "../../../models/Question";
import {Exhibit} from "../../../models/Exhibit";
import {fetchResponse} from "../../../services/ai-api-client";
import {AppDispatch, discussionActions, RootState} from "../../store";
import {FailureOllamaResponseModel} from "../../../models/helpers/modelHelpers";

export const fetchResponseForPendingQuestion = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState();
        const activeDiscussion = state.discussion.activeDiscussion;
        const model = state.model.selectedModel;
        const question = activeDiscussion.questions[activeDiscussion.questions.length - 1];
        const answer = await getResponse(question, activeDiscussion.exhibit, model);
        dispatch(discussionActions.addAnswer({text: answer.response}));
    }

    async function getResponse(question: Question, exhibit: Exhibit, model: string) {
        try {
            return await fetchResponse(question, exhibit, model);
        } catch (error) {
            console.error('Promise rejected with error: ' + error);
            return FailureOllamaResponseModel();
        }
    }
}