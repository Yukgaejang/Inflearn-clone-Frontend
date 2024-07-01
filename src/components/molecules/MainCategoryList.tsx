import React, { useState } from "react";
import styled from "@emotion/styled";
import Button, { ButtonStyleProps } from "../atoms/Button/Button";

const categories: { name: string; buttonType: ButtonStyleProps["buttonType"]; size: ButtonStyleProps["size"]; }[] = [
    { name: "질문 & 답변", buttonType: "MainCategory", size: "auto" },
    { name: "고민있어요", buttonType: "MainCategory", size: "auto" },
    { name: "스터디", buttonType: "MainCategory", size: "auto" },
    { name: "팀 프로젝트", buttonType: "MainCategory", size: "auto" }
];

interface MainCategoryListProps {
    onSelectCategory: (category: string) => void;
}


const MainCategoryList: React.FC<MainCategoryListProps> = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

    const handleButtonClick = (name: string) => {
        setSelectedCategory(name);
        onSelectCategory(name);
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
    border-color: ${(props) => (props.isSelected ? "rgb(0, 196, 113)" : "rgb(222, 226, 230)")};
`;

export default MainCategoryList;
