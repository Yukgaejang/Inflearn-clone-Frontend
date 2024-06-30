import React from "react";
import "../../styles/Board.css";
import CommentOne from "../molecules/CommentOne";

const CommentList: React.FC = () => {
    return (
        <div className="comment-list">
            <CommentOne />
            <CommentOne />
        </div>
    );
};

export default CommentList;
