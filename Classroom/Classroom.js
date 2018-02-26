import React, { Component } from 'react';

import {User, createclass,dashboard, fcreateclass,fdashboard, moveup, makeclass1} from '../actions/classroom';
import {assignment} from '../actions/assignments';

// import './../css/normalize.css';
// import './../css/webflow.css';
// import './../css/magnuss-amazing-project.webflow.css';
// import './../css/v2.css';

import './../assets/css/bootstrap.min.css';
import './../assets/css/material-dashboard.css?v=1.2.0';
// import './../assets/css/demo.css';
//
import './../assets/css/css_tabs.css';
//
import './../vis_css/vis.css';
import './../vis_css/bar.css';

import './../assets/img/favicon.png';
import './../assets/img/apple-icon.png';
import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);
        this.innerfunction = this.innerfunction.bind(this);
        this.mover = this.mover.bind(this);
        this.moverassignment = this.moverassignment.bind(this);
        this.MoveToUser = this.MoveToUser.bind(this);
        this.createclass = this.createclass.bind(this);
    }

    innerfunction () {
        this.props.fcreateclass();
        this.props.dashboard();
        // this.props.fmoveup();
    }

    multiple () {
        this.props.moveup();
        setTimeout(() => this.innerfunction(), 700);
    }

    mover () {

        this.props.fcreateclass();
        this.props.makeclass1();
        // setTimeout(() => this.innerfunction(), 700);
    }
    MoveToUser () {

        this.props.fcreateclass();
        this.props.User();
        // setTimeout(() => this.innerfunction(), 700);
    }

    moverassignment () {

        this.props.fcreateclass();
        this.props.assignment();
        // setTimeout(() => this.innerfunction(), 700);
    }

    createclass () {
        this.props.fcreateclass();
        this.props.makeclass1();
        // this.props.assignment();
        // setTimeout(() => this.innerfunction(), 700);
    }

    render() {

        return (


            <div className=" wrapper ScrollStyle">
                <div className="sidebar" data-color="purple" >

                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">

                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="active">
                                <a>
                                    <i className="material-icons">group</i>
                                    <p>Classroom
                                    </p>
                                </a>
                            </li>
                            <li>
                                <div onClick = {this.MoveToUser}>
                                    <a >
                                    <i className="material-icons">person</i>
                                    <p>User Profile</p>
                                    </a>
                                </div>
                            </li>

                            <li className="active-pro">

                                <a >
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

                            </div>
                            <div className="collapse navbar-collapse">
                                <div className="tab-centre left-tab-centre">

                                    <div className="form-control material-button-tab" onClick = {this.createclass}  >
                                        <p className="paddingleftmaterial" >Create Classroom </p></div>
                                    <div className="tab-label-content" id="tab1-content">

                                        {/*<label for="Create Assignment"></label>*/}
                                        {/*<div className="tab-content">TAB 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet eget lectus eu congue. Nam finibus urna eget nisl aliquam, in dictum ligula feugiat. Donec mollis ligula purus, et interdum velit bibendum eget. Aliquam magna diam, tristique eu libero nec, sagittis finibus sapien. Cras a ex ultricies, faucibus elit sagittis, maximus nisi. Donec quis arcu sapien. Aenean risus nibh, varius sed porttitor a, ornare nec leo. Sed vitae lacus in ipsum varius sagittis. Ut in quam cursus, ullamcorper sapien posuere, laoreet elit. Suspendisse interdum, risus ut ultricies scelerisque, nibh est commodo leo, sed tristique nisl odio et turpis. Fusce pellentesque nunc nec arcu feugiat accumsan. Praesent mauris sem, eleifend sit amet tortor in, cursus vehicula arcu. Curabitur convallis sit amet nunc ac feugiat. Sed at risus id diam porta pretium id vel felis. Donec nec dui id nisl hendrerit laoreet eu id odio.</div>*/}
                                    </div>





                                    <div className="slide-centre "></div>

                                </div>
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">Class</i>
                                            <p className="hidden-lg hidden-md">Class</p>
                                        </a>
                                    </li>
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
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" onClick = {this.moverassignment}>
                                        <div className="card-header lightgreen" >

                                                <div className="">
                                                    <div className="w-row">
                                                        <div className="w-col w-col-6">
                                                            <div className="meetingimgdiv"></div>
                                                        </div>
                                                        <div className="w-col w-col-6">

                                                            <div className="meetingdetailsmiddle">
                                                                <div className="w-row">
                                                                    <div className="w-col w-col-6">
                                                                        <div className="goingtext">9 students</div>
                                                                    </div>
                                                                    <div className="w-col w-col-6">
                                                                        <div className="goingtext notgoing">3 pending</div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-5">
                                                                    <div className="w-row">
                                                                        <div className="attendcol w-col w-col-5">
                                                                            <div>
                                                                                <div className="attendeediv"></div>
                                                                                <div className="attendeediv attend1 attendplu attendu"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="column-11 w-col w-col-7">
                                                                            <div className="plusenumore">+5 more</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                        </div>

                                        <div className="card-content">
                                            <h4 className="title">Mobile Dev</h4>
                                            <p className="category">
                                                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> Student Participation</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card" onClick = {this.moverassignment}>
                                        <div className="card-header lightgreen" >

                                            <div className="">
                                                <div className="w-row">
                                                    <div className="w-col w-col-6">
                                                        <div className="meetingimgdiv"></div>
                                                    </div>
                                                    <div className="w-col w-col-6">

                                                        <div className="meetingdetailsmiddle">
                                                            <div className="w-row">
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext">9 students</div>
                                                                </div>
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext notgoing">3 pending</div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-5">
                                                                <div className="w-row">
                                                                    <div className="attendcol w-col w-col-5">
                                                                        <div>
                                                                            <div className="attendeediv"></div>
                                                                            <div className="attendeediv attend1 attendplu attendu"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="column-11 w-col w-col-7">
                                                                        <div className="plusenumore">+5 more</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="card-content">
                                            <h4 className="title">Mobile Dev</h4>
                                            <p className="category">
                                                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> Student Participation</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card" onClick = {this.moverassignment}>
                                        <div className="card-header lightgreen" >

                                            <div className="">
                                                <div className="w-row">
                                                    <div className="w-col w-col-6">
                                                        <div className="meetingimgdiv"></div>
                                                    </div>
                                                    <div className="w-col w-col-6">

                                                        <div className="meetingdetailsmiddle">
                                                            <div className="w-row">
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext">9 students</div>
                                                                </div>
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext notgoing">3 pending</div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-5">
                                                                <div className="w-row">
                                                                    <div className="attendcol w-col w-col-5">
                                                                        <div>
                                                                            <div className="attendeediv"></div>
                                                                            <div className="attendeediv attend1 attendplu attendu"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="column-11 w-col w-col-7">
                                                                        <div className="plusenumore">+5 more</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="card-content">
                                            <h4 className="title">Mobile Dev</h4>
                                            <p className="category">
                                                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> Student Participation</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" onClick = {this.moverassignment}>
                                        <div className="card-header lightgreen" >

                                            <div className="">
                                                <div className="w-row">
                                                    <div className="w-col w-col-6">
                                                        <div className="meetingimgdiv"></div>
                                                    </div>
                                                    <div className="w-col w-col-6">

                                                        <div className="meetingdetailsmiddle">
                                                            <div className="w-row">
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext">9 students</div>
                                                                </div>
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext notgoing">3 pending</div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-5">
                                                                <div className="w-row">
                                                                    <div className="attendcol w-col w-col-5">
                                                                        <div>
                                                                            <div className="attendeediv"></div>
                                                                            <div className="attendeediv attend1 attendplu attendu"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="column-11 w-col w-col-7">
                                                                        <div className="plusenumore">+5 more</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="card-content">
                                            <h4 className="title">Mobile Dev</h4>
                                            <p className="category">
                                                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> Student Participation</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card" onClick = {this.moverassignment}>
                                        <div className="card-header lightgreen" >

                                            <div className="">
                                                <div className="w-row">
                                                    <div className="w-col w-col-6">
                                                        <div className="meetingimgdiv"></div>
                                                    </div>
                                                    <div className="w-col w-col-6">

                                                        <div className="meetingdetailsmiddle">
                                                            <div className="w-row">
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext">9 students</div>
                                                                </div>
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext notgoing">3 pending</div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-5">
                                                                <div className="w-row">
                                                                    <div className="attendcol w-col w-col-5">
                                                                        <div>
                                                                            <div className="attendeediv"></div>
                                                                            <div className="attendeediv attend1 attendplu attendu"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="column-11 w-col w-col-7">
                                                                        <div className="plusenumore">+5 more</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="card-content">
                                            <h4 className="title">Mobile Dev</h4>
                                            <p className="category">
                                                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> Student Participation</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card" onClick = {this.moverassignment}>
                                        <div className="card-header lightgreen" >

                                            <div className="">
                                                <div className="w-row">
                                                    <div className="w-col w-col-6">
                                                        <div className="meetingimgdiv"></div>
                                                    </div>
                                                    <div className="w-col w-col-6">

                                                        <div className="meetingdetailsmiddle">
                                                            <div className="w-row">
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext">9 students</div>
                                                                </div>
                                                                <div className="w-col w-col-6">
                                                                    <div className="goingtext notgoing">3 pending</div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-5">
                                                                <div className="w-row">
                                                                    <div className="attendcol w-col w-col-5">
                                                                        <div>
                                                                            <div className="attendeediv"></div>
                                                                            <div className="attendeediv attend1 attendplu attendu"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="column-11 w-col w-col-7">
                                                                        <div className="plusenumore">+5 more</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="card-content">
                                            <h4 className="title">Mobile Dev</h4>
                                            <p className="category">
                                                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> Student Participation</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="div-block-34"  onClick={this.mover}></div>
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
        assignment: state.assignment
    }
}


export default connect(mapStateToProps, {User, assignment, makeclass1, dashboard, fcreateclass,fdashboard,moveup})(Dashboard);

