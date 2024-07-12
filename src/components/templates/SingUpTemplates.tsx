import React from 'react';
import CustomTypography from '../atoms/CustomTypography';
import '../../styles/SingUp.css'
import SingUpSocial  from "../molecules/SingUp-Social";
import InflearnLogoImg from "../../inflearnLogo.jpg"
import RallitLogoImg from "../../rallitLogo.png"
import InputField from "../atoms/InputField";
import SocialSingUpButton from "../atoms/Button/SocialSingUpButton";


const SingUpTemplates = () => {
    const handleSearch = (query: string) => {
        console.log(`Searching for: ${query}`);
    };

    const handleSignUp = async () => {
        const email = '';
        const password = '';

        try {
            const response = await fetch('https://wooyong.shop/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    nickname: 'eksfn12s',
                    loginType: 0,
                    authorityType: 'ROLE_USER'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('회원가입 성공', data);
            } else {
                console.error('회원가입 실패', data);
            }
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
        }
    };


    return (
        <div className="singUpTemplates">
            <div className="singUpTemplatesTitle">
                <a className="LogoImg">
                    <img src={InflearnLogoImg}/>
                </a>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple"
                     className="svg-inline--fa fa-link-simple " role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 576 512" width="24">
                    <path fill="currentColor"
                          d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                </svg>
                <a className="LogoImg">
                    <img src={RallitLogoImg}/>
                </a>


            </div>
            <div className="singUpTemplates-text">
                <div className="singUpTitle">회원가입</div>
                <CustomTypography
                    type="body"
                    body="인프런 계정으로 로그인할 수 있어요"
                />
            </div>
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
                <div className="singUpInputField-Detail">
                    <div className="singUpInputField-Detail-text">
                        <CustomTypography
                            type="body"
                            body="비밀번호 확인"
                        />
                    </div>
                    <InputField
                        placeholder="********"
                        onSearch={handleSearch}
                        type="null"
                    />
                </div>

                <SocialSingUpButton
                    text="가입하기"
                    onClick={handleSignUp}
                />
            </div>

            <div className="singUpTemplates-line">
                <p>간편로그인</p>
            </div>

            <div className="singUpTemplates-social">
                <SingUpSocial/>
                <p>해당 계정은 통합 계정으로 인프런과 랠릿에서 제공하는 서비스를 모두 이용하실 수 있습니다. 가입 시, 통합 계정 및 서비스 이용약관 (인프런 / 랠릿), 개인정보처리 방침에 동의하는
                    것으로 간주합니다.</p>
            </div>
        </div>
    );
};

export default SingUpTemplates;