import React from "react";
import PostDetailComment from "../../components/organisms/PostDetailComment"
import PostDetailBoxExample from '../../components/organisms/PostDetailBox/PostDetailBoxExample';


function App() {
    const handleSearch = (query: string) => {
        console.log(`Searching for: ${query}`);
    };
    const handleClick = (massage: string) => {
        console.log(massage);
    }
    return (
        <div>
            <PostDetailBoxExample />
            <PostDetailComment />
        </div>


    );
}

export default App;
