import React from "react";
import CustomTypography from "../atoms/CustomTypography";
import "../../styles/Board.css";

interface WeeklyPostProps {
    name: string;
    body: string;
}

const WeeklyPost: React.FC<WeeklyPostProps> = ({ name, body }) => {
    return (
        <div className="weekly-post">
            <CustomTypography type="body3" body={body}></CustomTypography>
            <div className="weekly-post-writer">
                <img src="./logo192.png" alt="Writer Avatar" width={20}/>
                &nbsp;
                <CustomTypography type="body2" body={name}></CustomTypography>
            </div>
        </div>
    );
};

export default WeeklyPost;
