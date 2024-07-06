import React from 'react';
import Button from '../atoms/Button/Button';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineShare } from 'react-icons/hi';
import { IoArrowBackOutline } from "react-icons/io5";
import '../../styles/PostDetail.css';

const PostActions: React.FC = () => {
    return (
        <div className="postDetail-Button">
            <div className="postDetail-ButtonLeft">
               <Button size="xsmall" buttonType="white">
                   <IoArrowBackOutline />
               </Button>
            </div>
            <div className="postDetail-space"/>
            <div className="postDetail-ButtonRight">
                <Button size="medium" buttonType="white">
                    <IoMdHeartEmpty /> 3
                </Button>
                <Button size="medium" buttonType="white">
                    <HiOutlineShare /> 공유
                </Button>
            </div>

        </div>
    );
};

export default PostActions;
