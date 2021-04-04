import React from 'react';
import axios from 'axios';
import TaskBoard from './TaskBoard';
import Task from './Task';
import PageTabs  from './PageTabs';
import ToDo from './ToDo';
import InProgress from './InProgress';
import Review from './Review';
import Done from './Done';
import './singleElement.css';
import DropdownMenu from './DropdownMenu';

const LARGE_DESKTOP_BREAKPOINT = 1366;
const SMALL_DESKTOP_BREAKPOINT = 1024;
const TABLET_BREAKPOINT = 768;

class App extends React.Component {
    state = {
        view: 'task board',
        browserWidth: 0,
        breakpoint: 'large-desktop'
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    handleResize = () => {
        const browserWidth = window.innerWidth;
        let breakpoint = 'large-desktop';

        if (browserWidth < LARGE_DESKTOP_BREAKPOINT && browserWidth >= SMALL_DESKTOP_BREAKPOINT) {
            breakpoint = 'small-desktop';
        } else if (browserWidth < SMALL_DESKTOP_BREAKPOINT && browserWidth >= TABLET_BREAKPOINT) {
            breakpoint = 'tablet';
        } else if (browserWidth < TABLET_BREAKPOINT) {
            breakpoint = 'mobile';
        }

        this.setState({ breakpoint, browserWidth });
    }

    onViewChange(view) {
        this.setState({ view });
    }

    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className="container">
                <PageTabs currentView={ view }
                           onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        )
    }

    render() {
        const { breakpoint } = this.state;

        switch (breakpoint) {
            case 'large-desktop' :
                return (this.wrapPage(
                    <TaskBoard />
                ));
            case 'small-desktop':
                return (this.wrapPage(
                    <TaskBoard />
                ));
            case 'tablet':
                return (this.wrapPage(
                    <div className='singleElement'>
                        <ToDo />
                    </div>
                ));
            case 'mobile':
                return (this.wrapPage(
                    <div>
                        <DropdownMenu />
                    <div className='singleElement'>
                        <ToDo />
                    </div>
                    </div>
                ));

        }
        // No Default
    }
}

export default App;
