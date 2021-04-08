import React from 'react';
const ToDo = (props) => {

        return(
            <div className="board_piece todo">
                <h1>To Do</h1>
                    {props.content}
            </div>
        )

};
export default ToDo;