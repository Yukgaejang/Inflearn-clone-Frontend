import React from 'react';
import PostDetailBox from './PostDetailBox';

const examplePost = {
    title: "신입개발자 입니다",
    content: "안녕하세요. 강의를 보고 제가 간단한 erp를 만들고 있는데요. 다른건 어떻게 해결했는데요 모달창에서 부모창으로 데이터를 보내는게 안되더라고요. 혹시 방법이 있을까요?<br/>제가 구현하고 싶은건요<br/>출고할 제품을 입력할때 모달창으로 미리저장된 제품을 선택하면<br/>부모창의 text창에 보내지고 출고할 제품을 다 입력했으면",
    tags: ["자바", "개발자"],
    author: "홍길동",
    date: "24.06.30 22:45",
    views: 2
};

const PostDetailBoxExample: React.FC = () => {
    return (
        <PostDetailBox
            title={examplePost.title}
            content={examplePost.content}
            tags={examplePost.tags}
            author={examplePost.author}
            date={examplePost.date}
            views={examplePost.views}
        />
    );
}

export default PostDetailBoxExample;
