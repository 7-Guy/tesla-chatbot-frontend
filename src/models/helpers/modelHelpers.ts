import {Exhibit} from "../Exhibit";
import {Discussion} from "../Discussion";

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