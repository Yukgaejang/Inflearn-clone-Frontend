import React from 'react';
import '../../styles/PostDetail.css';

interface PostHeaderProps {
    title: string;
    author: string;
    date: string;
    views: number;
}

const PostDetailHeader: React.FC<PostHeaderProps> = ({ title, author, date, views }) => {
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
