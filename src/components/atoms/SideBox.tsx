import React from "react";
import CustomTypography from "./CustomTypography";
import "../../styles/Board.css";

interface SideBoxProps {
    head: string;
    size: string;
    body: React.ReactNode;
}

const SideBox: React.FC<SideBoxProps> = ({ head, body, size }) => {
    const getSize = (size: string) => {
        switch (size) {
            case 'small':
                return '170px';
            case 'big':
                return '210px';
            default:
                return '170px';
        }
    };

    return (
        <div className="sidebox" style={{maxWidth: getSize(size)}}>
            <CustomTypography type="sidehead" body={head} />
            <div>{body}</div>
        </div>
    );
};

export default SideBox;
