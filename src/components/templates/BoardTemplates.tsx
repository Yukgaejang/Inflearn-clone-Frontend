import React, { useState } from "react";
import WeeklyPostBox from "../organisms/WeeklyPostBox";
import TopWrtiersBox from "../organisms/TopWritersBox";
import PopularTagsBox from "../organisms/PopularTagsBox";
import BoardList from "../organisms/BoardList";
import MainCategoryList from "../molecules/MainCategoryList";
import InputField from "../atoms/InputField";
import SubCategoryList from "../molecules/SubCategoryList";
import Button from "../atoms/Button/Button";
import { GoSync } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import "../../styles/Board.css";

const BoardTemplates = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("질문 & 답변");
    const [search, setSearch ] = useState<String>("");
    const [tagSearch, setTagSearch ] = useState<String>("");

    const handleSearch = (query: string) => {
        setSearch(query);
    };
    const handleTagSearch = (query: string) => {
        setTagSearch(query);
    };

    return (
        <div className="board">
            <div className="board-left">
                <span style={{fontSize: "13px", color: "#adb5bd", fontWeight:"500"}}>함께 공부해요</span>
                <MainCategoryList onSelectCategory={setSelectedCategory} />
                <TopWrtiersBox />
            </div>
            <div className="board-center">
                <div className="board-search">
                    <div className="search-inner">
                        <InputField placeholder="궁금한 질문을 검색해보세요!" onSearch={handleSearch} type="search" />
                        <Button size="large" buttonType="green"> 검색</Button>
                    </div>
                    <div className="search-inner">
                        <InputField placeholder="태그로 검색해보세요!" onSearch={handleTagSearch} type="TagSearch" />
                        <Button size="large" buttonType="noneBorder">
                            <GoSync/> 초기화
                        </Button>
                    </div>
                    <div className="search-inner">
                        <SubCategoryList />
                        <Button size="medium" buttonType="black"><GoPencil/>&nbsp; 글쓰기</Button>
                    </div>
                </div>
                <div>
                    {/* <BoardList category={selectedCategory} search={search} tagSearch={tagSearch}/> */}
                </div>
            </div>
            <div className="board-right">
                <PopularTagsBox />
                <WeeklyPostBox />
            </div>
        </div>
    );
};

export default BoardTemplates;
