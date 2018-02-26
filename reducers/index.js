import { combineReducers } from "redux"

import classroomReducer from "./classroom"
import assignmentReducer from "./assignment"

import courseReducer from "./courseReducer"
import chapterReducer from "./chapterReducer"
import expressionReducer from "./expressionReducer"
import exerciseReducer from "./exerciseReducer"


export default combineReducers({
    user: classroomReducer,
    inclass: assignmentReducer,
    course: courseReducer,
    chapters: chapterReducer,
    expressions: expressionReducer,
    exercises: exerciseReducer
});