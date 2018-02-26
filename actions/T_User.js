import axios from 'axios';
// import qs from 'qs';
import querystring from 'querystring';

// var querystring = require('querystring');
// var qs = require('qs');
// axios.post('/foo', qs.stringify({ 'bar': 123 }));

export function fetchCourses() {
    return (dispatch) => {
        dispatch({type: "FETCH_COURSES_START"});
        axios.get("http://localhost:5000/api/courses")
            .then((response) => {
                dispatch({type: "FETCH_COURSES_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_COURSES_ERROR", payload: error});
            });
    }
}


export function fetchAnswer() {
    return (dispatch) => {
        dispatch({type: "FETCH_ANSWER_START"});
        axios.get("http://sci-code.com/PresentationHack/demo/api.php/Answer?transform=1/")
            .then((response) => {
                dispatch({type: "FETCH_ANSWER_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_ANSWER_ERROR", payload: error});
            });
    }
}

// IMPORTANT
export function refreshfetch() {
// alert('refreshfetch');
        return (dispatch) => {
            dispatch({type: "FETCH_USERS_START"});
            axios.get("http://sci-code.com/PresentationHack/demo/api.php/User?transform=1/")
                .then((response) => {
                    dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data});
                })
        };
}

// IMPORTANT
export function nullify() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_NULL",
            payload: null
        })
    }
}



// this.props.send(1, this.props.user.pickedChapter, this.props.user.userid.sub),
export function fetchContent() {
    return (dispatch) => {
        dispatch({type: "FETCH_COURSES_START"});

        axios.get("http://sci-code.com/PresentationHack/demo/api.php/Content?transform=1/")

        // axios.get("http://localhost:8080/OLD-CourseConsumer-UI/demo/api.php/Content?transform=1/")
            .then((response) => {
                dispatch({type: "FETCH_CONTENT_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_CONTENT_ERROR", payload: error});
            });
    }
}


export function fetchUsers() {
    // console.log("THIS IS COURSE");
    // console.log(window.location.href, 'window.location.href ');
    var code = window.location.href.substr(window.location.href.indexOf("=") + 1);
    // console.log(code, 'this is the code');


    let jsonCode = {
        "grant_type": "authorization_code",
        "client_id": "z7u9UgHEGhap6-PKmEIF2iVShuPAnQ6d",
        "client_secret": "xkMd-n0pXzvsc6MIlbAJuzxFZqn72oGMwxStC9_MFHcyqmEy9xYZbBZCNXpMVnoA",
        "code": code,
        "redirect_uri": "http://localhost:3000/"
    }

    // return;

    return (dispatch) => {

        return axios.post("https://diggit.eu.auth0.com/oauth/token", jsonCode)

            .then((response) => {

                const AuthStr = 'Bearer '.concat(response.data.access_token);
                dispatch({type: "POST_COURSE_START"});
                axios.get("https://diggit.eu.auth0.com/userinfo", {headers: {Authorization: AuthStr}})


                    .then((response) => {
                        dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
                        // dispatch({type: "POST_USER_START"});


                        // console.log(response, "RESPONSEv");

                        var subster = response.data.sub;
                        var role = response.data['https://example.com/roles'][0];
                        var json = JSON.stringify({
                            "id_Auth": subster,
                            "Role": role,
                            "book_list": "{\"book_list\":[{\"title\":\"\",\"book_completion\":0,\"id_book\":0}]}",
                            "section_list": "{\"section_list\":[{\"id_section\":1,\"title\":\"Introduction\",\"chapter_completion\":0,\"id_book\":0},{\"id_section\":2,\"title\":\"Radio\",\"chapter_completion\":0,\"id_book\":0},{\"id_section\":3,\"title\":\"Manipulation\",\"chapter_completion\":0,\"id_book\":0},{\"id_section\":4,\"title\":\"medium\",\"chapter_completion\":0,\"id_book\":1},{\"id_section\":5,\"title\":\"Radio\",\"chapter_completion\":0,\"id_book\":1},{\"id_section\":6,\"title\":\"Manipulation\",\"chapter_completion\":0,\"id_book\":1},{\"id_section\":7,\"title\":\"advanced\",\"chapter_completion\":0,\"id_book\":2},{\"id_section\":8,\"title\":\"Radio\",\"chapter_completion\":0,\"id_book\":2},{\"id_section\":9,\"title\":\"Manipulation\",\"chapter_completion\":0,\"id_book\":2}]}",
                            "exercice-list": "{\"exercice-list\": [{\"id_exercice\":0, \"completion\":0, \"title\":\"\", \"id_section\":0}] }"
                        });

                        // console.log(json, "JSON");


                        dispatch({type: "FETCH_USER_START"});
                        axios.get("http://sci-code.com/PresentationHack/demo/api.php/User")
                            .then((response) => {
                                var text;
                                let isSuccess = false;
                                for (var i = 0; i < response.data.User.records.length; i++) {
                                    // console.log(subster, 'what is subster');
                                    // console.log(response.data.User.records[i][1], 'response.data.User.records[i][1]');
                                    if (subster === response.data.User.records[i][1]) {
                                        // axios.get("http://sci-code.com/PresentationHack/demo/api.php/User?transform=1/")
                                        //     .then((response) => {
                                        isSuccess = true;
                                        // console.log(response.data, 'IS THIS THE RIGHT FETCHING DATA');
                                        dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data})
                                        // if (role === 'admin') {
                                        //     window.location.replace("http://teacher.diggit.no");
                                        //
                                        // }

                                    }
                                }
                                if(!isSuccess || response.data.User.records.length === 0) {
                                    axios.post("http://sci-code.com/PresentationHack/demo/api.php/User", json);
                                        // .then((response) => {
                                            axios.get("http://sci-code.com/PresentationHack/demo/api.php/User")
                                        // })
                                            .then((response) => {
                                            dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data})
                                            //    if (role === 'admin') {
                                            //        window.location.replace("http://teacher.diggit.no");
                                            //     // window.open('teacher.diggit.no')
                                            // }

                                        })
                                }

                                if (response.data.User.records > 0) {

                                }
                                else {

                                }

                            });


                    });



            });

    }
}


