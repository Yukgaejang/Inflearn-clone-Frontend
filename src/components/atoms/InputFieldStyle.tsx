import { css } from "@emotion/react";
import styled from "@emotion/styled";

//입력창 스타일
export const Container = styled.div<{ type: 'search' | 'TagSearch' | 'comment' | 'null' }>`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
    width: 95%;
    height: 48px;

`;

export const IconWrapper = styled.span`
    margin-right: 8px;
    color: #272626;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-left: 8px;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    flex: 1;

    ::placeholder {
        color: #d8d8d8;
        font-size: 15px;
        font-weight: bold;
    }
`;
