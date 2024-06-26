import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

// 📌 사용법
// type : 태그, 해결/미해결 - tag, resolved, unresolved
// tags : 배열로 넘겨주어야한다.
{/* <CustomTag tags={tags} type= "tag"/> */}
interface CustomTagProps {
    tags: string[];
    type: string
}
const CustomTag: React.FC<CustomTagProps> = ({ type, tags }) => {
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
    return (
        <Stack direction="row" spacing={1}>
            {tags.map((tag, index) => (
                <Chip key={index} label={tag} style={{background: getChipColor(type)}}/>
            ))}
        </Stack>
    );
};

export default CustomTag;