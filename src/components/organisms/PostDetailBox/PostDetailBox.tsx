import React from 'react';
import '../../../styles/PostDetail.css';
import PostHeader from '../../molecules/PostDetailHeader';
import PostBody from '../../molecules/PostDetailBody';
import PostTags from '../../molecules/PostDetailTag';
import PostActions from '../../molecules/PostDetailAction';

interface DisplayProps {
    title: string;
    content: string;
    tags: string[];
    author: string;
    date: string;
    views: number;
}

const PostDetailBox: React.FC<DisplayProps> = ({ title, content, tags, author, date, views }) => {
    return (
        <div className="editor">
            <div className="editor-postBox">
                <PostHeader title={title} author={author} date={date} views={views} />
                <hr className="postHr" />
                <PostBody content={content} />
                <PostTags tags={tags} />
                <PostActions />
            </div>
        </div>
    );
};

export default PostDetailBox;
