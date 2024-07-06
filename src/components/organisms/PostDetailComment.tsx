import React from 'react';
import Comment from "../organisms/CommentList"
import '../../styles/PostDetailComment.css'
import InputField from "../atoms/InputField"

const PostDetailCommentList: React.FC = () => {

    const handleSearch = (query: string) => {
        console.log(`Searching for: ${query}`);
    };

    return (
        <div className="PostDetailComment">
            <div className="PostDetailCommentBox">
                <div className="PostDetailComment-Title">
                    <p>댓글 2</p>
                    <InputField placeholder="사용자님, 답변을 작성해보세요."
                                onSearch={handleSearch}
                                type="comment"
                    ></InputField>
                </div>

                <div className="PostDetailCommentList">
                    <Comment/>
                </div>
            </div>
        </div>
    );
};

export default PostDetailCommentList;
