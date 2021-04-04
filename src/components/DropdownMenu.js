import React from 'react';
import DropdownButton  from 'react-bootstrap/Dropdown';

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return(
        <div>
        <DropdownButton id="dropdown-basic-button" title="Pages">
            <DropdownMenu.Item href="#">To Do</DropdownMenu.Item>
            <DropdownMenu.Item href="#">In Progress</DropdownMenu.Item>
            <DropdownMenu.Item href="#">Review</DropdownMenu.Item>
            <DropdownMenu.Item href="#">Done</DropdownMenu.Item>
        </DropdownButton>
        </div>
    )}
}
export default DropdownMenu;