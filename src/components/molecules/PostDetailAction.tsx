import React from 'react';
import Button from '../atoms/Button/Button';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineShare } from 'react-icons/hi';
import { IoArrowBackOutline } from "react-icons/io5";
import '../../styles/PostDetail.css';
import axios from 'axios';

const PostActions: React.FC = () => {

    //공유 버튼
    const handleShareClick = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('링크가 복사되었습니다!');
            })
            .catch(err => {
                console.error('링크복사 실패:', err);
            });
    };

    //좋아요 버튼

    const handleLikeClick = () => {
        const postId = 1;
        const userId = 1;

        axios.post(`https://wooyong.shop/boards/${postId}/heart?userId=${userId}`)
            .then(response => {
                console.log('좋아요 성공:', response.data);
            })
            .catch(error => {
                console.error('좋아요 실패:', error.response ? error.response.data : error.message);
            });
    };

    return (
        <div className="postDetail-Button">
            <div className="postDetail-ButtonLeft">
               <Button size="xsmall" buttonType="white">
                   <IoArrowBackOutline />
               </Button>
            </div>
            <div className="postDetail-space"/>
            <div className="postDetail-ButtonRight">
                <Button size="medium" buttonType="white" onClick={handleLikeClick}>
                    <IoMdHeartEmpty /> 3
                </Button>
                <Button size="medium" buttonType="white" onClick={handleShareClick}>
                    <HiOutlineShare /> 공유
                </Button>
            </div>

        </div>
    );
};

export default PostActions;
