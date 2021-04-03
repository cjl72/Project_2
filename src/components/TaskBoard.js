import React from 'react';
import './TaskBoard.css';
import ToDo from './ToDo';
import InProgress from './InProgress';
import Review from './Review';
import Done  from './Done';

class TaskBoard extends React.Component {
    render() {
        return (
            <div className="board">
                <ToDo />
                <InProgress />
                <Review />
                <Done />
            </div>
        )
    }
}
export default TaskBoard;