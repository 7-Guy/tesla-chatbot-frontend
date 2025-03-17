import {Exhibit} from "../../models/Exhibit";
import React from "react";
import {Button, Card} from "react-bootstrap";

const ExhibitCard: React.FC<{
    exhibit: Exhibit,
    onActivateDiscussion: (exhibit: Exhibit) => void
}>
    = (props) => {
    const exhibit = props.exhibit;

    return (
        <Card style={{padding: '10px'}}>
            <Card.Img variant="top" src={exhibit.imageUrl}/>
            <Card.Body>
                <Card.Title>{exhibit.name}</Card.Title>
                <Card.Text>
                    {exhibit.description}
                </Card.Text>
                <Button variant="primary" onClick={() => props.onActivateDiscussion(exhibit)}>Start Discussion</Button>
            </Card.Body>
        </Card>
    )
}

export default ExhibitCard;