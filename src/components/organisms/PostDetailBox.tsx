import React from 'react';
import "../../styles/Post.css";
import Button from '../atoms/Button/Button';
import '../../styles/PostDetail.css'
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShare } from "react-icons/hi";
/*사용방법
 서버에서 post로 받아온 데이터 값에 대해서 변경만 해주면 됩니다.
 *컴포넌트가 작게 분리되어있지 않습니다. 데이터와 ui를 한번에 관리하기때문에 좋지 않은 코드라고 생각이들어
 다른 뷰 조립하면서 같이 수정하겠습니다.*/

interface DisplayProps {
    title: string;
    content: string;
    tags: string[];
    author: string;
    date: string;
    views: number;
}

const DisplayPost: React.FC<DisplayProps> = ({ title, content, tags, author, date, views }) => {

    const getType = (type: string) => {
        switch (type) {
            case 'head':
                return "1.5em";
            case 'author':
                return '1rem';
            case 'date':
            case 'views':
                return '14px';
            case 'body':
                return '16px';
            case 'tag':
                return '18px';
            default:
                return '16px';
        }
    };

    const getFontWeight = (type: string) => {
        return type === 'head' || type === 'author' ? 'bold' : 'normal';
    };

    const getSize = (type: string) => {
        return type === 'body' ? '100%' : getType(type);
    };

    return (
        <div className="editor">
            <div className="editor-postBox">
                <div className="PostTitle">
                    <div className="PostHeader">
                        <div className="postDetail-head">
                            <div
                                className='head-box'
                                style={{
                                    height: getType('head'),
                                    fontSize: getSize('head'),
                                    fontWeight: getFontWeight('head')
                                }}
                            >
                                {title}
                            </div>
                        </div>

                        <div className="post-info">
                            <div className="info-author"
                                 style={{
                                     fontSize: getSize('author'),
                                     fontWeight: getFontWeight('author')
                                 }}>{author}</div>
                            <div className="info-data-view">
                                <div className="info-date"
                                     style={{fontSize: getSize('date')}}>
                                    작성일 {date}
                                </div>
                                <div className="info-views"
                                     style={{fontSize: getSize('views')}}>
                                    조회수 {views}
                                </div>
                            </div>

                        </div>
                    </div>


                    <hr className="postHr"/>

                    <div className="postDetail-body">
                        <div
                            className='body-box'
                            style={{
                                minHeight: '300px',
                                lineHeight: '2',
                                height: getType('body'),
                                fontSize: getSize('body'),
                                fontWeight: getFontWeight('body')
                            }}
                        >
                            {content}
                        </div>
                    </div>

                    <div className="postDetail-tag">
                        <div className="tag-buttons">
                            {tags.map((tag, index) => (
                                <Button key={index} size="auto" buttonType="tag">
                                    {tag}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="postDetail-Button">
                    <Button size="small" buttonType="noneBorder">
                        <IoMdHeartEmpty/> 3
                    </Button>
                    <Button size="small" buttonType="noneBorder">
                        <HiOutlineShare/> 공유
                    </Button>
                </div>
            </div>

        </div>
    );
}

// 더미데이터
const examplePost = {
    title: "신입개발자 입니다",
    content: "안녕하세요. 강의를 보고 제가 간단한 erp를 만들고 있는데요." +
        "다른건 어떻게 해결했는데요 모달창에서 부모창으로 데이터를 보내는게 안되더라고요." +
        "혹시 방법이 있을까요?<br/>제가 구현하고 싶은건요<br/>출고할 제품을 입력할때 모달창으로 미리저장된 제품을 선택하면<br/>부모창의 text창에 보내지고 출고할 제품을 다 입력했으면",
    tags: ["자바", "개발자"],
    author: "홍길동",
    date: "24.06.30 22:45",
    views: 2
};

const DisplayPostExample: React.FC = () => {
    return (
        <DisplayPost
            title={examplePost.title}
            content={examplePost.content}
            tags={examplePost.tags}
            author={examplePost.author}
            date={examplePost.date}
            views={examplePost.views}
        />
    );
}

export default DisplayPostExample;
