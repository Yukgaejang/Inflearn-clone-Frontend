import React from "react";
import CustomTypography from "./CustomTypography";
import "../../styles/Board.css";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { orange } from '@mui/material/colors';
import Modal from '@mui/material/Modal';

interface ModalBoxProps {
    type: string
    head: string;
    size: string;
    body: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalBox: React.FC<ModalBoxProps> = ({ head, body, size, type, open, setOpen }) => {
    const handleClose = () => setOpen(false);
    const getSize = (size: string) => {
        switch (size) {
            case 'small':
                return 'calc(100% - 40px)';
            case 'big':
                return 'calc(100% - 20px)';
            default:
                return 'calc(100% - 40px)';
        }
    };
    const getType = (type: string) => {
        switch (type){
            case 'problem':
                return <ReportProblemIcon sx={{ color: orange[400], fontSize: "56px" }}/>;
            default:
                return '';
        }
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="modal-box" style={{maxWidth: getSize(size)}}>
                {getType(type)}
                <CustomTypography type="head" body={head} />
                <CustomTypography type="body" body={body} />
                {/* 세미가 버튼 만들면 추가하기! */}
            </div>
        </Modal>
    );
};

export default ModalBox;
