import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {discussionActions} from "../../store/store";
import InteractionCard from "./InteractionCard";

const DiscussionViewer = () => {
    const [nextQuestion, setNextQuestion] = useState("");
    const activeDiscussion = useAppSelector((state) => state.discussion.activeDiscussion);
    const dispatch = useAppDispatch();

    function handleQuestionChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setNextQuestion(event.target.value);
    }

    function handleSubmit() {
        dispatch(discussionActions.addQuestion(nextQuestion));
        setNextQuestion("");
    }

    function handleFinishDiscussion() {
        dispatch(discussionActions.finishDiscussion());
    }

    return (
        <div>
            <h1>Discussion about {activeDiscussion.exhibit.name}</h1>
            {activeDiscussion.questions.length > 0 && activeDiscussion.questions.map((question, i) => (
                <div key={i}>
                    <InteractionCard text={question.text} isQuestion={true}/>
                    {activeDiscussion.answers[i] ? (
                        <InteractionCard text={activeDiscussion.answers[i].text} isQuestion={false}/>
                    ) : (
                        <p className="placeholder-glow">
                            <span className="placeholder col-12"></span>
                        </p>
                    )}
                </div>
            ))}

            <div className="input-group mt-3">
                <textarea value={nextQuestion}
                          onChange={handleQuestionChange} className="form-control"
                          aria-label="With textarea"></textarea>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <Button variant="danger" onClick={handleFinishDiscussion}>Finish
                    discussion</Button>
                <Button variant="success"
                        onClick={() => handleSubmit()}>Add
                    question</Button>
            </div>
        </div>
    );
}

export default DiscussionViewer;