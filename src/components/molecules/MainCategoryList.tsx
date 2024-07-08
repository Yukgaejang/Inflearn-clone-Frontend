import React, { useState } from "react";
import styled from "@emotion/styled";
import Button, { ButtonStyleProps } from "../atoms/Button/Button";

const categories: { name: string; buttonType: ButtonStyleProps["buttonType"]; size: ButtonStyleProps["size"]; category: string }[] = [
    { name: "질문 & 답변", buttonType: "MainCategory", size: "auto", category: "questions" },
    { name: "고민있어요", buttonType: "MainCategory", size: "auto", category: "chats" },
    { name: "스터디", buttonType: "MainCategory", size: "auto", category: "studies" },
    { name: "팀 프로젝트", buttonType: "MainCategory", size: "auto", category: "projects" }
];

interface MainCategoryListProps {
    onSelectCategory: (category: string) => void;
    displayShortName?: boolean;
}

const MainCategoryList: React.FC<MainCategoryListProps> = ({ onSelectCategory, displayShortName = false }) => {
    const initialCategoryName = displayShortName ? categories[0].category : categories[0].category;
    const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryName);

    const handleButtonClick = (category: string, name: string) => {
        setSelectedCategory(category);
        onSelectCategory(category);
    };

    return (
        <div className="main-category">
            {categories.map((category, index) => (
                <CategoryButton
                    key={index}
                    {...category}
                    isSelected={category.category === selectedCategory}
                    onClick={() => handleButtonClick(category.category, category.name)}
                >
                    {displayShortName ? category.name.split(" & ")[0] : category.name}
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
