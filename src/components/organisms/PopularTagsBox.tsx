import React, { useEffect, useState } from "react";
import "../../styles/Board.css";
import PopularTags from "../molecules/PopularTags";
import { customizedAxios } from '../../util/CustomizedAxios';

const PopularTagsBox: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customizedAxios.get("/boards/top/tags");
                const tagNames = response.data.map((tag: { tagName: string }) => tag.tagName);
                setTags(tagNames);
            } catch (error) {
                console.error("Error fetching:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <PopularTags tags={tags} />
        </div>
    );
};

export default PopularTagsBox;
