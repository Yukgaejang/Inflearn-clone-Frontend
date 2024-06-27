import React from "react";
import "../../styles/Board.css";
import PopularTags from "../molecules/PopularTags";

const PopularTagsBox: React.FC = () => {
    const tags = ["spring", "java", "자바", "블로그"];

    return (
        <div>
            <PopularTags tags={tags}/>
        </div>
    );
};

export default PopularTagsBox;
