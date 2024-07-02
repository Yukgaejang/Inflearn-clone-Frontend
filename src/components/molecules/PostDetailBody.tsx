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
                    minHeight: '300px',
                    lineHeight: '2',
                    height: '16px',
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
