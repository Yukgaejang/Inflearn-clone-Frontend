import React, { useEffect, useState } from "react";
import "../../styles/Board.css";
import WeeklyPostList from "../molecules/WeeklyPostList";
import { customizedAxios } from '../../util/CustomizedAxios';

const WeeklyPostBox: React.FC = () => {
    const [posts, setPosts] = useState<{ name: string; title: string }[]>([]);
    // const posts = [
    //     { name: "Alice", body: "스터디 같이 디자이너 모십니다." },
    //     { name: "Bob", body: "UI 컴포넌트 구현 스터디 같이 하실 분!!" },
    //     { name: "Charlie", body: "[취준 포트폴리오용] 프로젝트 같이 진행할 디자이너 모십니다"},
    //     { name: "Dave", body: "온라인 모각코 - 부릉부릉 함께 하실분 구해요" },
    //     { name: "Eve", body: "온라인 모각코 - 부릉부릉 함께 하실분 구해요" },
    // ];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customizedAxios.get("/boards/top/posts");
                const mappedPosts = response.data.map((post: { title: string; nickname: string }) => ({
                    name: post.nickname,
                    title: post.title
                }));
                setPosts(mappedPosts);;
            } catch (error) {
                console.error("Error fetching:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <WeeklyPostList posts={posts} />
        </div>
    );
};

export default WeeklyPostBox;
