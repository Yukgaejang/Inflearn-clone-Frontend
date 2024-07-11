import React from 'react';
import "../../styles/Board.css";
import SideBox from "../atoms/SideBox";
import WeeklyPost from "../atoms/WeeklyPost";

interface Post {
    name: string;
    body: string;
}

interface WeeklyPostListProps {
    posts: Post[];
}

const printPosts = (posts: Post[]) => {
    return (
        <>
            {posts.map((post, index) => (
                <WeeklyPost key={index} name={post.name} body={post.body}/>
            ))}
        </>
    );
};

const WeeklyPostList:React.FC<WeeklyPostListProps> = ({ posts }) => {
    return <SideBox size="big" head="주간 인기글" body={printPosts(posts)} />;
};

export default WeeklyPostList;