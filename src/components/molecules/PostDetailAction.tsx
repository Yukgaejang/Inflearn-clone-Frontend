import React from 'react';
import Button from '../atoms/Button/Button';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineShare } from 'react-icons/hi';
import '../../styles/PostDetail.css';

const PostActions: React.FC = () => {
    return (
        <div className="postDetail-Button">
            <div className="postDetail-ButtonLeft">
               <Button size="small" buttonType="noneBorder">
                   뒤로
               </Button>
            </div>
            <div className="postDetail-space"/>
            <div className="postDetail-ButtonRight">
                <Button size="small" buttonType="noneBorder">
                    <IoMdHeartEmpty /> 3
                </Button>
                <Button size="small" buttonType="noneBorder">
                    <HiOutlineShare /> 공유
                </Button>
            </div>

        </div>
    );
};

export default PostActions;
