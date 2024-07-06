import React from 'react';
import '../../styles/PostDetail.css';

interface PostBodyProps {
    content: string;
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
    return (
        <div className="postDetail-body">
            <div
                className='body-box'
                style={{
                    lineHeight: '2',
                    fontSize: '16px',
                    fontWeight: 'normal'
                }}
            >
                {content}
            </div>
        </div>
    );
};

export default PostBody;
