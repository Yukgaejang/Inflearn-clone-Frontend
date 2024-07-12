import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostDetailBox from './PostDetailBox';

const PostDetailBoxExample: React.FC = () => {
    const [post, setPost] = useState({
        title: "",
        content: "",
        tags: [],
        author: "",
        date: "",
        views: 0
    });

    useEffect(() => {
        const category = "운동";
        const border_Id = 1;
            const fetchPost = async () => {
            try {
                const response = await axios.get(`https://wooyong.shop/boards/${encodeURIComponent(category)}/${border_Id}`,{
                        responseType: 'json',
                        withCredentials: true,
                    headers: {
                        "Content-Type" : "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        "Access-Control-Allow-Credentials" : true,
                        "ngrok-skip-browser-warning": true,

                        }
                    }
                    );

                const data = response.data.body;
                setPost({
                    title: data.title,
                    content: data.content,
                    tags: data.tags,
                    author: data.userNickname,
                    date: new Date(data.createdAt).toLocaleString(),
                    views: data.viewCount
                });
            } catch (error) {
                console.error('게시글 상세 api 오류:', error);
            }
        };


        fetchPost();
    }, []);

    return (
        <PostDetailBox
            title={post.title}
            content={post.content}
            tags={post.tags}
            author={post.author}
            date={post.date}
            views={post.views}
        />
    );
}

export default PostDetailBoxExample;
