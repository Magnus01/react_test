// import axios from 'axios';


export function fmakeclass1() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_1_CLASS_PROCESS",
            payload: false
        })
    }
}


export function fmakeclass2() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_2_CLASS_PROCESS",
            payload: false
        })
    }
}

export function fmakeclass3() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_3_CLASS_PROCESS",
            payload: false
        })
    }
}



export function assignment() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_ASSIGNMENT",
            payload: true
        })
    }
}


export function fassignment() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_ASSIGNMENT",
            payload: false
        })
    }
}




export function bookmovement() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_MOVEMENT",
            payload: 'next'
        })
    }
}

export function fbookmovement() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_MOVEMENT",
            payload: ''
        })
    }
}


export function bookstore() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_STORE",
            payload: true
        })
    }
}

export function fbookstore() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_STORE",
            payload: false
        })
    }
}


export function booktour() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_TOUR",
            payload: true
        })
    }
}

export function fbooktour() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_TOUR",
            payload: false
        })
    }
}



export function toc() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_TOC",
            payload: true
        })
    }
}


export function ftoc() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_TOC",
            payload: false
        })
    }
}


export function analyzebooks() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_ANALYZEBOOK",
            payload: true
        })
    }
}


export function fanalyzebooks() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_ANALYZEBOOKS",
            payload: false
        })
    }
}




export function inassignments() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_INASSIGNMENTS",
            payload: true
        })
    }
}


export function finassignments() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_INASSIGNMENTS",
            payload: false
        })
    }
}
export function instudents() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_INSTUDENTS",
            payload: true
        })
    }
}


export function finstudents() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_INSTUDENTS",
            payload: false
        })
    }
}
export function incurric() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_INCURRIC",
            payload: true
        })
    }
}


export function fincurric() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_INCURRIC",
            payload: false
        })
    }
}



export function startassignment() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_STARTASSIGNMENT",
            payload: true
        })
    }
}


export function fstartassignment() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_STARTASSIGNMENT",
            payload: false
        })
    }
}

export function sweetalert() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_SWEETALERT",
            payload: true
        })
    }
}


export function fsweetalert() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_SWEETALERT",
            payload: false
        })
    }
}

export function choosetime() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CHOOSETIME",
            payload: true
        })
    }
}


export function fchoosetime() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CHOOSETIME",
            payload: false
        })
    }
}


export function choosechapter() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CHOOSECHAPTER",
            payload: true
        })
    }
}


export function fchoosechapter() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CHOOSECHAPTER",
            payload: false
        })
    }
}














export function moveup_outward() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_INWARD",
            payload: ''
        })
    }
}

export function fmoveup_outward() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_INWARD",
            payload: 'inward'
        })
    }
}