import React, { useState } from 'react';
import PostComponent from '../organisms/PostComponent';
import MainCategoryList from '../molecules/MainCategoryList';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const PostTemplates = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("질문");

    return (
        <div className='post-page'>
            <div className='post-category'>
                <MainCategoryList onSelectCategory={setSelectedCategory} displayShortName={true}/>
            </div>
            <div className='code-info-box'>
                <EnergySavingsLeafIcon sx={{width: "1.25rem", color:'rgb(0, 137, 79)'}} />
                <span>코드가 포함된 질문은 이미지 보다 'code', 'codeblock' 이용하시면 더 정확하게 답변 받을 수 있어요.</span>
            </div>
            <PostComponent category={selectedCategory} />
        </div>
    );
};

export default PostTemplates;