import React from 'react';
import axios from 'axios';

import TaskBoard from './TaskBoard';
import Task from './Task';
import PageTabs  from './PageTabs';

class App extends React.Component {
    state = {
        view: 'task board'
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
        const { view } = this.state;

        switch (view) {
            case 'task board' :
                return (this.wrapPage(
                    <TaskBoard />
                ));
        }
        // No Default
    }
}

export default App;
