import React from "react";
import "../../styles/Board.css";
import CustomInput from "../atoms/CustomInput";

const PostComponent: React.FC = () => {
    const tags = ["spring", "java", "자바", "블로그"];

    return (
        <div className="editor">
            <CustomInput type="head" body="제목에 핵심 내용을 요약해보세요."/>
            <CustomInput type="tag" body="태그를 설정하세요 (최대 10개)"/>
            <div className="editor-body">
                <CustomInput type="body" body="- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!
- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.
- 먼저 유사한 질문이 있었는지 검색해보세요.
- 서로 예의를 지키며 존중하는 문화를 만들어가요.
- 잠깐! 인프런 서비스 운영 관련 문의는 1:1 문의하기를 이용해주세요." />
            </div>
        </div>
    );
};

export default PostComponent;
