import React from "react";
import "../../styles/Board.css";
import ModalBox from "../atoms/ModalBox";
import SingUpSocial from "./SingUp-Social";
import '../../styles/SingUp.css';
import CloseIcon from '@mui/icons-material/Close';


interface ProblemModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ProblemModal: React.FC<ProblemModalProps> = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <ModalBox
                type="login"
                size="small"
                head=""
                body=""
                open={open}
                setOpen={setOpen}
            >
                <button className="close-button" onClick={handleClose}>
                    <CloseIcon/>
                </button>

                <div className="singUpTemplates-line">
                    <p>간편로그인</p>
                </div>

                <SingUpSocial/>
            </ModalBox>
        </>

    );
};

export default ProblemModal;
