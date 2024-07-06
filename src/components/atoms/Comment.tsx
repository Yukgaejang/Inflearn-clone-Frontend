import React from "react";
import CustomTypography from "./CustomTypography";
import "../../styles/PostDetail.css";
import CommentButton, {  ReplyButton } from "../molecules/CommentButton.jsx";

interface CommentProps {
    name: string;
    date: string;
    body: string;
    depth: number;
    showReplies: boolean;
    onToggleReplies: () => void;
}

const Comment: React.FC<CommentProps> = ({ name, date, body, depth, showReplies, onToggleReplies }) => {
    const isDepthOne = depth === 1;
    const [showInputField, setShowInputField] = React.useState(false);

    const handleShowInputField = () => {
        setShowInputField(!showInputField);
    };

    const handleSearch = (query: string) => {
        console.log(`Searching for: ${query}`);
    };

    return (
        <div className={isDepthOne ? "down-comment" : "up-comment"}>
            <div className="comment-user">
                <img src="./logo192.png" alt="Writer Avatar" width={24}/>
                <CustomTypography type="body2" body={name}></CustomTypography>
                <CustomTypography type="additional" body="&nbsp;·&nbsp;"></CustomTypography>
                <CustomTypography type="additional" body={date}></CustomTypography>
            </div>
            <div className="comment-body">
                <CustomTypography type={isDepthOne ? "body4" : "body"} body={body}></CustomTypography>
            </div>
            {!isDepthOne && (
                <div className="comment-footer-button">
                    <ReplyButton onClick={handleShowInputField} />
                    <CommentButton showInputField={showInputField}
                                   setShowInputField={setShowInputField}
                                   handleSearch={handleSearch}/>
                </div>
            )}
        </div>
    );
};

export default Comment;