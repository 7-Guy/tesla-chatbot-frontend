import {Exhibit} from "../Exhibit";
import {Discussion} from "../Discussion";
import {OllamaResponseModel} from "../OllamaResponse";

export function NoneExhibit(): Exhibit {
    return {
        name: "",
        description: "",
        imageUrl: ""
    }
}

export function NoneDiscussion(): Discussion {
    return {
        questions: [],
        answers: [],
        exhibit: NoneExhibit()
    }
}

export function FailureOllamaResponseModel(): OllamaResponseModel {
    return {
        context: [],
        created_at: "",
        done: false,
        done_reason: "",
        eval_count: -1,
        eval_duration: -1,
        load_duration: -1,
        model: "",
        prompt_eval_count: -1,
        prompt_eval_duration: -1,
        response: "",
        total_duration: -1
    }
}