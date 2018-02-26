import React, { Component } from 'react';
import {createclass,dashboard, fcreateclass,fmakeclass1, makeclass2, fdashboard, moveup} from '../../actions/classroom';
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/magnuss-amazing-project.webflow.css';
import {connect} from 'react-redux';
import {fchoosechapter, choosetime, choosechapter, inassignments, finassignments,finstudents, moveup_outward, fmoveup_outward,assignment, fassignment,analyzebooks} from '../../actions/assignments';
import Tree from '../TreeIndex';

const myTreeData = [
    {
        "name": "Introduction",
        "id": 1,
        "children": [
            {
                "name": "Radio",
                "id": 2,
                "children": [

                    {"name": "Manipulation", "size": 1041,    "id": 3},

                ]
            },
        ]
    },
];

class App2 extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);
        this.moveup = this.moveup.bind(this);
        this.multiple_bookstore = this.multiple_bookstore.bind(this);
        this.multiple_inassignments = this.multiple_inassignments.bind(this);
        this.multiple_startassignment = this.multiple_startassignment.bind(this);
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

    multiple_startassignment () {

        this.props.fchoosechapter();
        this.props.choosetime();
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
        console.log(this.props.user.moveup,'moveup');
        return (

            <div className="startcontainer">

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
                <div className="meetingdetailcontain float-left makeclassroom processclassroom makeassignment3">
                    <div className="meetingdetailtopdiv makeclassrooms">
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
                                    <div className="bar _2">
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
                    <div className="meetingdetailsmiddle makeclassroommiddle">
                        <div className="section _3dchild">
                            <div className="pagecontain">
                                <div id="treeWrapper">

                                    <Tree     zoomable={false} data={myTreeData } orientation = {"horizontal"}

                                              circleRadius= {5}  translate = {{ x: 200, y: 50 }} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bottommorelink bottommoreright makeclassroombottom secondassignment">
                        <div className="div-block-14">
                            <div className="div-block-13"></div>
                            <div className="div-block-12"></div>
                            <div className="div-block-15" ></div>
                        </div>
                        <div className="div-block-14 rightside">
                            <div className="div-block-13"></div>
                            <div className="div-block-12"></div>
                            <div className="div-block-15" onClick ={this.multiple_startassignment}></div>
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


export default connect(mapStateToProps, {fchoosechapter, choosetime, choosechapter, inassignments,finassignments, finstudents,moveup_outward, fmoveup_outward,analyzebooks,assignment, fassignment})(App2);
