import { css } from "@emotion/react";

/* 버튼 사이즈
    ( xsmall: 좋아요
      small: 취소, 등록, 공유 등 대부분
      medium: 글쓰기, 답글 달기
      large: 검색
      auto: 태그  )
 */
export const buttonSize = {
    xsmall:css`
        width:56px;
        height: 42px;
    `,
    small: css`
        width: 73px;
        height: 42px;
    `,
    medium: css`
        width: 90px;
        height: 40px;
    `,
    large: css`
        width: 96px;
        height: 48px;
    `,
    auto : css`
    width:auto;
    height: 26px;
    `
};

/* 버튼 타입
    ( white : 하얀버튼(취소, 좋아요, 공유 버튼,..),
      green : 초록버튼(등록, 검색버튼),
      black : 검정버튼(글쓰기),
      noneBorder: 테두리없는 버튼(공유, 저장, 초기화 ..),
      tag: 태그버튼(태그)
     )
 */
//하얀버튼 스타일
export const whiteButton = css`
        background-color: #ffffff;
        color: #000000;
        border-width: 1px;
        border-color: #cacaca;
        font-weight: bold;
        border-radius: 7px;
        &:hover {
            background-color: #f6f6f6;
        }
    `;

//초록버튼 스타일
export const greenButton =  css`
        background-color: #00c471;
        color: #ffff;
        border: none;
        font-weight: bold;
        border-radius: 7px;
        &:hover {
            background-color: #00b96c;
        }
    `;

//검정색버튼 스타일
export const blackButton =  css`
        background-color: #3e4042;
        color: #fff;
        border-radius: 4px;
        border: none;
        font-weight: bold;
    `;

//테두리없는 버튼 스타일
export const noneBorderButton = css`
    border: none;
    background-color: white;
    font-weight: bold;
    padding: 5px 12px;
    border-radius: 5px;

    &:hover {
        background-color: #f3f3f3;
    }
`;

//태그버튼 스타일
export const tagButton = css`
    border: none;
    background-color: #eff3fa;
    font-size: 13px;
    border-radius: 5px;
    padding: 4px 8px;
    color: #000;

    &:hover {
        background-color: #e7ecf3;
        color: #626262;
    }
`;

export const buttonType = {
    white: whiteButton,
    green:  greenButton,
    black: blackButton,
    noneBorder: noneBorderButton,
    tag:tagButton,
};