import React, { useState, useEffect } from "react";
import "../../styles/Board.css";
import Comment from "../atoms/Comment";
import { ToggleRepliesButton } from "./CommentButton.jsx";
import Button from "../atoms/Button/Button";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import axios from "axios";

interface CommentData {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    writer: boolean;
    depth: number; // 추가
}

const CommentOne: React.FC = () => {
    const [showDepthOne, setShowDepthOne] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [commentsData, setCommentsData] = useState<CommentData[]>([]);

    // useEffect(() => {
    //     const fetchComments = async () => {
    //         try {
    //             const response = await axios.get('/boards/1/comments', {
    //                 headers: {
    //                     'accept': '*/*'
    //                 }
    //             });
    //
    //             setCommentsData(response.data.body);
    //         } catch (error) {
    //             console.error('댓글 데이터 불러오기 실패', error);
    //         }
    //     };
    //
    //     fetchComments();
    // }, []);

    const handleToggleDepthOne = () => {
        setShowDepthOne(!showDepthOne);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleEdit = () => {
        console.log('수정 버튼 클릭');
    };

    const handleDelete = async (id = 1) => {
        try {
            const response = await axios.delete(`/boards/1/comments/${id}`, {
                headers: {
                    'accept': '*/*'
                }
            });
            console.log('삭제 성공', response.data);

            setCommentsData(commentsData.filter(comment => comment.id !== id));
        } catch (error) {
            console.error('삭제 실패', error);
        }
    };

    return (
        <div className="comment">
            {commentsData.map((comment, index) => (
                <React.Fragment key={index}>
                    {comment.depth === 0 && (
                        <Comment
                            name={comment.writer ? '작성자' : '익명'}
                            date={comment.createdAt}
                            body={comment.content}
                            depth={comment.depth}
                            showReplies={false}
                            onToggleReplies={() => {}}
                        />
                    )}
                </React.Fragment>
            ))}
            <Button size="small" buttonType="noneBorder" onClick={toggleDropdown}>
                <HiOutlineDotsHorizontal />
            </Button>
            {dropdownVisible && (
                <div className="dropdown-menu">
                    <button onClick={handleEdit}>수정</button>
                    <button onClick={() => handleDelete(1)}>삭제</button>
                </div>
            )}
            <div className="RepliesButton">
                <ToggleRepliesButton showReplies={showDepthOne} onClick={handleToggleDepthOne} />
            </div>
            {commentsData.map((comment, index) => (
                <React.Fragment key={index}>
                    {showDepthOne && comment.depth > 0 && (
                        <Comment
                            name={comment.writer ? '작성자' : '익명'}
                            date={comment.createdAt}
                            body={comment.content}
                            depth={comment.depth}
                            showReplies={false}
                            onToggleReplies={() => {}}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default CommentOne;
