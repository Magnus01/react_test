import React, { Component } from 'react';



import {connect} from 'react-redux';
import Calendar from './Time_choice/choosetime2';
import AuthorContainer from './Book_choice/AuthorContainer';
import SweetAlert from './Book_choice/SweetAlert';

import {fchoosetime,fsweetalert, bookstore,inassignments,fbookstore, finassignments,bookmovement, assignment, fstartassignment} from '../../../actions/assignments';
import Tree from '../../TreeIndex';
const myTreeData = [
    {
        "name": "Introduction",
        "id": 1,
        "children": [
            {
                "name": "Radio",
                "id": 2,
                "children": [

                    {"name": "Python", "size": 101,    "id": 3},  {"name": "Control", "size": 101,    "id": 4}

                ]
            },
            {
                "name": "Radio",
                "id": 5,
                "children": [

                    {"name": "Tree", "size": 101,    "id": 6},  {"name": "Control", "size": 101,    "id": 7}

                ]
            }

        ]
    },
];




class Dashboard extends Component {
    constructor() {
        super();
        this.moverassignment = this.moverassignment.bind(this);
        this.bookstore_mover = this.bookstore_mover.bind(this);
        this.moverindex = this.moverindex.bind(this);
        this.mover = this.mover.bind(this);
        this.moverassignment = this.moverassignment.bind(this);
        this.nextcss = this.nextcss.bind(this);

    }

    mover() {
        this.props.fchoosetime();
        this.props.inassignments();
    }



    bookstore_mover () {
        this.props.fstartassignment();
        this.props.bookstore();
    }


    moverindex () {

        this.props.fstartassignment();
        this.props.assignment();
        // setTimeout(() => this.innerfunction(), 700);
    }

    moverassignment () {

        this.props.fstartassignment();
        this.props.inassignments();
        // setTimeout(() => this.innerfunction(), 700);
    }

    nextcss () {
        this.props.bookmovement();

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

                    <div className="logo">
                        <div className="simple-text">

                        </div>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li >
                                <a onClick = {this.moverassignment} >
                                    <i className="material-icons">search</i>
                                    <p>Analytics</p>
                                </a>
                            </li>
                            <li className="active">
                                <a >
                                    <i className="material-icons" >content_paste</i>
                                    <p>Assignments</p>
                                </a>
                            </li>
                            <li >
                                <a onClick = {this.bookstore_mover}  >
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
                                {/*<div className="card-nav-tabs" >General Analytics </div>*/}

                            </div>
                            <div className="collapse navbar-collapse">
                                <div className="meetingdetailtopdiv makeclassrooms " style = {{marginTop: -15}}>
                                    <div className="meetingdetailtopdiv-copy makeclassrooms">
                                        <div className="div-block-10">
                                            <div className="progressbar">
                                                <div className="bar">
                                                    <div className="bubble">
                                                        <div className="classinfo">
                                                            <div className="text-block-5">Info</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bar">
                                                    <div className="bubble">
                                                        <div className="classinfo">
                                                            <div className="text-block-5">Book</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bar">
                                                    <div className="bubble">
                                                        <div className="classinfo">
                                                            <div className="text-block-5">Chapter</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bar _2 _3 end">
                                                    <div className="bubble">
                                                        <div className="classinfo">
                                                            <div className="text-block-5">Schedule</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*EDIT*/}
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">library_books</i>
                                            <p className="hidden-lg hidden-md">Class</p>
                                        </a>
                                    </li>

                                </ul>
                                <form className="navbar-form navbar-right" role="search">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" placeholder="Search"></input>
                                        <span className="material-input"></span>
                                    </div>
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                        <i className="material-icons">search</i>
                                        <div className="ripple-container"></div>
                                    </button>
                                </form>

                            </div>
                        </div>
                    </nav>

                    <div className="content">
                        <div className="container-fluid" >
                            <div className="meetingdetailcontain float-left makeclassroom makeassignment3">
                            <div className="meetingdetailsmiddle makeclassroommiddle">

                                    <div className=" widthcalendar2" >
                                        <div className="widthcalendar">
                                            <h5>Start Date</h5>
                                            <Calendar/>

                                        </div>
                                        <div className="widthcalendar">
                                            <h5>EndDate</h5>
                                            <Calendar/>

                                        </div>
                                    </div>


                            </div>

                            <div className="width-calendar3 ">
                                <div className="div-book-14">
                                    <div className="div-book-13"></div>
                                    <div className="div-book-12"></div>
                                    <div className="div-book-15" ></div>
                                </div>
                                <div className="div-book-14 rightside">
                                    <div className="div-book-13"></div>
                                    <div className="div-book-12"></div>
                                    <div className="div-book-15" onClick ={this.mover}></div>
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
    console.log(state, 'STATE IN showwclassrom')
    return {
        user: state.user,
        inclass: state.inclass
    }
}


export default connect(mapStateToProps, {fchoosetime,fsweetalert,bookstore,inassignments,fbookstore, finassignments,bookmovement, assignment, fstartassignment})(Dashboard);
