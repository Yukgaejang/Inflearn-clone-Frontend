import React from "react";
import CustomTypography from "../atoms/CustomTypography";
import "../../styles/Board.css";

interface TopWriterProps {
    name: string;
    count: string;
}

const TopWriter: React.FC<TopWriterProps> = ({ name, count }) => {
    return (
        <div className="top-writers-list">
            <img src="./logo192.png" alt="Writer Avatar" width={25}/>
            <div className="top-writers-list-writer">
                <CustomTypography type="body2" body={name}></CustomTypography>
                <CustomTypography type="additional" body={count}></CustomTypography>
            </div>
        </div>
    );
};

export default TopWriter;
