import React from "react";
import CustomTypography from "./CustomTypography";
import "../../styles/Board.css";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { orange } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import InflearnTextLogo from '../../inflearnTextLogo.png';

interface ModalBoxProps {
    type: string
    head: string;
    size: string;
    body: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    children?: React.ReactNode;
}

const ModalBox: React.FC<ModalBoxProps> = ({ head, body, size, type, open, setOpen,  children }) => {
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
            case 'login':
                return <img src={InflearnTextLogo} alt="Inflearn Logo" style={{ maxWidth: '130px', maxHeight: '80px', marginTop:'20px'  }} />;
            default:
                return '';
        }
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="modal-box" style={{maxWidth: getSize(size)}}>
                {getType(type)}
                <CustomTypography type="head" body={head}/>
                <CustomTypography type="body" body={body}/>
                {children}
            </div>
        </Modal>
    );
};

export default ModalBox;
