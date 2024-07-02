import React, { useEffect, useRef } from 'react';
import "../../styles/Post.css";

interface CustomInputProps {
    body: string;
    type: string;
    value?: string;
    onChange?: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, body, value, onChange }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const getType = (type: string) => {
        switch (type) {
            case 'head':
                return "24px";
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

    const autoResize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(() => {
        if (type === 'body' || type === 'head' && textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.addEventListener('keyup', autoResize);
            textarea.addEventListener('keydown', autoResize);

            autoResize();

            return () => {
                textarea.removeEventListener('keyup', autoResize);
                textarea.removeEventListener('keydown', autoResize);
            };
        }
    }, [type, value]);

    return (
        <textarea
            ref={textareaRef}
            className='input-box'
            placeholder={body}
            style={{ height: getType(type), fontSize: getSize(type), resize: "none", fontWeight: getFontWeight(type) }}
            value={value}
            onChange={handleChange}
        />
    );
}

export default CustomInput;
