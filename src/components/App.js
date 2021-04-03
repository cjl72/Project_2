import React from 'react';
import axios from 'axios';

import TaskBoard from './TaskBoard';
import Task from './Task';
import PageTabs  from './PageTabs';
import ToDo from './ToDo';
import InProgress from './InProgress';
import Review from './Review';
import Done from './Done';

class App extends React.Component {
    state = {
        view: 'task board',
        windowWidth: window.innerWidth
    };


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
        const { view } = this.state;

        switch (view) {
            case 'task board' :
                return (this.wrapPage(
                    <TaskBoard />
                ));
            case 'todo':
                return (this.wrapPage(
                    <ToDo />
                ));
            case 'inprogress':
                return (this.wrapPage(
                    <InProgress />
                ));
            case 'review':
                return (this.wrapPage(
                    <Review />
                ));
            case 'done':
                return (this.wrapPage(
                    <Done />
                ));
        }
        // No Default
    }
}

export default App;
