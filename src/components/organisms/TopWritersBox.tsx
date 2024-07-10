import React, { useEffect, useState } from "react";
import "../../styles/Board.css";
import TopWriterList from "../molecules/TopWriterList";
import { customizedAxios } from '../../util/CustomizedAxios';

const TopWrtiersBox: React.FC = () => {
    const [writers, setwriters] = useState<{ name: string; count: string }[]>([]);
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
                const response = await customizedAxios.get("/boards/topwriters");
                setwriters(response.data);
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
