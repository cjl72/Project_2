import React from 'react';
import './TaskBoard.css';
import ToDo from './ToDo';
import InProgress from './InProgress';
import Review from './Review';
import Done  from './Done';

const TaskBoard = (props) => {

    return (

            <div className="board">
                <ToDo content={props.todo}/>
                <InProgress content={props.inprogress}/>
                <Review content={props.review}/>
                <Done content={props.done}/>
            </div>
        );

}
export default TaskBoard;