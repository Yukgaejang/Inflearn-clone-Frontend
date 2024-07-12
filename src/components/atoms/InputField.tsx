import React from 'react';
import styled from '@emotion/styled';
import { Container, IconWrapper, Input } from './InputFieldStyle';
import { IoSearchOutline } from 'react-icons/io5';
import { GoHash } from 'react-icons/go';
import { FaRegCommentDots } from 'react-icons/fa';

interface SearchInputProps {
    placeholder: string;
    onSearch: (query: string) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: 'search' | 'TagSearch' | 'comment' | 'null';
}

const InputField: React.FC<SearchInputProps> = ({ placeholder, onSearch, type, onChange }) => {
    const [query, setQuery] = React.useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(query);
            setQuery('');
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
            break;
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

export default InputField;
