import axios from 'axios';


export function getCourses() {
    return (dispatch) => {
        dispatch({type: "FETCH_COURSES_START"});
        axios.get("http://contentmanufacturingapi.azurewebsites.net/courses")
            .then((response) => {
                console.log("FETCH_COURSES_START", response.data);
                dispatch({type: "FETCH_COURSES_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_COURSES_ERROR", payload: error});
            });
    }
}


export function getCourse(id) {
    return (dispatch) => {
        dispatch({type: "FETCH_COURSE_START"});
        return axios.get(`http://contentmanufacturingapi.azurewebsites.net/courses/${id}`)
            .then((response) => {
                dispatch({type: "FETCH_COURSE_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_COURSE_ERROR", payload: error});
            });
    }
}


export function postCourse(course) {
    console.log("postCourse(course), the value of course is: ", course);
    return (dispatch) => {
        dispatch({type: "POST_COURSE_START"});
        return axios.post("http://contentmanufacturingapi.azurewebsites.net/courses", course)
            .then((response) => {
                console.log("postCourse(course), the response message data looks like this: ", response.data);
                dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "POST_COURSE_ERROR", payload: error});
            });
    }
}


export function updateCourse(course) {
    return (dispatch) => {
        dispatch({type: "UPDATE_COURSE_START"});
        return axios.put(`http://contentmanufacturingapi.azurewebsites.net/courses/${course.id}`, course)
            .then((response) => {
                dispatch({type: "UPDATE_COURSE_SUCCESS", payload: response.data});
            });
    }
}


export function deleteCourse(id) {
    return (dispatch) => {
        dispatch({type: "DELETE_COURSE_START"});
        return axios.delete(`http://contentmanufacturingapi.azurewebsites.net/courses/${id}`)
            .then((response) => {
                dispatch({type: "DELETE_COURSE_SUCCESS", payload: id });
            })
            .catch((error) => {
                dispatch({type: "DELETE_COURSE_ERROR", payload: error});
            });
    }
}


export function updateSelectedCourse(courseId) {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_SELECTED_COURSE",
                payload: courseId
        })
    }
}


export function updateCourseTitle(title) {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_COURSE_TITLE",
            payload: title
        })
    }
}


export function updateCourseTagline(tagline) {
    console.log("updateCourseTagline(tagline): ", tagline);
    return (dispatch) => {
        dispatch({
            type: "UPDATE_COURSE_TAGLINE",
            payload: tagline
        })
    }
}


export function updateCourseDescription(description) {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_COURSE_DESCRIPTION",
            payload: description
        })
    }
}


export function patchCourseTitle(courseId, title) {
    return (dispatch) => {
        dispatch({type: "PATCH_COURSE_TITLE_START"});
        let patchDoc = [
            {
                op: "replace",
                path: "/title",
                value: title
            }
        ];
        return axios.patch(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}`, patchDoc)
            .then((response) => {
                dispatch({type: "PATCH_COURSE_TITLE_SUCCESS", payload: response.data});
            });
    }
}


export function patchCourseTagline(courseId, tagline) {
    return (dispatch) => {
        dispatch({type: "PATCH_COURSE_TAGLINE_START"});
        let patchDoc = [
            {
                op: "replace",
                path: "/tagline",
                value: tagline
            }
        ];
        return axios.patch(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}`, patchDoc)
            .then((response) => {
                dispatch({type: "PATCH_COURSE_TAGLINE_SUCCESS", payload: response.data});
            });
    }
}


export function patchCourseDescription(courseId, description) {
    return (dispatch) => {
        dispatch({type: "PATCH_COURSE_DESCRIPTION_START"});
        let patchDoc = [
            {
                op: "replace",
                path: "/description",
                value: description
            }
        ];
        return axios.patch(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}`, patchDoc)
            .then((response) => {
                dispatch({type: "PATCH_COURSE_DESCRIPTION_SUCCESS", payload: response.data});
            });
    }
}


export function clearSelectedCourse() {
    return (dispatch) => {
        dispatch({
            type: "CLEAR_SELECTED_COURSE",
        })
    }
}


export function toggleTableOfContents() {
    return {
        type: "TOGGLE_TABLE_OF_CONTENTS",
    }
}


export function flipBook() {
    return {
        type: "FLIP_BOOK"
    }
}


export function resetBookState() {
    return {
        type: "RESET_BOOK_STATE"
    }
}


export function updateSearchString(str) {
    return {
        type: "UPDATE_SEARCH_STRING",
        payload: str
    }
}


export function clearSearchString() {
    return {
        type: "CLEAR_SEARCH_STRING"
    }
}