import React, { useState } from 'react';
import "../../styles/Post.css";

interface CustomInputProps {
    body: string;
    type: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, body }) => {
    const [inputValue, setInputValue] = useState();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    const getType = (type: string) => {
        switch (type) {
            case 'head':
                return "25px";
            case 'body':
                return '16px';
            case 'tag':
                return '18px';
            default:
                return '16px';
        }
    };

    const getFontWeight = (type: string) => {
        return type === 'head' ? 'bold' : 'normal';
    };

    const getSize = (type: string) => {
        return type === 'body' ? '100%' : getType(type);
    };

    return (
        <textarea 
                className='input-box' 
                placeholder={body} 
                style={{ height: getType(type), fontSize: getSize(type), resize: "none", fontWeight: getFontWeight(type)}} 
                value={inputValue}
                onChange={handleChange}
        />
    );
}

export default CustomInput;