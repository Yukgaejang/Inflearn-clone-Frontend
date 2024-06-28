import React from "react";
import "../../styles/Board.css";
import ModalBox from "../atoms/ModalBox";

interface ProblemModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ProblemModal: React.FC<ProblemModalProps> = ({ open, setOpen }) => {
    return (
        <ModalBox
                type="problem"
                size="small"
                head="문제가 발생했습니다."
                body="검색하실 내용을 2자 이상으로 검색해주세요."
                open={open}
                setOpen={setOpen}
            />
    );
};

export default ProblemModal;
