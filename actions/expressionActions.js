import axios from 'axios';


export function updateContents(courseId, sectionId, contentId, Type, ContentText, Index){
    return (dispatch) => {
        dispatch({type: "UPDATE_CONTENT"});
        return axios.put(`http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/contents/${Type}/${contentId}`, contents2)
            .then((response) => {
                dispatch({type: "UPDATE_CONTENTS", payload: response.data});
            })
    }
}


export function fetchAllContent(courseId,sectionId) {
    return (dispatch) => {
        dispatch({type: "FETCH_ALL_CONTENT_START"});
        axios.get(`http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/contents`)
            .then((response) => {
                dispatch({type: "FETCH_ALL_CONTENT_SUCCESS", payload: newstring});
            })
            .catch((error) => {
                dispatch({type: "FETCH_ALL_CONTENT_ERROR", payload: error});
            });

        dispatch({type: "FETCH_EXERCISES_START"});
        axios.get(`http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/exercises`)
            .then((response) => {
                dispatch({type: "FETCH_EXERCISES_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_EXERCISES_ERROR", payload: error});
            })
    }
}

export function fetchContent(courseId,sectionId, contentId) {
    return (dispatch) => {
        dispatch({type: "FETCH_CONTENT_START"});
        let linkToExercises = `http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/contents/${contentId}`;
        axios.get(linkToExercises)
            .then((response) => {
                dispatch({type: "FETCH_CONTENT_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_CONTENT_ERROR", payload: error});
            });
    }
}


export function postExercise(courseId, sectionId) {
    return (dispatch) => {
        dispatch({type: "POST_EXERCISE_START"});
        return axios.post(`http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/exercise/`, exerciseblank )
            .then((response) => {
                console.log(response);
                dispatch({type: "POST_EXERCISE_SUCCESS", payload: response.data});
            })
    }
}


export function selectExercise(id) {
    return (dispatch) => {
        dispatch({
            type: "SELECT_EXERCISE",
            payload: id
        })
    }
}


export function addContent(content) {
    return {
        type: "ADD_CONTENT",
        payload: content
    }
}


export function postContent(courseId,sectionId, ContentText, Index) {
    return (dispatch) => {
        dispatch({type: "POST_CONTENT_START"});
        return axios.post(`http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/contents/${ContentText[1]}/`, contents2 )
            .then((response) => {
                console.log(response, 'POST CONTENT RESPONSE');
                dispatch({type: "POST_CONTENT_SUCCESS", payload: response.data});
            })
    }
}


export function deleteExercise(course, section, exerciseId) {
    return (dispatch) => {
        dispatch({type: "Delete"});
        return axios.delete(`http://localhost:5000/api/course/${course}/section/${section}/exercise/${exerciseId}`)
            .then((response) => {
                dispatch({type: "DELETE_EXERCISE_SUCCESS", payload: exerciseId });
            })
            .catch((error) => {
                dispatch({type: "DELETE_EXERCISE_ERROR", payload: error});
            });
    }
}

export function fetchidExercise(course, section, exerciseId) {
    return (dispatch) => {
        dispatch({type: "FETCH_EXERCISE_START"});
        return axios.delete(`http://localhost:5000/api/course/${course}/section/${section}/exercise/${exerciseId}`)
            .then((response) => {
                dispatch({type: "FETCH_EXERCISE_ID_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_EXERCISE_ID_ERROR", payload: error});
            });
    }
}


export function updateExercise(exercise) {
    return (dispatch) => {
        dispatch({type: "UPDATE_SECTION_START"});
        return axios.put(`http://localhost:5000/api/course/${courseId}/section/${sectionId}/exercise/${exerciseId}`, exerciseJ)
            .then((response) => {
                dispatch({type: "UPDATE_COURSE_SUCCESS", payload: response.data});
                console.log(response.data, 'response Data')
            })
        .catch((error) => {
            // console.log(response);
            dispatch({type: "POST_COURSE_ERROR", payload: error});
        });
    }
}
