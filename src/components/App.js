import React from 'react';
import axios from 'axios';
import TaskBoard from './TaskBoard';
import PageTabs  from './PageTabs';
import ToDo from './ToDo';
import InProgress from './InProgress';
import Review from './Review';
import Done from './Done';
import './singleElement.css';
import DropdownMenu from "./DropdownMenu";

const LARGE_DESKTOP_BREAKPOINT = 1366;
const SMALL_DESKTOP_BREAKPOINT = 1024;
const TABLET_BREAKPOINT = 768;

class App extends React.Component {
    state = {
        view: 'task board',
        browserWidth: 0,
        breakpoint: 'large-desktop',
        singlePage: 'ToDo',
        tasks: [],
        todo: [],
        inprogress: [],
        review: [],
        done: []
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    getData() {
        axios.get('http://my-json-server.typicode.com/cjl72/Project_2/posts')
            .then(response => {
               this.setState({tasks: response.data});
            });
    }

    sortData(sortedList, typeTask) {
        for (const [value] of this.state.tasks.entries()) {
            if (typeTask === value.column) {
                sortedList.push(<div className="task">
                    <h1>{value.title}</h1>
                    <p>ID: {value.id}</p>
                    <p>Type: {value.type}</p>
                </div>);
            }
        }
    };

    getSingleView() {
        const singlePage = this.state.singlePage;

        if (singlePage === 'ToDo') {
            return <ToDo content={this.state.todo}/>;
        }
        if (singlePage === 'InProgress') {
            return <InProgress content={this.state.inprogress}/>;
        }
        if (singlePage === 'Review') {
            return <Review content={this.state.review}/>;
        }
        if (singlePage === 'Done') {
            return <Done content={this.state.done}/>;
        }
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

        this.setState({breakpoint, browserWidth});
    }

    onViewChange(view) {
        this.setState({view});
    }

    wrapPage(jsx) {
        const {view} = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        )
    }

    render() {
        this.getData();
        const {breakpoint} = this.state;
        const page = this.getSingleView();
        this.sortData(this.todo, "todo");
        this.sortData(this.inprogress, "in-progress");
        this.sortData(this.review, "review");
        this.sortData(this.done, "done");
        console.log(this.todo);


        switch (breakpoint) {
            case 'large-desktop' :
                return (this.wrapPage(
                    <TaskBoard/>
                ));
            case 'small-desktop':
                return (this.wrapPage(
                    <TaskBoard/>
                ));
            case 'tablet':
                return (this.wrapPage(
                    <div>
                        <DropdownMenu/>
                        <div className="singleElement">
                            {page}
                        </div>
                    </div>
                ));
            case 'mobile':
                return (this.wrapPage(
                    <div>
                        <DropdownMenu/>
                        <div className="singleElement">
                            {page}
                        </div>
                    </div>
                ));
            // No Default
        }
    }
}

export default App;
