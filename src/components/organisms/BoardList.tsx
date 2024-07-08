import React, { useEffect, useState } from "react";
import BoardListOne from "../molecules/BoardListOne";
import { customizedAxios } from '../../util/CustomizedAxios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface BoardListProps {
    category: string;
    subCategory: string;
    search? :String;
    tagSearch? :String;
}

interface BoardData {
    id: number;
    title: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    postAge: string;
    likeCount: number;
    viewCount: number;
    commentCount: number;
    userNickname: string;
    tags: string[];
}

const BoardList: React.FC<BoardListProps> = ({ category, subCategory, search, tagSearch }) => {
    const [boardData, setBoardData] = useState<BoardData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await customizedAxios.get(`/boards/${category}`, {
                    params: {
                        page: currentPage - 1,
                        size: 15,
                        order: subCategory
                    }
                });
                if (response.status === 200) {
                    setBoardData(response.data.content);
                    setTotalPages(response.data.totalPages);
                } else {
                    throw new Error('Failed to fetch board data');
                }
            } catch (error) {
                setError('Failed to fetch board data'); 
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category, currentPage, subCategory]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {boardData.map(board => (
                <BoardListOne
                    key={board.id}
                    head={board.title}
                    body={board.postAge}
                    writer={board.userNickname}
                    time={board.postAge}
                    good={String(board.likeCount)}
                    view={String(board.viewCount)}
                    commentsCount={String(board.commentCount)}
                    tags={["spring", "java", "딥러닝", "nlp", "pytorch"]}
                />
            ))}
            {/* 페이지네이션 UI */}
            <Stack spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                />
            </Stack>
        </div>
    );
};

export default BoardList;
