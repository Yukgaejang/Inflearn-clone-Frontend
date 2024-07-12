import React, { useState, useEffect, forwardRef } from 'react';
import styled from '@emotion/styled';
import { Container, IconWrapper, Input } from './InputFieldStyle';
import { IoSearchOutline } from 'react-icons/io5';
import { GoHash } from 'react-icons/go';
import { FaRegCommentDots } from 'react-icons/fa';

interface SearchInputProps {
    placeholder: string;
    onSearch: (query: string) => void;
    type: 'search' | 'TagSearch' | 'comment';
    value?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
}

const SearchInput: React.FC<SearchInputProps> = forwardRef(({ placeholder, onSearch, type, value, inputRef }, ref) => {
    const [query, setQuery] = useState(value || '');

    useEffect(() => {
        setQuery(value || '');
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
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
                ref={inputRef}
            />
        </Container>
    );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
