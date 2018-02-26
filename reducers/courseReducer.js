export default function courseReducer(state = {
    fetching: false,
    bookIsFlipped: false,
    tableOfContentsIsShown: false,
    courses: [],
    error: null,
    selectedCourse: null,
    searchString: "",
}, action) {

    switch (action.type) {
        case "FETCH_COURSES_START":
            state = {...state, fetching: true};
            break;


        case "FETCH_COURSES_ERROR":
            state = {...state, fetching: false, error: action.payload};
            break;


        case 'TOGGLE_TABLE_OF_CONTENTS':
            return {...state, tableOfContentsIsShown: !state.tableOfContentsIsShown};
            break;


        case 'FLIP_BOOK':
            return {...state, bookIsFlipped: !state.bookIsFlipped};
            break;


        case "FETCH_COURSES_SUCCESS":
            state = {...state, fetching: false, courses: action.payload};
            break;


        case "POST_COURSES_ERROR":
            state = {...state, fetching: false, error: action.payload};
            break;


        case "UPDATE_SELECTED_COURSE":
            state = {...state, selectedCourse: action.payload};
            break;


        case "CLEAR_SELECTED_COURSE":
            state = {...state, selectedCourse: null};
            break;

        case "POST_COURSE_SUCCESS":
            state = {...state, fetching: false,
                courses: state.courses.concat(action.payload),
                selectedCourse: action.payload.id};
            break;


        case "UPDATE_COURSE_SUCCESS":
            state = {...state, fetching: false,
                courses: state.courses.map(courses => {
                    if (courses.id !== action.payload.id) {
                        return courses;
                    }
                    return action.payload;
                })
            };
            // console.log(state.courses + "this is state courses before filter");
            // state.courses = state.courses.filter(({ id }) => id !== action.payload.id);
            // console.log(state.courses + "this is state courses after filter");
            // state.courses = state.courses.concat(action.payload);
            // console.log(state.courses + "this is state courses after concat");
            break;

        case "UPDATE_COURSE_TITLE":
            state = {...state,
                courses: state.courses.map(c => {
                    if (c.id === state.selectedCourse) {
                        c.title = action.payload;
                    }
                    return c;
                })
            };
            break;


        case "UPDATE_COURSE_TAGLINE":
            state = {...state,
                courses: state.courses.map(c => {
                    if (c.id === state.selectedCourse) {
                        c.tagline = action.payload;
                    }
                    return c;
                })
            };
            break;


        case "UPDATE_COURSE_DESCRIPTION":
            state = {...state,
                courses: state.courses.map(c => {
                    if (c.id === state.selectedCourse) {
                        c.description = action.payload;
                    }
                    return c;
                })
            };
            break;


        case "PATCH_COURSE_TITLE_START":
            state = {...state, fetching: true};
            break;
        case "PATCH_COURSE_TAGLINE_START":
            state = {...state, fetching: true};
            break;
        case "PATCH_COURSE_DESCRIPTION_START":
            state = {...state, fetching: true};
            break;

        case "PATCH_COURSE_TITLE_SUCCESS":
            state = {...state, fetching: false};
            break;
        case "PATCH_COURSE_TAGLINE_SUCCESS":
            state = {...state, fetching: false};
            break;
        case "PATCH_COURSE_DESCRIPTION_SUCCESS":
            state = {...state, fetching: false};
            break;



        case "DELETE_COURSE_SUCCESS":
            state = {...state, courses: state.courses.filter(id => id !== action.payload), selectedCourse: null};
            break;


        case "Delete":
            state = {...state, deleteCourse: action.payload};
            break;


        case "DELETE_COURSE_ERROR":
            state = {...state, fetching: false, error: action.payload};
            break;


        case "FETCH_COURSES_ID_SUCCESS":
            const index = state.courses.findIndex(item => item.id === action.payload.id);
            break;


        case "FETCH_COURSES_ID_ERROR":
            state = {
                ...state,
                fetching: false,
            };
            break;


        case "UPDATE_SEARCH_STRING":
            state = {
                ...state,
                searchString: action.payload.toLowerCase()
            };
            break;


        case "CLEAR_SEARCH_STRING":
            state = {
                ...state,
                searchString: ""
            };
            break;


        case "RESET_BOOK_STATE":
            state = {
                ...state,
                bookIsFlipped: false,
                tableOfContentsIsShown: false
            };
            break;
    }
    return state;
}

