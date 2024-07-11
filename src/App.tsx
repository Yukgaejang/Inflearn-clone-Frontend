import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Board from "./pages/Board";
import Post from "./pages/Post";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/community" />} />
            <Route path="/community" element={<Board />} />
            <Route path="/post/new" element={<Post />} />
            <Route path="/post/detail" element={<PostDetailPage />} />
        </Routes>
    );
};

export default App;
