import React from "react";
import "../../styles/Board.css";
import SideBox from "../atoms/SideBox";
import TopWriter from "../atoms/TopWriter";

interface Writer {
    name: string;
    count: string;
}

interface TopWriterListProps {
    writers: Writer[];
}

const printWriters = (writers: Writer[]) => {
    return (
        <>
            {writers.map((writer, index) => (
                <TopWriter name={writer.name} count={writer.count} />
            ))}
        </>
    );
};

const TopWriterList: React.FC<TopWriterListProps> = ({ writers }) => {
    return <SideBox size="small" head="인프런 TOP Writers" body={printWriters(writers)} />;
};

export default TopWriterList;
