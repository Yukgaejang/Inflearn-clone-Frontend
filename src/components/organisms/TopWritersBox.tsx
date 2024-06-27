import React from "react";
import "../../styles/Board.css";
import TopWriterList from "../molecules/TopWriterList";

const TopWrtiersBox: React.FC = () => {
    const writers = [
        { name: "Alice", count: "30" },
        { name: "Bob", count: "25" },
        { name: "Charlie", count: "20"},
        { name: "Dave", count: "15" },
        { name: "Eve", count: "10" },
    ];

    return (
        <div>
            <TopWriterList writers={writers} />
        </div>
    );
};

export default TopWrtiersBox;
