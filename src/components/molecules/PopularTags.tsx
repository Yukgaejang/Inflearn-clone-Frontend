import React from 'react';
import "../../styles/Board.css";
import SideBox from "../atoms/SideBox";
import WeeklyPost from "../atoms/WeeklyPost";
import CustomTag from '../atoms/CustomTag';

interface PopularTagsProps {
    tags: string[];
}

const printTags = (tags: string[]) => {
    return (
        <div className='tag-box'>
            <CustomTag tags={tags} type="tag"/>
        </div>
    );
};

const PopularTags:React.FC<PopularTagsProps> = ({ tags }) => {
    return <SideBox size="big" head="인기 태그" body={printTags(tags)} />;
};

export default PopularTags;