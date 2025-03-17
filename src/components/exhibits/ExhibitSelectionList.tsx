import React from "react";
import {exhibits} from "../../ressources/exhibits";
import ExhibitCard from "./ExhibitCard";
import {Col, Row} from "react-bootstrap";
import {Exhibit} from "../../models/Exhibit";

const ExhibitSelectionList: React.FC<{ onActivateDiscussion: (exhibit: Exhibit) => void }> = (props) => {
    return (
        <div>
            <Row>
                {exhibits.map((exhibit) => (
                    <Col key={exhibit.name} xs={12} sm={9} md={9} lg={6} xl={6}>
                        <ExhibitCard exhibit={exhibit} onActivateDiscussion={props.onActivateDiscussion}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ExhibitSelectionList;