export function postUser(Id) {

    // let json = JSON.stringify({"id_Auth":Id, "section_list": "{\"section_list\":[{\"title\":\"\",\"chapter_completion\":0}]}", "exercice-list":"{\"exercice-list\": [{\"id_exercice\":0, \"completion\"0, \"title\":\"\", \"id_section\":0}] }"});

    let json = JSON.stringify({
        "id_Auth": Id,
        "book_list": "{\"book_list\":[{\"title\":\"\",\"book_completion\":0,\"id_book\":0}]}",
        "section_list": "{\"section_list\":[{\"title\":\"\",\"chapter_completion\":0,\"id_book\":0}]}",
        "exercice-list": "{\"exercice-list\": [{\"id_exercice\":0, \"completion\"0, \"title\":\"\", \"id_section\":0}] }"
    });


    return (dispatch) => {
        dispatch({type: "POST_USER_START"});
        return axios.post("http://sci-code.com/PresentationHack/demo/api.php/User", json)
            .then((response) => {
                // console.log(response);
                dispatch({type: "POST_USER_SUCCESS", payload: response.data});

                axios.get("http://sci-code.com/PresentationHack/demo/api.php/Chapter?transform=1/")
                    .then((response) => {
                        dispatch({type: "FETCH_USERSCOURSE_SUCCESS", payload: response.data});
                    });
            })
    }
}


export function pChapter(chapterId) {

    return {
        type: "PICKED_CHAPTER",
        payload: chapterId
    }
}


export function Activate() {
// alert('activate');
    return {
        type: "PICKED_ACTIVATE",
        payload: 1
    }
}


export function pointf(points) {

    // alert(points);
    return {
        type: "POINTS",
        payload: points
    }
}


export function NULL_ACTIVATE() {
// alert('null');
    return {
        type: "NULL_ACTIVATE",
        payload: 0
    }
}


export function CourseToStore(course) {
// alert('coursetostore');
// console.log(course, 'coursetostore');
    var arr = course['section_list'];

    var total=0;
    for(var i in arr) {
        total += course['section_list'][i]['chapter_completion'];
    }
   let average= total/arr.length
    return {
        type: "COURSE",
        payload: average
    }
}

export function UserToStore(user) {

    // alert(user);
    return {
        type: "USERTOSTORE",
        payload: user
    }
}



export function ChapterToStore(user) {

    // alert(user);
    return {
        type: "ChapterToStore",
        payload: user
    }
}




//
//
//
// export function send(course_id, section_id, user_id) {
//
//     console.log("THIS IS COURSE",course_id, section_id, user_id);
//
//     // let course = `{"course":${course_id},"section":${section_id},"user":${user_id}};`
//     // var params= new URLSearchParams();
//     // params.append('course', 1);
//     // params.append('section', 1);
//     // params.append('user', 1);
//     // console.log(params, 'params');
//     // console.log(course, 'this is what we send');
//
//     let authServerUrl = "http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php";
//     return (dispatch) => {
//     dispatch({type: "POST_COURSE_START"});
//     axios.post(authServerUrl,
//         querystring.stringify({
//             course: 1, //gave the values directly for testing
//             section: 1,
//             user: 1
//         }), {
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             }
//         }) .then((response) => {
//         console.log(response);
//         dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
//         console.log(response, 'RESPONSE NEW ');
//     });
//
// }
// }
//     //
//     // return (dispatch) => {
//     //     dispatch({type: "POST_COURSE_START"});
//     //     axios.post('/foo', qs.stringify({ 'bar': 123 }));
//     //     return axios.post("http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php", qs.stringify(course))
//     //     // return axios.post("http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php", params)
//     //         .then((response) => {
//     //             console.log(response);
//     //             dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
//     //         })
//     //
//     // }



export function send(course_id, section_id, user_id) {

    // console.log("THIS IS COURSE",course_id, section_id, user_id);

    let course = `{"course":${course_id},"section":${section_id},"user":${user_id}};`
var params= new URLSearchParams();
    params.append('course', 1);
    params.append('section', 1);
    params.append('user', 1);
    // console.log(params, 'params');
    // console.log(course, 'this is what we send');
    return (dispatch) => {
        dispatch({type: "POST_COURSE_START"});

        // return axios.post(`http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php`)
        return axios.post(`http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php?course=1&section=1&user=1`)
            // ?course="${course_id)/`
        // return axios.post("http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php", params)
            .then((response) => {
                // console.log(response);
                dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
            })

    }
}





