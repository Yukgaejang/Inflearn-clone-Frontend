import React from 'react';
import KakaoLogoImg from '../../../kakaoLogo.png';
import NaverLogoImg from '../../../naverLogo.png';

interface SocialSingUpButtonProps {
    text: string;
}

const Button: React.FC<SocialSingUpButtonProps> = ({ text }) => {
    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px',
        backgroundColor: text === '네이버 로그인' ? '#00c73c' : text === '카카오 로그인' ? '#F9E000' : '#007bff',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '2.625rem',
        marginTop: '1rem'
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
        } else {
            return '';
        }
    };

    return (
        <button style={buttonStyle}>
            <img src={getImageSrc(text)} alt="" style={buttonImgStyle} />
            {text}
        </button>
    );
};

export default Button;
