import {Question} from "./Question";
import {Answer} from "./Answer";
import {Exhibit} from "./Exhibit";

export interface Discussion {
    questions: Question[];
    answers: Answer[];
    exhibit: Exhibit;
}
