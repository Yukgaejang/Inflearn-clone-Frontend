import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Board = lazy(() => import("./pages/Board"));
const Post = lazy(() => import('./pages/Post'));
const PostDetailPage = lazy(() => import('./pages/PostDetailPage/PostDetailPage'));

const NotFound = () => <div>404 Not Found</div>;

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Navigate to="/community" />} />
                    <Route path="/community" element={<Board />} />
                    <Route path="/post/new" element={<Post />} />
                    <Route path="/post/detail" element={<PostDetailPage />} />
                    {/* <Route path="/mypage" element={}></Route> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
