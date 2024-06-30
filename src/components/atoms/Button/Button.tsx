import React from "react";
import styled from "@emotion/styled";
import {buttonSize, buttonType} from "./ButtonStyles";
/*
./ButtonStyles 에 각각의 size, buttonType에 적용되는 버튼 작성되어 있음

사용방법 - size, buttonType 지정 해줌, icon 있는 경우 추가 O
예시:
    <Button size="small" buttonType="white">
         취소
    </Button>

    -icon 있는 버튼 ( <icon> 버튼 ) : icon 넣은 후 띄어쓰기!
    <Button size="medium" buttonType="noneBorder">
         <GoSync/> 초기화
    </Button>
*/
export type ButtonStyleProps = {
    size: "xsmall" | "small" | "medium" | "large" | "auto",
    buttonType: "white" | "green" | "black" | "noneBorder" | "tag" | "MainCategory" | "SubCategory",
    onClick?: () => void
};

const ButtonStyle = styled.button<ButtonStyleProps>`
    cursor: pointer;
    ${(props) => buttonSize[props.size]}
    ${(props) => buttonType[props.buttonType]}
`;

interface ButtonProps extends ButtonStyleProps {
    children: React.ReactNode;
    // onClick?: () => void;
}


const Button = ({children, ...styleProps}: ButtonProps) => {
    return (
        <ButtonStyle  {...styleProps} >
            {children}
        </ButtonStyle>
    );
};

export default Button;
