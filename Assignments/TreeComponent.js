import React, { Component } from 'react';
import {createclass,dashboard, fcreateclass,fmakeclass1, makeclass2, fdashboard, moveup} from '../../actions/classroom';
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/magnuss-amazing-project.webflow.css';
import {connect} from 'react-redux';
import {fchoosechapter, choosetime, choosechapter, inassignments, finassignments,finstudents, moveup_outward, fmoveup_outward,assignment, fassignment,analyzebooks} from '../../actions/assignments';
import Tree from '../TreeIndex';
import StudentPlatform from './Student/Exercise';




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

        return (

            <div >

                <Tree     zoomable={false} data={myTreeData } orientation = {"vertical"}

                          circleRadius= {2}  translate = {{ x: 200, y: 50 }} />

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
