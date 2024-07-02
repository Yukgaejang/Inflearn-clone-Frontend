import React from 'react';
import Button from '../atoms/Button/Button';
import '../../styles/PostDetail.css';

interface PostTagsProps {
    tags: string[];
}

const PostTags: React.FC<PostTagsProps> = ({ tags }) => {
    return (
        <div className="postDetail-tag">
            <div className="tag-buttons">
                {tags.map((tag, index) => (
                    <Button key={index} size="auto" buttonType="tag">
                        {tag}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default PostTags;
