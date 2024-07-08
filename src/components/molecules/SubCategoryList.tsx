import React, { useState } from "react";
import styled from "@emotion/styled";
import Button, { ButtonStyleProps } from "../atoms/Button/Button";
import { BsDot } from "react-icons/bs";

const categories: { name: string; buttonType: ButtonStyleProps["buttonType"]; size: ButtonStyleProps["size"]; category: string; }[] = [
    { name: "최신순", buttonType: "SubCategory", size: "auto", category: "recent" },
    { name: "조회순", buttonType: "SubCategory", size: "auto", category: "view" },
    { name: "답변많은순", buttonType: "SubCategory", size: "auto", category: "comment" },
    { name: "좋아요순", buttonType: "SubCategory", size: "auto", category: "recommend" },
];

interface SubCategoryListProps {
    onSelectSubCategory: (category: string) => void;
}

const SubCategoryList: React.FC<SubCategoryListProps> = ({ onSelectSubCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].category);

    const handleButtonClick = (category: string) => {
        setSelectedCategory(category);
        onSelectSubCategory(category);
    };

    return (
        <div>
            {categories.map((category, index) => (
                <SubCategoryButton
                    key={index}
                    {...category}
                    isSelected={category.category === selectedCategory}
                    onClick={() => handleButtonClick(category.category)}
                >
                    <BsDot color={category.category === selectedCategory ? "#00c471" : "silver"} />{category.name}
                </SubCategoryButton>
            ))}
        </div>
    );
};

interface CategoryButtonProps extends ButtonStyleProps {
    isSelected: boolean;
}

const SubCategoryButton = styled(Button)<CategoryButtonProps>`
    color: ${(props) => (props.isSelected ? "#000" : "silver")}; 
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")}; 
    font-size: 13px;
`;

export default SubCategoryList;
