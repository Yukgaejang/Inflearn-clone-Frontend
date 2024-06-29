import React from "react";
import "../../styles/Board.css";
import Comment from "../atoms/Comment";

const CommentOne: React.FC = () => {
    return (
        <div className="comment">
            <Comment
                name="룰루랄라"
                date="2020.07.09"
                body="- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!
- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요."
                depth={0}
            />
            <Comment
                name="룰루랄라"
                date="2020.07.09"
                body="- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!
- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요."
                depth={1}
            />
        </div>
    );
};

export default CommentOne;
