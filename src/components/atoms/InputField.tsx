import React from 'react';
import styled from '@emotion/styled';
import { Container, IconWrapper, Input } from './InputFieldStyle';
import { IoSearchOutline } from 'react-icons/io5';
import { GoHash } from 'react-icons/go';
import { FaRegCommentDots } from 'react-icons/fa';


/* 사용방법
 placeholder="입력창 메시지 작성"
 type="타입선택"
 (Search - 검색창, TageSearch - 태그검색창, comment - 댓글 입력창)

 - 예시
    <InputField   placeholder="궁금한 질문을 검색해보세요!"
                         onSearch={handleSearch}
                           type="search"
     ></InputField>
     <InputField   placeholder="태그로 검색해보세요!"
                  onSearch={handleSearch}
                  type="TagSearch"
     ></InputField>
     <InputField   placeholder="사용자님 답변을 작성해보세요."
                  onSearch={handleSearch}
                  type="comment"
     ></InputField>
 */

interface SearchInputProps {
    placeholder: string;
    onSearch: (query: string) => void;
    type: 'search' | 'TagSearch' | 'comment';
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSearch, type }) => {
    const [query, setQuery] = React.useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') { //엔터로 검색
            onSearch(query);
        }
    };

    let icon;
    switch (type) {
        case 'search':
            icon = <IoSearchOutline />;
            break;
        case 'TagSearch':
            icon = <GoHash />;
            break;
        case 'comment':
            icon = <FaRegCommentDots />;
            break;
        default:
            icon = null;
    }

    return (
        <Container type={type}>
            <IconWrapper>{icon}</IconWrapper>
            <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
            />
        </Container>
    );
};

export default SearchInput;

