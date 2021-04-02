import React from 'react';
import './TaskBoard.css';

class TaskBoard extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="board_piece todo">
                    <h1>To Do</h1>
                </div>
                <div className="board_piece inprogress">
                    <h1>In Progress</h1>
                </div>
                <div className="board_piece review">
                    <h1>Review</h1>
                </div>
                <div className="board_piece done">
                    <h1>Done</h1>
                </div>
            </div>
        )
    }
}
export default TaskBoard;