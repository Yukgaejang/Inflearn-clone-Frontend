import React from 'react';
import "../../styles/Board.css";
import SideBox from "../atoms/SideBox";
import Button from '../atoms/Button/Button';

interface PopularTagsProps {
    tags: string[];
}

const printTags = (tags: string[]) => {
    return (
        <div className='tag-box'>
            {tags.map((tag, index) => (
                <Button size="auto" buttonType="tag">
                    {tag}
                </Button>
            ))}
        </div>
    );
};

const PopularTags:React.FC<PopularTagsProps> = ({ tags }) => {
    return <SideBox size="big" head="인기 태그" body={printTags(tags)} />;
};

export default PopularTags;