import React, { Component } from 'react';
import {createclass,dashboard, fcreateclass,fmakeclass1, makeclass2, fdashboard, moveup} from '../../actions/classroom';
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/magnuss-amazing-project.webflow.css';
import {connect} from 'react-redux';
import {fstartassignment, choosechapter, inassignments, finassignments,finstudents, moveup_outward, fmoveup_outward,assignment, fassignment,analyzebooks} from '../../actions/assignments';

class App2 extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);
        this.moveup = this.moveup.bind(this);
        this.multiple_bookstore = this.multiple_bookstore.bind(this);
        this.multiple_inassignments = this.multiple_inassignments.bind(this);
        this.mover = this.mover.bind(this);

        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);
        this.createTooltip = this.createTooltip.bind(this);
        this.goTo = this.goTo.bind(this);
        this.state = {showToolTip: false};
    }

    goTo(route) {


        this.props.history.replace(`/${route}`);
    }

    multiple () {

        this.props.finstudents();
        this.props.analyzebooks();
    }
    mover () {
        this.goTo('createassignment2');
        this.props.fstartassignment();
        this.props.choosechapter();
    }

    multiple_startassignment () {

        this.props.finassignments();
        this.props.choosechapter();
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
                                    <div className="bar _2">
                                        <div className="bubble">
                                            <div className="classinfo">
                                                <div className="text-block-5">Class</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bar _2">
                                        <div className="bubble">
                                            <div className="classinfo">
                                                <div className="text-block-5">Students</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bar _2 _3 end">
                                        <div className="bubble">
                                            <div className="classinfo">
                                                <div className="text-block-5">Print</div>
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
                                <div className="div-block-6 upper">
                                    <div className="div-block-7 uppy inclass w-clearfix">
                                        <div className="meetingdetailcontain float-left bookstores">
                                            <div className="bottommorelink bottommoreright makeclassroombottom">
                                                <div className="leftsidenav">
                                                    <div className="row-6 w-row">
                                                        <div className="book-collumns w-col w-col-6">
                                                            <div className="div-block-21">
                                                                <div className="div-block-20">Books</div>
                                                            </div>
                                                        </div>
                                                        <div className="column-31 w-col w-col-6">
                                                            <div className="div-block-21">
                                                                <div className="div-block-20 collection">Collection</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-block w-form">
                                                        <form id="email-form" name="email-form" data-name="Email Form" className="form"><input type="text" className="searchbar books w-input" maxlength="256" name="name" data-name="Name" id="name"></input>
                                                            <div data-delay="0" className="bookstoredrop w-dropdown">
                                                                <div className="searchdrop books w-dropdown-toggle">
                                                                    <div className="icon w-icon-dropdown-toggle"></div>
                                                                </div>
                                                                <nav className="w-dropdown-list"><a href="#" className="w-dropdown-link">Link 1</a><a href="#" className="w-dropdown-link">Link 2</a><a href="#" className="w-dropdown-link">Link 3</a></nav>
                                                            </div>
                                                        </form>
                                                        <div className="w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="meetingdetailsmiddle makeclassroommiddle meetingbooks">
                                                <div className="div-block-5 form">
                                                    <div data-animation="slide" data-duration="500" data-infinite="1" className="slider w-slider">
                                                        <div className="mask w-slider-mask">
                                                            <div className="slide w-slide">
                                                                <div className="div-block-17">
                                                                    <div className="shelf">
                                                                        <div className="wrappercube bookstores">
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book page _1"><div  className="button-3 w-button">ANALYZE</div></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                    <div  onClick ={this.multiple} className="left book hardcover"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div onClick ={this.multiple}  className="left book hardcover middlehard"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover righthard"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-17">
                                                                    <div className="shelf shelf2">
                                                                        <div className="wrappercube bookstores undershelf">
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                    <div className="left book hardcover bookshelf2"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover middlehard shelf2_2"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover righthard shelf2_3"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="slide w-slide">
                                                                <div className="div-block-17">
                                                                    <div className="shelf">
                                                                        <div className="wrappercube bookstores">
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                    <div className="left book hardcover">fadsfsadf</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover middlehard"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover righthard"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-17">
                                                                    <div className="shelf shelf2">
                                                                        <div className="wrappercube bookstores undershelf">
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                    <div className="left book hardcover bookshelf2"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover middlehard shelf2_2"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover righthard shelf2_3"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="slide w-slide">
                                                                <div className="div-block-17">
                                                                    <div className="shelf">
                                                                        <div className="wrappercube bookstores">
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                    <div className="left book hardcover">fadsfsadf</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover middlehard"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover righthard"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-17">
                                                                    <div className="shelf shelf2">
                                                                        <div className="wrappercube bookstores undershelf">
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                    <div className="left book hardcover bookshelf2"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover middlehard shelf2_2"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-24 leftbooks _1">
                                                                                <div className="cube ontheshelf">
                                                                                    <div className="back book"></div>
                                                                                    <div className="top book"></div>
                                                                                    <div className="right book"></div>
                                                                                    <div className="left book hardcover righthard shelf2_3"></div>
                                                                                    <div className="left book page _1"><a href="#" className="button-3 w-button">ANALYZE</a></div>
                                                                                    <div className="left book page _2"></div>
                                                                                    <div className="left book page _3"></div>
                                                                                    <div className="left book page _11"></div>
                                                                                    <div className="left book page _5"></div>
                                                                                    <div className="left book page _6"></div>
                                                                                    <div className="bottom front1 book"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-slider-arrow-left">
                                                            <div className="arrow"></div>
                                                        </div>
                                                        <div className="right-arrow w-slider-arrow-right">
                                                            <div className="arrow rotatedarrow"></div>
                                                        </div>
                                                        <div className="slide-nav w-slider-nav w-round"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bottommorelink bottommoreright makeclassroombottom secondclassroom">
                        <div className="div-block-14">
                            <div className="div-block-13"></div>
                            <div className="div-block-12"></div>
                            <div className="div-block-15" ></div>
                        </div>
                        <div className="div-block-14 rightside">
                            <div className="div-block-13"></div>
                            <div className="div-block-12"></div>
                            <div className="div-block-15" onClick ={this.mover}></div>
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


export default connect(mapStateToProps, {fstartassignment, choosechapter, choosechapter, inassignments,finassignments, finstudents,moveup_outward, fmoveup_outward,analyzebooks,assignment, fassignment})(App2);
