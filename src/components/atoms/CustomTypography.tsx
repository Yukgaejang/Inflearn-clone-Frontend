import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";

// 📌 사용법
// type : 글씨체의 용도 (head, body, additional)
// body : 내용
// <CustomTypography type="head" body="This is the headtitle" />

// 추가 글씨체 작성 가능 
// 아래 head, body, additional과 같이 하나의 이름을 설정
const theme: Theme = createTheme({
    typography: {
        head: {
            fontSize: '1.2rem',
            color: 'black',
            fontWeight: 'bolder'

        },
        sidehead: {
            fontSize: '0.94rem',
            color: 'black',
            fontWeight: 'bolder'

        },
        body: {
            fontSize: '0.975rem',
            color: '#495057'
        },
        body2: {
            fontSize: '0.87rem',
            color: '#212529',
            fontWeight: '600'
        },
        body3: {
            fontSize: '0.85rem',
            color: '#495057',
        },
        body4: {
            fontSize: '0.875rem',
            color: 'black',
        },
        additional: {
            fontSize: '0.875rem',
            color: 'gray'
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    head: "h5", // 게시글 목록에서 타이틀(head)
                    sidehead : "h6",
                    body: "body",
                    body2: "body",
                    body3: "body",
                    body4: "body",
                    additional: "overline", // 작성자, 시간, 좋아요, 조회수, 댓글수 등 부가 정보
                },
            },
        },
    },
});

declare module "@mui/material/styles" {
    interface TypographyVariants {
        head: React.CSSProperties;
        sidehead: React.CSSProperties;
        body: React.CSSProperties;
        body2: React.CSSProperties;
        body3: React.CSSProperties;
        body4: React.CSSProperties;
        additional: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        head?: React.CSSProperties;
        sidehead?: React.CSSProperties;
        body?: React.CSSProperties;
        body2?: React.CSSProperties;
        body3?: React.CSSProperties;
        body4?: React.CSSProperties;
        additional?: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        head: true;
        sidehead: true;
        body: true;
        body2: true;
        body3: true;
        body4: true;
        additional: true;
    }
}

interface CustomTypographyProps {
    type: 'head' | 'body' | 'additional' | 'sidehead' | 'body2' | 'body3'| 'body4';
    body: string;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({ type, body }) => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Typography variant={type}>{body}</Typography>
            </div>
        </ThemeProvider>
    );
};

export default CustomTypography;
