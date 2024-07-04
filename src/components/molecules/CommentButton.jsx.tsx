import React from "react";
import Button from "../atoms/Button/Button";
import { FaRegComment } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import InputField from "../atoms/InputField";
import '../../styles/PostDtailInPotFiled.css'

interface ToggleRepliesButtonProps {
    showReplies: boolean;
    onClick: () => void;
}

export const ToggleRepliesButton: React.FC<ToggleRepliesButtonProps> = ({ showReplies, onClick }) => {
    return (
        <Button size="medium" buttonType="white" onClick={onClick}>
            {showReplies ? <IoIosArrowUp /> : <IoIosArrowDown />} {showReplies ? "숨기기" : "1개 답글"}
        </Button>
    );
};

interface ReplyButtonProps {
    onClick: () => void;
}

export const ReplyButton: React.FC<ReplyButtonProps> = ({ onClick }) => {
    return (
        <Button size="medium" buttonType="white" onClick={onClick}>
            <FaRegComment /> 답글달기
        </Button>
    );
};

interface CommentButtonProps {
    showInputField: boolean;
    setShowInputField: React.Dispatch<React.SetStateAction<boolean>>;
    handleSearch: (query: string) => void;
}

const CommentButton: React.FC<CommentButtonProps> = ({ showInputField, setShowInputField, handleSearch }) => {
    const handleToggleInputField = () => {
        setShowInputField(!showInputField);
    };


    return (
        <>
            {showInputField && (
                <div>
                    <div className="button-InputField">
                        <InputField
                            placeholder="댓글을 입력하세요"
                            onSearch={handleSearch}
                            type="comment"
                        />
                    </div>

                    <div className="button-container">
                        <Button size="xsmall" buttonType="green">
                            등록
                        </Button>
                        <Button size="xsmall" buttonType="white" onClick={handleToggleInputField}>
                            닫기
                        </Button>
                    </div>

                </div>
            )}
        </>
    );
};

export default CommentButton;

