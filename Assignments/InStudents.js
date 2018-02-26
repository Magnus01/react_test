import React, { Component } from 'react';

// import {createclass,dashboard, fcreateclass,fdashboard, makeclass1} from '../../actions/classroom';
import {inassignments, finassignments,finstudents, moveup_outward, fmoveup_outward,assignment, fassignment,analyzebooks} from '../../actions/assignments';
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/magnuss-amazing-project.webflow.css';
import {connect} from 'react-redux';
import RC2 from 'react-chartjs2';


const chartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
        label: 'Completed',
        data: [12, 19, 3, 17, 6, 3, 7],
        backgroundColor: "rgba(119, 255, 70, 0.6)"
    }, {
        label: 'Overdue',
        data: [2, 29, 5, 5, 2, 3, 10],
        backgroundColor: "rgba(255, 27, 17, 0.6)"
    }]
}


const data2 = {
    labels: ['Enthusiasm', 'Confidence', 'Motivation', 'Empathy', 'Skill'],
    datasets: [
        {

            label: 'Non-Cognitive',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 77]
        }
    ]
};

class App2 extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);
        this.moveup = this.moveup.bind(this);
        this.multiple_bookstore = this.multiple_bookstore.bind(this);
        this.multiple_inassignments = this.multiple_inassignments.bind(this);
        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);
        this.createTooltip = this.createTooltip.bind(this);
        this.state = {showToolTip: false};
    }

    multiple () {

        this.props.finstudents();
        this.props.analyzebooks();
    }

    multiple_inassignments () {

        this.props.finstudents();
        this.props.fassignment();
        this.props.inassignments();
    }

    multiple_bookstore () {

        this.props.finstudents();
        this.props.assignment();
    }




    mouseOverHandler(d, e) {
        this.setState({
            showToolTip: true,
            top: `${e.screenY - 10}px`,
            left: `${e.screenX + 10}px`,
            y: d.y,
            x: d.x
        });
    }

    mouseMoveHandler(e) {
        if (this.state.showToolTip) {
            this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px` });
        }
    }

    mouseOutHandler() {
        this.setState({ showToolTip: false });
    }

    createTooltip() {
        if (this.state.showToolTip) {
            // return (
            //     {/*<ToolTip*/}
            //         {/*top={this.state.top}*/}
            //         {/*left={this.state.left}*/}
            //     {/*>*/}
            //         {/*The x value is {this.state.x} and the y value is {this.state.y}*/}
            //     {/*</ToolTip>*/}
            // );
        }
        return false;
    }

    moveup () {

        this.props.inclass.moveups === 'inward' ? this.props.moveup_outward() : this.props.fmoveup_outward()

    }

    render() {
        console.log(this.props, 'MOVEUPzS');
        return (

            <div className="startcontainer">

                <div className="div-block-8"></div>
                <div onClick = {this.moveup} className="nav_bottomleft navholdericon">
                    <div className="div-block-35 bllackline"></div>
                    <div className="div-block-35 bllackline blackline2"></div>
                    <div className="div-block-35 bllackline blackline2"></div>
                    <div className="div-block-35 bllackline blackline2"></div>
                    <div className="div-block-35 bllackline blackline2"></div>
                    <div className="div-block-35 bllackline blackline2"></div>
                </div>
                <div  className="nav_bottomleft lowzindex">
                    <div onClick = {this.multiple_bookstore}    className={`booknav  ${this.props.inclass.moveups}`}>
                        <div className="icontext bookcion booknavicon">
                            <div className="leftlinktext bookicontext df">Books</div>
                        </div>
                        <div className="icontext bookcion booknavicon newbookicon"></div>
                    </div>
                    <div className={`assignmentnav ${this.props.inclass.moveups}`}>
                        <div className={`icontext assignment navstudenticon navassignmenticon`}>
                            <div className="leftlinktext navcurrictext">Curriculum</div>
                        </div>
                        <div className={`icontext assignment navstudenticon navassignmenticon newcurric `}></div>
                    </div>
                    <div className={`assignments2nav ${this.props.inclass.moveups}`}>
                        <div className={`icontext assignment2 studentnavicon opacitycolor`}>
                            <div className="leftlinktext navicontext">Students</div>
                        </div>
                        <div className={`icontext assignment2 studentnavicon opacitycolor newstudentsbackground`}>
                            <div className="leftlinktext navicontext">Students</div>
                        </div>
                    </div>
                    <div onClick = {this.multiple_inassignments} className={`students ${this.props.inclass.moveups}`}>
                        <div className="icontext assignment navstudenticon opacitycolor">
                            <div className="leftlinktext navicontext">Assign</div>
                        </div>
                    </div>
                </div>
                <div className="div-block-7 uppy w-clearfix">
                    <h1 style = {{color: "white"}} className="meetingsh1">Student Analytics</h1>
                    <div className="meetingdetailcontain float-left studentanalytics">
                        <div className="meetingdetailtopdiv">
                            <h5>Assignment Completion</h5>
                            <RC2  data = {chartData}   width={"750"} height={"100"} type='line' />;
                        </div>
                    </div>
                </div>
                    <div className="studentcontainer" style={{width:"65%"}} >
                    <div className="meetingdetailcontain float-left">
                        <div className="meetingdetailtopdiv student">
                            <div className="w-row">
                                <div className="w-col w-col-5">
                                    <div className="detailscalllinktext settingsdet">View Details</div>
                                    <div className="div-block-29"></div>
                                </div>
                                <div className="w-col w-col-7">
                                    <div className="meetingtitle">Marius Wigstrom</div>
                                    <div className="meetingtitle meetingemail meetingtime student">3 Completed</div>
                                    <div className="meetingtitle meetingemail meetingtime student due">3 Overdue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="meetingdetailcontain float-left">
                        <div className="meetingdetailtopdiv student">
                            <div className="w-row">
                                <div className="w-col w-col-5">
                                    <div className="detailscalllinktext settingsdet">View Details</div>
                                    <div className="div-block-29"></div>
                                </div>
                                <div className="w-col w-col-7">
                                    <div className="meetingtitle">Marius Wigstrom</div>
                                    <div className="meetingtitle meetingemail meetingtime student">3 Completed</div>
                                    <div className="meetingtitle meetingemail meetingtime student due">3 Overdue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="meetingdetailcontain float-left">
                        <div className="meetingdetailtopdiv student">
                            <div className="w-row">
                                <div className="w-col w-col-5">
                                    <div className="detailscalllinktext settingsdet">View Details</div>
                                    <div className="div-block-29"></div>
                                </div>
                                <div className="w-col w-col-7">
                                    <div className="meetingtitle">Marius Wigstrom</div>
                                    <div className="meetingtitle meetingemail meetingtime student">3 Completed</div>
                                    <div className="meetingtitle meetingemail meetingtime student due">3 Overdue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="meetingdetailcontain float-left">
                        <div className="meetingdetailtopdiv student">
                            <div className="w-row">
                                <div className="w-col w-col-5">
                                    <div className="detailscalllinktext settingsdet">View Details</div>
                                    <div className="div-block-29"></div>
                                </div>
                                <div className="w-col w-col-7">
                                    <div className="meetingtitle">Marius Wigstrom</div>
                                    <div className="meetingtitle meetingemail meetingtime student">3 Completed</div>
                                    <div className="meetingtitle meetingemail meetingtime student due">3 Overdue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div style={{marginLeft:"67%"}}>
                    <div className="meetingdetailcontain float-left studentanalytics leftpane radar">
                        <div className="meetingdetailtopdiv">
                            <RC2  data = {data2}   width={"1"} height={"1"} type='radar' />;
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


export default connect(mapStateToProps, {inassignments,finassignments, finstudents,moveup_outward, fmoveup_outward,analyzebooks,assignment, fassignment})(App2);
