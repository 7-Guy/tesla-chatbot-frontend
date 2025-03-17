import React from "react";
import ExhibitSelectionList from "./exhibits/ExhibitSelectionList";
import DiscussionViewer from "./discussions/DiscussionViewer";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {discussionSlice} from "../store/features/discussions/discussion";
import {NoneDiscussion} from "../models/helpers/modelHelpers";
import _ from "lodash";


const Content: React.FC = () => {
    const activeDiscussion = useAppSelector((state) => state.discussion.activeDiscussion);
    const dispatch = useAppDispatch();

    return (
        (_.isEqual(activeDiscussion, NoneDiscussion())))
        ? (
            <div className="content-container pt-4">
                <ExhibitSelectionList
                    onActivateDiscussion={(exhibit) =>
                        dispatch(discussionSlice.actions.activateDiscussion(exhibit))}/>
            </div>)
        : (
            <div className="content-container pt-4">
                <DiscussionViewer/>
            </div>
        );
}

export default Content;