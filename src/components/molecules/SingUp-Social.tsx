import React from 'react';
import SocialSingUpButton from "../atoms/Button/SocialSingUpButton";

const SingUpSocial = () => {
    return (
        <div className="SingUpSocialBtn">
            <SocialSingUpButton text="네이버 로그인"/>
            <SocialSingUpButton text="카카오 로그인"/>
        </div>
    );
};

export default SingUpSocial;
