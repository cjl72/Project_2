import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return(
        <div className="singleElement">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">To Do</Dropdown.Item>
                    <Dropdown.Item href="#">In Progress</Dropdown.Item>
                    <Dropdown.Item href="#">Review</Dropdown.Item>
                    <Dropdown.Item href="#">Done</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )}
}
export default DropdownMenu;