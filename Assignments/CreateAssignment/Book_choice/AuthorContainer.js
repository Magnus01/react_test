import React, { Component } from 'react';




import {fstartassignment, fbookstore, fbookmovement, booktour, sweetalert} from '../../../../actions/assignments';

import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor() {
        super();
        this.fbookmovementstate = this.fbookmovementstate.bind(this);
        this.exercise = this.exercise.bind(this);
        this.sweet = this.sweet.bind(this);


    }

    // book_author () {
    //     this.props.fassignment();
    //     this.props.inassignments();
    // }


    fbookmovementstate () {
        this.props.fbookmovement();

    }


    exercise () {
        this.props.fstartassignment();
        this.props.booktour();

    }

    sweet () {
        this.props.fstartassignment();
        this.props.sweetalert();

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


            <div className="author-description-preview nohself">
                <div className="cross-button"
                     onClick={ () => this.fbookmovementstate()} style= {{"marginLeft": 200}} >
                    <div className="leftcross-button" ></div>
                    <div className="leftcross-button-right"></div>
                </div>
                <div className="div-book-40">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros </p>
                </div>
                <div className="w-row">
                    <div className="w-col w-col-6">
                        <a className="button-6 w-button select-button" onClick={this.sweet}>Choose</a></div>
                    <div className="w-col w-col-6">
                        <a className="button-6 w-button" onClick = { () => this.exercise()} >Tour Book</a></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom')
    return {
        user: state.user,
        inclass: state.inclass
    }
}


export default connect(mapStateToProps, {fstartassignment, sweetalert, fbookstore, fbookmovement, booktour})(Dashboard);
