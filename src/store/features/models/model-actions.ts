import {fetchModels} from "../../../services/ai-api-client";
import {AppDispatch, modelActions} from "../../store";


export const fetchModelsData = () => {
    return async (dispatch: AppDispatch) => {
        const availableModels = await fetchModels();
        dispatch(modelActions.setAvailableModels(availableModels));
    }
}