import React from 'react';
import KakaoLogoImg from '../../../kakaoLogo.png';
import NaverLogoImg from '../../../naverLogo.png';

interface SocialSingUpButtonProps {
    text: string;
    onClick?: () => void; // Promise<void> 대신 void로 변경
}

const Button: React.FC<SocialSingUpButtonProps> = ({ text, onClick }) => {
    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: text === '가입하기' ? '40px' : '15px',
        backgroundColor: text === '네이버 로그인' ? '#00c73c' : text === '카카오 로그인' ? '#F9E000' : '#00C471',
        color: text === '가입하기' ? '#ffffff' : text=='로그인' ? '#ffffff':'#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: text === '가입하기' ? '95%' : '100%',
        height: text === '가입하기' ? '50px' : '2.625rem',
        marginBottom: '5px',
        fontWeight: 'bold'
    };

    const buttonImgStyle: React.CSSProperties = {
        marginRight: '10px',
        width: '30px',
        height: '30px'
    };

    const getImageSrc = (text: string) => {
        if (text === '네이버 로그인') {
            return NaverLogoImg;
        } else if (text === '카카오 로그인') {
            return KakaoLogoImg;
        }
        else {
            return '';
        }
    };
    const imageSrc = getImageSrc(text);

    const handleClick = async () => {
        if (onClick) {
            await onClick();
        }
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {imageSrc && <img src={imageSrc} alt="" style={buttonImgStyle} />}
            {text}
        </button>
    );
};

export default Button;
