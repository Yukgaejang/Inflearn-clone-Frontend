import React, { useState } from "react";
import "../../styles/Board.css";
import Comment from "../atoms/Comment";
import { ToggleRepliesButton } from "./CommentButton.jsx";

interface CommentData {
    name: string;
    date: string;
    body: string;
    depth: number;
}

const commentsData: CommentData[] = [
    {
        name: "룰루랄라",
        date: "2020.07.09",
        body: "- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!\n- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.",
        depth: 0,
    },
    {
        name: "룰루랄라",
        date: "2020.07.09",
        body: "- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!\n- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.",
        depth: 1,
    },
];

const CommentOne: React.FC = () => {
    const [showDepthOne, setShowDepthOne] = useState(false);

    const handleToggleDepthOne = () => {
        setShowDepthOne(!showDepthOne);
    };

    return (
        <div className="comment">

            {commentsData.map((comment, index) => (
                <React.Fragment key={index}>
                    {comment.depth === 0 && (
                        <Comment
                            name={comment.name}
                            date={comment.date}
                            body={comment.body}
                            depth={comment.depth}
                            showReplies={false}
                            onToggleReplies={() => {
                            }}
                        />
                    )}
                </React.Fragment>
            ))}

                    <div className="RepliesButton">
                        <ToggleRepliesButton showReplies={showDepthOne} onClick={handleToggleDepthOne}/>
                    </div>
            {commentsData.map((comment, index) => (
                <React.Fragment key={index}>

                    {showDepthOne && comment.depth > 0 && (
                        <Comment
                            name={comment.name}
                            date={comment.date}
                            body={comment.body}
                            depth={comment.depth}
                            showReplies={false}
                            onToggleReplies={() => {
                            }}
                        />
                    )}
</React.Fragment>


            ))}


        </div>
    );
};

export default CommentOne;
