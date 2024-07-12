import React, {useState} from "react";
import "../../styles/Board.css";
import ModalBox from "../atoms/ModalBox";
import SingUpSocial from "./SingUp-Social";
import '../../styles/SingUp.css';
import CloseIcon from '@mui/icons-material/Close';
import CustomTypography from "../atoms/CustomTypography";
import InputField from "../atoms/InputField";
import SocialSingUpButton from "../atoms/Button/SocialSingUpButton";



interface ProblemModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ProblemModal: React.FC<ProblemModalProps> = ({ open, setOpen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("https://wooyong.shop/auth/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token); // 토큰 저장
                console.log("로그인 성공:", data);
            } else {
                console.log("로그인 실패");
            }
        } catch (error) {
            console.error("API 호출 중 오류 발생:", error);
        }
        
    };
    const handleSearch = (query: string) => {
        console.log(`Searching for: ${query}`);
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
                <div className="singUpInputField">
                    <div className="singUpInputField-Detail">
                        <div className="singUpInputField-Detail-text">
                            <CustomTypography type="body" body="이메일"/>
                        </div>
                        <InputField
                            placeholder="example@inflab.com"
                            onSearch={handleSearch}
                            type="null"
                        />
                    </div>
                    <div className="singUpInputField-Detail">
                        <div className="singUpInputField-Detail-text">
                            <CustomTypography
                                type="body"
                                body="비밀번호"
                            />
                        </div>

                        <InputField
                            placeholder="********"
                            onSearch={handleSearch}
                            type="null"
                        />
                    </div>
                </div>

                <SocialSingUpButton
                    text="로그인"
                    onClick={handleLogin}
                />
                        <div className="singUpTemplates-line">
                            <p>간편로그인</p>
                        </div>

                        <SingUpSocial/>
            </ModalBox>
        </>

);
};

export default ProblemModal;
