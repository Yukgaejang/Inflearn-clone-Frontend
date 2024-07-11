import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import WeeklyPostBox from "../organisms/WeeklyPostBox";
import TopWritersBox from "../organisms/TopWritersBox";
import PopularTagsBox from "../organisms/PopularTagsBox";
import BoardList from "../organisms/BoardList";
import MainCategoryList from "../molecules/MainCategoryList";
import SearchInput from "../atoms/InputField";
import SubCategoryList from "../molecules/SubCategoryList";
import Button from "../atoms/Button/Button";
import { GoSync } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import "../../styles/Board.css";

const BoardTemplates = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("questions");
    const [selectedSubCategory, setSelectedSubCategory] = useState<string>("date");
    const [search, setSearch] = useState<string>("");
    const [tagSearch, setTagSearch] = useState<string>("");
    const navigate = useNavigate();

    const searchInputRef = useRef<HTMLInputElement>(null);
    const tagSearchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (query: string) => {
        setSearch(query);
    };

    const handleTagSearch = (query: string) => {
        setTagSearch(query);
    };

    const handleReset = () => {
        setSearch("");
        setTagSearch("");
        setSelectedSubCategory("date");
    };

    const handleWritePost = () => {
        navigate('/post/new');
    };

    const triggerEnterKey = (ref: React.RefObject<HTMLInputElement>) => {
        if (ref.current) {
            const event = new KeyboardEvent('keypress', {
                key: 'Enter',
                bubbles: true,
            });
            ref.current.dispatchEvent(event);
        }
    };

    return (
        <div className="board">
            <div className="board-left">
                <span style={{fontSize: "13px", color: "#adb5bd", fontWeight:"500"}}>함께 공부해요</span>
                <MainCategoryList onSelectCategory={setSelectedCategory} />
                <TopWritersBox />
            </div>
            <div className="board-center">
                <div className="board-search">
                    <div className="search-inner">
                        <SearchInput 
                            placeholder="궁금한 질문을 검색해보세요!" 
                            onSearch={handleSearch} 
                            type="search" 
                            value={search}
                            inputRef={searchInputRef}
                        />
                        <Button size="large" buttonType="green" onClick={() => triggerEnterKey(searchInputRef)}> 검색</Button>
                    </div>
                    <div className="search-inner">
                        <SearchInput 
                            placeholder="태그로 검색해보세요!" 
                            onSearch={handleTagSearch} 
                            type="TagSearch" 
                            value={tagSearch}
                            inputRef={tagSearchInputRef}
                        />
                        <Button size="large" buttonType="noneBorder" onClick={handleReset}>
                            <GoSync/> 초기화
                        </Button>
                    </div>
                    <div className="search-inner">
                        <SubCategoryList 
                            onSelectSubCategory={setSelectedSubCategory} 
                            selectedSubCategory={selectedSubCategory} 
                        />
                        <Button size="medium" buttonType="black" onClick={handleWritePost}>
                            <GoPencil/>&nbsp; 글쓰기
                        </Button>
                    </div>
                </div>
                <div>
                    <BoardList 
                        category={selectedCategory} 
                        subCategory={selectedSubCategory} 
                        search={search} 
                        tagSearch={tagSearch}
                    />
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
