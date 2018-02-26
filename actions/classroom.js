import axios from 'axios';




//
//
//
export function postUni(uniInfo) {
    console.log(uniInfo, 'uniinfo');
    let uniInfo2 = {
        Name: uniInfo,
        Description: 'Professor einhart'
    };

    return (dispatch) => {
        dispatch({type: "POST_UNI_START"});
        return axios.post(`http://localhost:51739/api/users`, uniInfo2 )
            .then((response) => {
                console.log(response, 'RESPONSE UNIINFO');
                dispatch({type: "POST_UNI_SUCCESS", payload: response.data});
            })
    }
}


//
// export function getuserId() {
//     const { getAccessToken } = this.props.auth;
//
//     console.log(this.props.auth,this.state.profile, "this.props.auth");
//
//     const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
//
//     // let data= data: { 'user' : 'name' };
//     let json = {
//
//         "Name": this.state.profile.given_name + " " + this.state.profile.family_name,
//         "Description": this.state.profile.email,
//         "Id" : this.state.profile.sub,
//         "EducatorDetails": {
//             "Name" : "education",
//             "Description" : "description"
//         }
//     };
//
//     axios.post(`${API_URL}`,json,  headers )
//         .then(response => this.setState({ message: response.data.message }))
//         .catch(error => this.setState({ message: error.message }));
// }

//
// export function postUni(uniInfo) {
//     console.log(uniInfo, 'uniinfo');
//
//
//     return (dispatch) => {
//
//                 dispatch({type: "POST_UNI_SUCCESS", payload: title});
//
//     }
// }





export function postUni2(title, description) {
    // console.log(uniInfo, 'uniinfo');
    let uniInfo2 = {
        Name: title,
        Description: description
    };

    return (dispatch) => {
        dispatch({type: "POST_UNI_START"});
        return axios.post(`http://localhost:51739/api/users`, uniInfo2 )
            .then((response) => {
                console.log(response, 'RESPONSE UNIINFO');
                dispatch({type: "POST_UNI_SUCCESS2", payload: response.data});
            })
    }
}








export function show() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_SHOW",
            payload: true
        })
    }
}


export function User() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_USER",
            payload: true
        })
    }
}

export function F_User() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_USER",
            payload: false
        })
    }
}

export function updatetitle(title) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_UPDATE_TITLE",
            payload: title
        })
    }
}

export function updatedescription(description) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_UPDATE_DESCRIPTION",
            payload: description
        })
    }
}

export function hide() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_HIDE",
            payload: false
        })
    }
}

export function book() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK",
            payload: true
        })
    }
}
export function createclass() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CLASS",
            payload: true
        })
    }
}

export function moveup() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_MOVEUP",
            payload: ''
        })
    }
}

export function fmoveup() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_MOVEUP",
            payload: 'testing'
        })
    }
}

export function bookcss() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_CSS",
            payload: 'bookcss'
        })
    }
}

export function fbookcss() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_CSS",
            payload: ''
        })
    }
}
export function classroomcss() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CLASS_CSS",
            payload: 'classroomcss'
        })
    }
}

export function fclassroomcss() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CLASS_CSS",
            payload: ''
        })
    }
}

export function next() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_NEXT",
            payload: 'next'
        })
    }
}

export function fnext() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_NEXT",
            payload: ''
        })
    }
}

export function fcreateclass() {

    return (dispatch) => {
        dispatch({
            type: "REMOVE_CLASS_1",
            payload: false
        })
    }
}


export function makeclass1() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_1_CLASS_PROCESS",
            payload: true
        })
    }
}

export function makeclass2() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_2_CLASS_PROCESS",
            payload: true
        })
    }
}
export function makeclass3() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_3_CLASS_PROCESS",
            payload: true
        })
    }
}

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






export function dashboard() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_DASHBOARD",
            payload: true
        })
    }
}
export function fdashboard() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_DASHBOARD",
            payload: false
        })
    }
}

export function classdashboard() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CLASS_DASHBOARD",
            payload: true
        })
    }
}
export function fclassdashboard() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CLASS_DASHBOARD",
            payload: false
        })
    }
}
export function bookdashboard() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_DASHBOARD",
            payload: true
        })
    }
}
export function fbookdashboard() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_DASHBOARD",
            payload: false
        })
    }
}


export function register() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_REGISTER",
            payload: true
        })
    }
}

export function fregister() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_REGISTER",
            payload: false
        })
}
}


export function register2() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_REGISTER2",
            payload: true
        })
    }
}

export function fregister2() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_REGISTER2",
            payload: false
        })
}
}