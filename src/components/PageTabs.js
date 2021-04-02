import React from 'react';

import './PageTabs.css';

class PageTabs extends React.Component {

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <a className={this.isActiveTab('page1')}
                       onClick={(e) => this.onTabClick(e, 'task board')}>
                        Grid View
                    </a>
                </li>
            </ul>
        )
    }

};

export default PageTabs;