import React from "react";
import CustomTypography from "./CustomTypography";
import "../../styles/PostDetail.css";

interface CommentProps {
    name: string;
    date: string;
    body: string;
    depth: number;
}

const Comment: React.FC<CommentProps> = ({ name, date, body, depth }) => {
    const isDepthOne = depth === 1;
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
                    {/* 펼침/숨기기, 답글 달기 버튼 구역 */}
                </div>
            )}
        </div>
    );
};

export default Comment;