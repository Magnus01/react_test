import axios from 'axios'


export function fetchAllExercises(courseId,sectionId) {
    return (dispatch) => {
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


export function fetchExercise(courseId,sectionId, exerciseId) {
    return (dispatch) => {
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


export function postExercise(courseId,sectionId, ContentText, Index) {
    return (dispatch) => {
        dispatch({type: "POST_EXERCISE_START"});
        return axios.post(`http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/exercises/`, ContentText[0] )
            .then((response) => {
                console.log(response);
                dispatch({type: "POST_EXERCISE_SUCCESS", payload: response.data});
            })
    }
}


export function postExercise2(courseId,sectionId, ContentText) {
    return (dispatch) => {
        dispatch({type: "POST_EXERCISE_START"});
        return axios.post(`http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/exercises/`, ContentText )
            .then((response) => {
                console.log(response);
                dispatch({type: "POST_EXERCISE_SUCCESS", payload: response.data});
            })
    }
}
export function updateExercise2(courseId,sectionId, exerciseId, ContentText, Index) {
    return (dispatch) => {
        dispatch({type: "UPDATE_EXERCISE_START"});
        return axios.put(`http://localhost:5000/api/courses/${courseId}/sections/${sectionId}/exercises/${exerciseId}`, ContentText)
            .then((response) => {
                dispatch({type: "UPDATE_EXERCISE_SUCCESS", payload: response.data});
            })
        .catch((error) => {
            // console.log(response);
            dispatch({type: "POST_COURSE_ERROR", payload: error});
        });
    }
}


export function selectExerciseContainer(id) {
    return (dispatch) => {
        dispatch({
            type: "SELECT_EXERCISE_CONTAINER",
            payload: id
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


export function selectType(Type) {
    return (dispatch) => {
        dispatch({
            type: "SELECT_EXERCISE_TYPE",
            payload: Type
        })
    }
}


export function selectCode(Code) {
    return (dispatch) => {
        dispatch({
            type: "SELECT_CODE",
            payload: Code
        })
    }
}


export function selectContainer(selectedContainer) {
    return (dispatch) => {
        dispatch({
            type: "SELECT_CONTAINER",
            payload: selectedContainer
        })
    }
}


export function selectNullType(Type) {
    return (dispatch) => {
        dispatch({
            type: "SELECT_EXERCISE_NULL_TYPE",
            payload: null
        })
    }
}


export function selectNull(courseId) {
    return (dispatch) => {
        dispatch({
            type: "SELECT_NULL",
            payload: null
        })
    }
}


export function addExercise(exercise) {
    return {
        type: "ADD_EXERCISE",
        payload: exercise
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
                console.log("IS IT WORKING?");
                dispatch({type: "DELETE_EXERCISE_ERROR", payload: error});
            });
    }
}


export function fetchidExercise(course, section, exerciseId) {
    return (dispatch) => {
        dispatch({type: "FETCH_EXERCISE_START"});
        return axios.delete(`http://localhost:5000/api/courses/${course}/sections/${section}/exercises/${exerciseId}`)
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
                dispatch({type: "UPDATE_EXERCISE_SUCCESS", payload: response.data});
            })
        .catch((error) => {
            // console.log(response);
            dispatch({type: "POST_COURSE_ERROR", payload: error});
        });
    }
}