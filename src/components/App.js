import React from 'react';

import TaskBoard from './TaskBoard';
import Task from './Task';

class App extends React.Component {
    state = {
        view: 'task board'
    }

    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                           onViewChance={this.onViewChange.bind(this)}/>
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
    }
}
