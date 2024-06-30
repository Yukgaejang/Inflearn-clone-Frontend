import React, { useState } from "react";
import styled from "@emotion/styled";
import Button, { ButtonStyleProps } from "../atoms/Button/Button";
import { BsDot } from "react-icons/bs";
import '../../styles/SubCategory.css'


const categories: { name: string; buttonType: ButtonStyleProps["buttonType"]; size: ButtonStyleProps["size"]; }[] = [
    { name: "최신순", buttonType: "SubCategory", size: "auto" },
    { name: "조회순", buttonType: "SubCategory", size: "auto" },
    { name: "답변많은순", buttonType: "SubCategory", size: "auto" },
    { name: "좋아요순", buttonType: "SubCategory", size: "auto" },
];

const SubCategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

    const handleButtonClick = (name: string) => {
        setSelectedCategory(name);
    };

    return (
        <div>
            {categories.map((category, index) => (
                <SubCategoryButton
                    key={index}
                    {...category}
                    isSelected={category.name === selectedCategory}
                    onClick={() => handleButtonClick(category.name)}
                >
                    <BsDot color={category.name === selectedCategory ? "#00c471" : "silver"} />{category.name}
                </SubCategoryButton>
            ))}
        </div>
    );
};

interface CategoryButtonProps extends ButtonStyleProps {
    isSelected: boolean;
}


const SubCategoryButton = styled(Button)<CategoryButtonProps>`
    color: ${(props) => (props.isSelected ? "#000" : "inherit")}; 
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")}; 
`;

export default SubCategoryList;
