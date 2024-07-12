import React from 'react';
import Comment from "../organisms/CommentList";
import axios from 'axios';
import '../../styles/PostDetailComment.css';
import InputField from "../atoms/InputField";

const PostDetailCommentList: React.FC = () => {

    const handleSearch = async (query: string) => {
        console.log(`답변 내용: ${query}`);

        try {
            const response = await axios.post('https://wooyong.shop/boards/1/comments', {
                content: query,
                depth: 0
            });

            console.log(response.data);
        } catch (error) {
            console.error('에러:', error);
        }
    };

    return (
        <div className="PostDetailComment">
            <div className="PostDetailCommentBox">
                <div className="PostDetailComment-Title">
                    <p>댓글 2</p>
                    <InputField
                        placeholder="사용자님, 답변을 작성해보세요."
                        onSearch={handleSearch}
                        type="comment"
                    />
                </div>

                <div className="PostDetailCommentList">
                    <Comment/>
                </div>
            </div>
        </div>
    );
};

export default PostDetailCommentList;
