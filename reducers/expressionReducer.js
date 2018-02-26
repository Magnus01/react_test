export default function expressionReducer(state = {
    fetching: false,
    fetched: false,
    contents: [],
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_CONTENT_START": {
            state = {...state, fetching: true};
            break;
        }
        case "FETCH_CONTENT_ERROR": {
            state =  {...state, fetching: false, error: action.payload};
            break;
        }
        case "FETCH_CONTENT_SUCCESS": {
            state = {
                ...state,
                fetching: false,
                fetched: true,
                contents: action.payload
            };
            break;
        }

        case "FETCH_ALL_CONTENT_START": {
            state = {...state, fetching: true};
            break;
        }
        case "FETCH_ALL_CONTENT_ERROR": {
            state =  {...state, fetching: false, error: action.payload};
            break;
        }
        case "FETCH_ALL_CONTENT_SUCCESS": {
            state = {
                ...state,
                fetching: false,
                fetched: true,
                contents: action.payload
            };
            break;
        }

        case "POST_CONTENT_SUCCESS":
            state = {
                ...state,
                fetching: false,
                fetched: true,
            };
            state.contents = [];
            state.contents = state.contents.concat(action.payload);
            // state.htmlValue = '';
            // state.htmlValue = state.htmlValue.concat(action.payload);
            break;

        case "POST_CONTENT_SUCCESS2":
            state = {
                ...state,
                fetching: false,
                fetched: true,
            };
            state.contents2 = [];
            state.contents2 = state.contents2.concat(action.payload);
            // state.htmlValue = '';
            // state.htmlValue = state.htmlValue.concat(action.payload);
            break
    }
    return state;
}

