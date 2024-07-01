import React, { useState } from 'react';
import PostComponent from '../organisms/PostComponent';
import MainCategoryList from '../molecules/MainCategoryList';

const PostTemplates = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("질문 & 답변");

    return (
        <div className='post-page'>
            <div className='post-category'>
                <MainCategoryList onSelectCategory={setSelectedCategory} />
            </div>
            <PostComponent category={selectedCategory} />
        </div>
    );
};

export default PostTemplates;