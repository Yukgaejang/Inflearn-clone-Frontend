import React, { useState } from "react";
import styled from "@emotion/styled";
import Button, { ButtonStyleProps } from "../atoms/Button/Button";

const categories: { name: string; buttonType: ButtonStyleProps["buttonType"]; size: ButtonStyleProps["size"]; }[] = [
    { name: "질문 & 답변", buttonType: "MainCategory", size: "auto" },
    { name: "고민있어요", buttonType: "MainCategory", size: "auto" },
    { name: "스터디", buttonType: "MainCategory", size: "auto" },
    { name: "팀 프로젝트", buttonType: "MainCategory", size: "auto" },
    { name: "블로그", buttonType: "MainCategory", size: "auto" },
    { name: "채용", buttonType: "MainCategory", size: "auto" },
];

const MainCategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

    const handleButtonClick = (name: string) => {
        setSelectedCategory(name);
    };

    return (
        <div>
            {categories.map((category, index) => (
                <CategoryButton
                    key={index}
                    {...category}
                    isSelected={category.name === selectedCategory}
                    onClick={() => handleButtonClick(category.name)}
                >
                    {category.name}
                </CategoryButton>
            ))}
        </div>
    );
};

interface CategoryButtonProps extends ButtonStyleProps {
    isSelected: boolean;
}


const CategoryButton = styled(Button)<CategoryButtonProps>`
    color: ${(props) => (props.isSelected ? "#00c471" : "inherit")}; 
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")}; 
`;

export default MainCategoryList;
