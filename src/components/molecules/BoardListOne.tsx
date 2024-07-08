import React from "react";
import CustomTypography from "../atoms/CustomTypography";
import "../../styles/Board.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CustomTag from "../atoms/CustomTag";
import Button from "../atoms/Button/Button";

// 📌 사용법
// tags : 배열로 넘겨주어야한다.
{/* <BoardListOne
    resolved='미해결'
    head="Section 3 이론 classification Loss function 질문"
    body="안녕하세요.
    Section 3 이론 classification Loss function 질문있습니다."
    writer="John Doe"
    time="2024-06-26"
    good="10"
    view="150"
    commentsCount="5"
    tags= {['spring', 'java', '딥러닝', 'nlp', 'pytorch']}
/> */}

// 추후 해결/미해결이 한글로 받을지 영어로 받을 지 모르므로 수정 필요 주의
interface BoardListOneProps {
    head: string;
    body: string;
    writer: string;
    time: string;
    good: string;
    view: string;
    commentsCount: string;
    tags: string[];
}

const BoardListOne: React.FC<BoardListOneProps> = ({ head, body, writer, time, good, view, commentsCount, tags }) => {
    // const getHeadType = () => {
    //     switch (resolved) {
    //         case '미해결':
    //             return 'unresolved';
    //         case '해결':
    //             return 'resolved';
    //         default:
    //             return '#ced4da';
    //     }
    // };
    
    return (
        <div className="question">
            <div className="question-info">
                <div className="question-title">
                    <CustomTypography type='head' body={head}></CustomTypography>
                </div>
                <div className="question-body">
                <CustomTypography type='body' body={body}></CustomTypography>
                </div>
                <div className="question-tags">
                    {tags.map((tag, index) => (
                        <Button key={index} size="auto" buttonType="tag"> {tag} </Button>
                    ))}
                </div>
                <div className="question-info-footer">
                    <div className="question-info-footer-detail">
                        <CustomTypography type='additional' body={writer}></CustomTypography>
                        <CustomTypography type='additional' body="&nbsp;·&nbsp;"></CustomTypography>
                        <CustomTypography type='additional' body={time}></CustomTypography>
                    </div>
                    <div className="question-info-footer-data">
                        <div>
                            <ThumbUpOffAltIcon/>
                            <CustomTypography type='additional' body={good}></CustomTypography>
                        </div>
                        <div>
                            <VisibilityIcon />
                            <CustomTypography type='additional' body={view}></CustomTypography>
                        </div>
                        <div>
                            <ChatBubbleOutlineIcon />
                            <CustomTypography type='additional' body={commentsCount}></CustomTypography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardListOne;
