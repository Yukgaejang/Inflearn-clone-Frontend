import React, {useState} from 'react';
import '../../styles/PostDetail.css';
import Button from '../atoms/Button/Button'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import axios from 'axios';

interface PostHeaderProps {
    title: string;
    author: string;
    date: string;
    views: number;
}

const PostDetailHeader: React.FC<PostHeaderProps> = ({ title, author, date, views }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleEdit = () => {
        console.log('수정 버튼 클릭');

    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete('https://wooyong.shop/boards/1', {
                headers: {
                    'accept': '*/*'
                }
            });
            console.log('삭제 성공', response.data);

        } catch (error) {
            console.error('삭제 실패', error);

        }
    };

    return (
        <div className="PostHeader">
            <div className="postDetail-head">
                <div
                    className='head-box'
                    style={{
                        height: "1.5em",
                        fontSize: "1.5em",
                        fontWeight: 'bold'
                    }}
                >
                    {title}
                </div>
                <Button size="small" buttonType="noneBorder" onClick={toggleDropdown}>
                    <HiOutlineDotsHorizontal/>
                </Button>
                {dropdownVisible && (
                    <div className="dropdown-menu">
                        <button onClick={handleEdit}>수정</button>
                        <button onClick={handleDelete}>삭제</button>
                    </div>
                )}
            </div>
            <div className="post-info">
                <div className="info-author"
                     style={{
                         fontSize: '1rem',
                         fontWeight: 'bold'
                     }}>{author}</div>
                <div className="info-data-view">
                    <div className="info-date" style={{ fontSize: '14px' }}>
                        작성일 {date}
                    </div>
                    <div className="info-views" style={{ fontSize: '14px' }}>
                        조회수 {views}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetailHeader;
