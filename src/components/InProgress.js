import React from 'react';

class InProgress extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="board_piece inprogress">
                <h1>In Progress</h1>
            </div>
        )
    }
};
export default InProgress;