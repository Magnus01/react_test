export default function exerciseReducer(state = {
    fetching: false,
    fetched: false,
    exercises: [],
    selectedExercise: null,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_EXERCISES_START": {
            state = {...state, fetching: true};
            break;
        }
        case "FETCH_EXERCISES_ERROR": {
            state =  {...state, fetching: false, error: action.payload};
            break;
        }
        case "FETCH_EXERCISES_SUCCESS": {
            state = {
                ...state,
                fetching: false,
                fetched: true,
                exercises: action.payload
            };
            break;
        }

        case "SELECT_EXERCISE":
            state = {...state, selectedExercise: action.payload};
            break;


        case "DELETE_EXERCISE_SUCCESS":
            state = {...state};
            state.exercises = state.exercises.filter(({ id }) => id !== action.payload);


        case "Delete":

            state = {...state, deleteExercise: action.payload};

            break;

        case "DELETE_EXERCISE_ERROR":
            state =  {...state, fetching: false, error: action.payload};
            break;

        case "POST_EXERCISE_SUCCESS":
            state = {
                ...state,
                fetching: false,
                fetched: true,
            };

            state.exercises = state.exercises.concat(action.payload);
            break;
    }
    return state;
}

