import React, { Component } from 'react';

import {createclass,fmoveup, fdashboard} from '../actions/classroom';

import {fclassdashboard,classdashboard, fbookdashboard,bookdashboard} from '../actions/classroom';

import {fbookcss, fclassroomcss, classroomcss,bookcss} from '../actions/classroom';
import {fassignment, inassignments, bookstore, assignment} from '../actions/assignments';
import Back from '../images/back3.png';
import {connect} from 'react-redux';




import {XYPlot, LineSeries, MarkSeries} from 'react-vis';


import {
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend
} from 'react-vis';

class Dashboard extends Component {
    constructor() {
        super();
        this.assignment_mover = this.assignment_mover.bind(this);
        this.bookstore_mover = this.bookstore_mover.bind(this);
        this.back = this.back.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    assignment_mover () {
        this.props.fassignment();
        this.goTo('createassignment1');
        this.props.inassignments();
    }

    bookstore_mover () {
        this.props.fassignment();
        this.props.bookstore();
    }


    back () {
        this.props.fassignment();
        this.props.createclass();
        this.goTo('classroom');
    }

    goTo(route) {
        console.log( 'route');

        this.props.history.replace(`/${route}`);
    }

    render() {
        const data = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
        ];
        return (


                <div className=" wrapper ScrollStyle">
                    <div className="sidebar" data-color="purple" >

                        <div  onClick={this.back}  className=" logo">
                            <div className="simple-text">
                                <a><img  className ="transformbackbutton" src={Back}></img></a>
                            </div>
                        </div>
                        <div className="sidebar-wrapper">
                            <ul className="nav">
                                <li className="active">
                                    <a >
                                        <i className="material-icons">search</i>
                                        <p>Analytics</p>
                                    </a>
                                </li>
                                <li>
                                    <a onClick={this.assignment_mover}>
                                        <i className="material-icons" >content_paste</i>
                                        <p>Assignments</p>
                                    </a>
                                </li>
                                <li >
                                    <a  onClick={this.bookstore_mover}>
                                        <i className="material-icons">library_books</i>
                                        <p>Book Store</p>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <i className="material-icons">access_time</i>
                                        <p>Calendar</p>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <i className="material-icons text-gray">computer</i>
                                        <p>E-Attendance</p>
                                    </a>
                                </li>
                                <li className="active-pro">
                                    <a href="upgrade.html">
                                        <i className="material-icons">unarchive</i>
                                        <p>Upgrade to PRO</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/*<img className ="img_sidebar" src={Sidebarimage}/>*/}
                    </div>
                    <div className="main-panel">
                        <nav className="navbar navbar-transparent navbar-absolute">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <div className="navbar-brand" >Mobile Development</div>
                                </div>
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">

                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="material-icons">notifications</i>
                                                <span className="notification">5</span>
                                                <p className="hidden-lg hidden-md">Notifications</p>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#">Mike John responded to your email</a>
                                                </li>
                                                <li>
                                                    <a href="#">You have 5 new tasks</a>
                                                </li>
                                                <li>
                                                    <a href="#">You're now friend with Andrew</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another Notification</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another One</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="material-icons">person</i>
                                                <p className="hidden-lg hidden-md">Profile</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="card card-stats"   onClick={this.bookstore_mover}>
                                            <div className="card-header" data-background-color="pink">
                                                <i className="material-icons">content_copy</i>
                                            </div>
                                            <div className="card-content"

                                            >
                                                <p className="category">Subscribed To</p>
                                                <h3 className="title">49
                                                    <small> Books</small>
                                                </h3>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons add ">add</i>
                                                    <a > Get More Books...</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="card card-stats">
                                            <div className="card-header" data-background-color="green">
                                                <i className="material-icons">star_rate</i>
                                            </div>
                                            <div className="card-content">
                                                <p className="category">Learners Points</p>
                                                <h3 className="title">34,245</h3>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">assignment_ind</i><a>  See all students</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div onClick={this.assignment_mover}  className="card card-stats">
                                            <div className="card-header" data-background-color="red">
                                                <i className="material-icons">assignment</i>
                                            </div>
                                            <div className="card-content">
                                                <p className="category">Assignments</p>
                                                <h3 className="title">75 </h3>

                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">content_paste</i><a>  See all Assignments</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="card card-stats">
                                            <div className="card-header" data-background-color="blue">
                                                <i className="material-icons">timeline</i>
                                            </div>
                                            <div className="card-content">
                                                <p className="category">Subscribed Students</p>
                                                <h3 className="title">+25</h3>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">trending_up</i><a>  View Student E-Attendance </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header card-chart" data-background-color="green">
                                                <div className="ct-chart" >
                                                    <XYPlot height={150} width= {350}>
                                                        <VerticalGridLines />
                                                        <HorizontalGridLines />
                                                        <XAxis   style={{
                                                            line: {stroke: '#ADDDE1'},
                                                            ticks: {stroke: '#ADDDE1'},
                                                            text: {stroke: 'ffffff', fill: '#ffffff', fontWeight: 50}
                                                        }}/>
                                                        <YAxis  style={{
                                                            line: {stroke: '#ADDDE1'},
                                                            ticks: {stroke: '#ADDDE1'},
                                                            text: {stroke: 'ffffff', fill: '#ffffff', fontWeight: 50}
                                                        }}/>
                                                        <LineSeries data={data} />
                                                        <MarkSeries data={data} />
                                                    </XYPlot>

                                                </div>
                                            </div>

                                            <div className="card-content">
                                                <h4 className="title">Student Activity</h4>
                                                <p className="category">
                                                    <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in today's activity.</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">access_time</i> updated 4 minutes ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header card-chart" data-background-color="pink">
                                                <div className="ct-chart" >
                                                    <XYPlot

                                                        xType="ordinal"
                                                        stackBy="y"
                                                        height={150} width= {300}>
                                                        <DiscreteColorLegend
                                                            className="clustered-stacked-bar-chart-example"
                                                            orientation="vertical" items={[
                                                            {
                                                                title: 'Done',
                                                                color: '#12939A'
                                                            },
                                                            {
                                                                title: 'Not',
                                                                color: '#f24444'
                                                            }
                                                        ]}
                                                        />
                                                        <VerticalGridLines />
                                                        <HorizontalGridLines />
                                                        <XAxis   style={{
                                                            line: {stroke: '#ADDDE1'},
                                                            ticks: {stroke: '#ADDDE1'},
                                                            text: {stroke: 'ffffff', fill: '#ffffff', fontWeight: 50}
                                                        }}/>
                                                        <YAxis  style={{
                                                            line: {stroke: '#ADDDE1'},
                                                            ticks: {stroke: '#ADDDE1'},
                                                            text: {stroke: 'ffffff', fill: '#ffffff', fontWeight: 50}
                                                        }}/>
                                                        <VerticalBarSeries
                                                            color="#f24444"
                                                            // className="vertical-bar-series-red"
                                                            data={[
                                                                {x: 'Python', y: 10},
                                                                {x: 'Java', y: 5},
                                                                {x: 'Fundamentals', y: 15}
                                                            ]}/>
                                                        <VerticalBarSeries
                                                            color="#12939A"
                                                            // className="vertical-bar-series-green"
                                                            data={[
                                                                {x: 'Python', y: 12},
                                                                {x: 'Java', y: 2},
                                                                {x: 'Fundamentals', y: 11}
                                                            ]}/>
                                                    </XYPlot>

                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h4 className="title">Completed Tasks</h4>
                                                <p className="category">Weekly Learner Performance</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">access_time</i> 1 task made since 7 days ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header card-chart" data-background-color="red">
                                                <div className="ct-chart" >
                                                    <XYPlot height={150} width= {350}>
                                                        <VerticalGridLines />
                                                        <HorizontalGridLines />
                                                        <XAxis   style={{
                                                            line: {stroke: '#ADDDE1'},
                                                            ticks: {stroke: '#ADDDE1'},
                                                            text: {stroke: 'ffffff', fill: '#ffffff', fontWeight: 50}
                                                        }}/>
                                                        <YAxis  style={{
                                                            line: {stroke: '#ADDDE1'},
                                                            ticks: {stroke: '#ADDDE1'},
                                                            text: {stroke: 'ffffff', fill: '#ffffff', fontWeight: 50}
                                                        }}/>
                                                        <LineSeries data={data} />
                                                        <MarkSeries data={data} />
                                                    </XYPlot>

                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h4 className="title">Email Subscriptions</h4>
                                                <p className="category">Students Subscribed to classroom</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">access_time</i> 5 students subscribed since 7 days ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>









                            </div>
                        </div>

                    </div>
                </div>

        );
    }
}

function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom');

    return {
        user: state.user,
        inclass: state.inclass
    }
}



export default connect(mapStateToProps, {createclass, assignment, bookstore, fassignment, inassignments})(Dashboard);
