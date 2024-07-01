import React, { useState, useEffect } from "react";
import CustomInput from "../atoms/CustomInput";
import Button from "../atoms/Button/Button";

interface PostComponentProps {
    category: string;
}

interface CategoryContents {
    [key: string]: string;
}

const categoryContents: CategoryContents = {
    "질문 & 답변": `- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!
- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.
- 먼저 유사한 질문이 있었는지 검색해보세요.
- 서로 예의를 지키며 존중하는 문화를 만들어가요.
- 잠깐! 인프런 서비스 운영 관련 문의는 1:1 문의하기를 이용해주세요.`,
    "고민있어요": `- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.
- 서로 예의를 지키며 존중하는 문화를 만들어가요.
- 잠깐! 인프런 서비스 운영 관련 문의는 1:1 문의하기를 이용해주세요.`,
    "스터디": `[개발 스터디 모집 내용 예시]

스터디 주제 :

스터디 목표 :

예상 스터디 일정(횟수) :

예상 커리큘럼 간략히 :

예상 모집인원 :

스터디 소개와 개설 이유 :

스터디 관련 주의사항 :

스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등.) :`,
    "팀 프로젝트": `[개발 프로젝트 모집 내용 예시]

프로젝트 주제 :

프로젝트 목표 :

예상 프로젝트 일정(횟수) :

예상 커리큘럼 간략히 :

예상 모집인원 :

프로젝트 소개와 개설 이유 :

프로젝트 관련 주의사항 :

프로젝트에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등.) :`
};

const PostComponent: React.FC<PostComponentProps> = ({ category }) => {
    const [content, setContent] = useState<string>("");
    const [contentHead, setContentHead] = useState<string>("");
    const [contentTag, setContentTag] = useState<string>("");

    useEffect(() => {
        if (category === "스터디" || category === "팀 프로젝트") {
            setContent(categoryContents[category]);
        } else {
            setContent("");
        }
    }, [category]);

    const handleContentChange = (newContent: string) => {
        setContent(newContent);
    };

    const handleSubmit = async () => {
        const postData = {
            category,
            title: contentHead,
            tags: contentTag,
            body: content
        };

        console.log(postData);
    };

    return (
        <div className="editor">
            <CustomInput
                type="head"
                body="제목에 핵심 내용을 요약해보세요."
                value={contentHead}
                onChange={setContentHead}
            />
            <CustomInput
                type="tag"
                body="태그를 설정하세요 (최대 10개)"
                value={contentTag}
                onChange={setContentTag}
            />
            <div className="editor-body">
                <CustomInput
                    type="body"
                    body={categoryContents[category] || ""}
                    value={content}
                    onChange={handleContentChange}
                />
            </div>
            <div className="editor-submit">
                <Button size="small" buttonType="white">
                    취소
                </Button>
                <Button size="small" buttonType="green" onClick={handleSubmit}>
                등록
                </Button>
            </div>
        </div>
    );
};

export default PostComponent;
