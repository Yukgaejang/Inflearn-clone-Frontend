import React from "react";
import CustomTypography from "../atoms/CustomTypography";
import "../../styles/Mypage.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from "../atoms/Button/Button";

interface MyBoardListOneProps {
    id : string;
    head: string;
    body: string;
    time: string;
    good: string;
    commentsCount: string;
    category: string;
}

const MyBoardListOne: React.FC<MyBoardListOneProps> = ({ id, head, body, time, good, commentsCount, category }) => {
    const truncateBody = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    
    return (
        <div className="myboard">
            <div className="myboard-top">
                <div className="myboard-info">
                    <Button size="auto" buttonType="tag">
                        {category}
                    </Button>
                    <CustomTypography type='additional' body={`에 #${id} 게시물을 작성하였습니다.`}></CustomTypography>
                    <CustomTypography type='additional' body={time}></CustomTypography>
                </div>
                <div className="myboard-button">
                    <Button size="small" buttonType="noneBorder"> 수정</Button>
                    <Button size="small" buttonType="noneBorder"> 삭제</Button>
                </div>
            </div>
            <div className="myboard-data">
                <div className="myboard-body">
                    <CustomTypography type='head' body={head}></CustomTypography>
                    <CustomTypography type='body' body={truncateBody(body, 40)}></CustomTypography>
                </div>
                <div className="myboard-footer">
                    <div>
                        <ThumbUpOffAltIcon/>
                        <CustomTypography type='additional' body={good}></CustomTypography>
                    </div>
                    <div>
                        <ChatBubbleOutlineIcon />
                        <CustomTypography type='additional' body={commentsCount}></CustomTypography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyBoardListOne;