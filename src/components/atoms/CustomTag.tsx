import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

// 📌 사용법
// type : 태그, 해결/미해결 - tag, resolved, unresolved
// tags : 배열로 넘겨주어야 한다.
{/* <CustomTag tags={tags} type="tag" onDeleteTag={handleDeleteTag} /> */}

interface CustomTagProps {
    tags: string[];
    type: string;
    onDeleteTag: (tagIndex: number) => void;
}

const CustomTag: React.FC<CustomTagProps> = ({ type, tags, onDeleteTag }) => {
    const getChipColor = (type: string) => {
        switch (type) {
            case 'tag':
                return '#eff3fa';
            case 'unresolved':
                return '#ced4da';
            case 'resolved':
                return '#00c471';
            default:
                return '#000000';
        }
    };

    const sanitizeTag = (tag: string) => {
        return tag.replace(/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ+/_-]/g, "").toLowerCase();
    };

    return (
        <Stack direction="row" spacing={1}>
            {tags.map((tag, index) => {
                const sanitizedTag = sanitizeTag(tag);
                return (
                    <Chip 
                        key={index} 
                        label={sanitizedTag} 
                        style={{ background: getChipColor(type), margin: "0 4px 10px 0" }}
                        onDelete={() => onDeleteTag(index)}
                    />
                );
            })}
        </Stack>
    );
};

export default CustomTag;
