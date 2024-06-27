import React from "react";
import BoardListOne from "../molecules/BoardListOne";

const BoardList: React.FC = () => {
    return (
        <div>
            <BoardListOne
                resolved="미해결"
                head="Section 3 이론 classification Loss function 질문"
                body="안녕하세요.
                Section 3 이론 classification Loss function 질문있습니다."
                writer="John Doe"
                time="2024-06-26"
                good="10"
                view="150"
                commentsCount="5"
                tags={["spring", "java", "딥러닝", "nlp", "pytorch"]}
            />
            <BoardListOne
                resolved="해결"
                head="Section 3 이론 classification Loss function 질문"
                body="안녕하세요.
                Section 3 이론 classification Loss function 질문있습니다.
                "
                writer="John Doe"
                time="2024-06-26"
                good="10"
                view="150"
                commentsCount="5"
                tags={["spring", "java", "딥러닝", "nlp", "pytorch"]}
            />
        </div>
    );
};

export default BoardList;
