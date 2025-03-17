import React from "react";
import {Card} from "react-bootstrap";

const InteractionCard: React.FC<{ text: string, isQuestion: boolean }> = ({text, isQuestion}) => {
    return (
        <Card className={isQuestion ? 'bg-success bg-gradient w-75 ms-auto mt-3'
            : 'bg-secondary bg-gradient w-75 me-auto mt-3'}>
            <Card.Body className='text-light' style={{whiteSpace: 'pre-wrap'}}>{text}</Card.Body>
        </Card>
    );
}

export default InteractionCard;