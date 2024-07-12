import React, { useEffect, useState } from "react";
import "../../styles/Board.css";
import TopWriterList from "../molecules/TopWriterList";
import { customizedAxios } from '../../util/CustomizedAxios';

const TopWrtiersBox: React.FC = () => {
    const [writers, setWriters] = useState<{ name: string; count: string }[]>([]);
    // const writers = [
    //     { name: "Alice", count: "30" },
    //     { name: "Bob", count: "25" },
    //     { name: "Charlie", count: "20"},
    //     { name: "Dave", count: "15" },
    //     { name: "Eve", count: "10" },
    // ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customizedAxios.get("/boards/top/writers");
                const mappedWriters = response.data.map((writer: { score: number; nickname: string }) => ({
                    name: writer.nickname,
                    count: writer.score.toString(),
                }));
                setWriters(mappedWriters);
            } catch (error) {
                console.error("Error fetching:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <TopWriterList writers={writers} />
        </div>
    );
};

export default TopWrtiersBox;
