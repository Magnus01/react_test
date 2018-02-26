export default function chapterReducer(state = {
                                            fetching: false,
                                            searchString: '',
                                            searchFocusIndex: 0,
                                            searchFoundCount: null,
                                            chapters: [],
                                            treeData: {},
                                            pickedConcept: 0,
                                            selectedChapter: null,
                                            error: null,
                                                }, action) {
    switch (action.type) {

        case "UPDATE_CHAPTER_TREE_IN_STORE_ONLY":
            state = {
                ...state,
                treeData: action.payload
            };
            break;

        case "FETCH_CHAPTERS_START":
            state = {...state, fetching: true};
            break;

        case "FETCH_CHAPTERS_ERROR":
            state =  {...state, fetching: false, error: action.payload};
            break;

        case "FETCH_CHAPTERS_SUCCESS":
            state = {
                ...state,
                fetching: false,
                chapters: action.payload.map(c => ({
                    title: c.title,
                    parent: c.parent,
                    id: c.id,
                    treeIndex: c.treeIndex
                }))
            };
            break;

        case "SELECT_CHAPTER":
            state = {...state, selectedChapter: action.payload};
            break;

        case "POST_CHAPTER_START":
            state = {...state, fetching: true};
            break;

        case "POST_CHAPTER_SUCCESS":
            state = {
                ...state,
                fetching: false,
                chapters: state.chapters.concat({
                    title: action.payload.title,
                    parent: action.payload.parent,
                    id: action.payload.id,
                    treeIndex: action.payload.treeIndex
                })
            };
            break;

        case "UPDATE_CHAPTER_TITLE":
            state = {
                ...state,
                chapters: state.chapters.map(c => {
                    if (c.id === action.payload.chapterId) {
                        c.title = action.payload.newTitle;
                    }
                    return c;
                })
            };
            break;

        case "PATCH_CHAPTER_TITLE_START":
            state = {...state, fetching: true};
            break;

        case "PATCH_CHAPTER_TITLE_SUCCESS":
            state = {
                ...state,
                fetching: false,
                chapters: state.chapters.map(c => {
                    if (c.id === action.payload.chapterId) {
                        c.title = action.payload.newTitle;
                    }
                    return c;
                })
            };
            break;

        case "UPDATE_SINGLE_CHAPTER_SUCCESS":
            console.log(action.payload, "UPDATE_SINGLE_CHAPTER_SUCCESS action.payolad");
            state = {
                ...state,
                chapters: state.chapters.map(s => {
                    if(s.id === action.payload.id) {
                        return {
                            id: action.payload.id,

                            name: action.payload.name,

                            size: 3000,

                            expanded: true,
                            treeIndex: action.payload.treeIndex,
                            parent: action.payload.parent === 0 ? null : action.payload.parent
                        }
                    } else {
                        return s;
                    }
                })
            };
            break;

        case "UPDATE_MULTIPLE_CHAPTERS_SUCCESS":
            console.log("UPDATE_MULTIPLE_CHAPTERS_SUCCESS before", action.payload);

            let newChapters = action.payload.map(s => {
                console.log(s.parentNode, s, "is s.parentnode and s");
                return ({
                    id: s.id,
                    name: s.name,
                    size: 3000,

                    expanded: true,
                    // children: JSON.parse(s.children),
                    treeIndex: s.treeIndex,
                    parent: s.parent === undefined ? null : s.parent,
                    // path: JSON.parse("[" + s.path + "]"),
                });
            });
            state = {
                ...state,
                fetching: false,
                chapters: newChapters
            };
            break;

        case "DELETE_CHAPTER_START":
            state = {...state, fetching: true};
            break;

        case "DELETE_CHAPTER_SUCCESS":
            state = {...state, fetching: false,
                chapters: state.chapters.filter(({id}) => id !== action.payload)
            };
            break;

        case "DELETE_CHAPTER_ERROR":
            state =  {...state, fetching: false, error: action.payload};
            break;

        case "CHAPTER_SEARCH_SELECT_PREV_MATCH":
            state = {
                ...state,
                searchFocusIndex:
                    state.searchFocusIndex !== null ?
                    (state.searchFoundCount + state.searchFocusIndex - 1) % state.searchFoundCount :
                    state.searchFoundCount - 1
            };
            break;

        case "CHAPTER_SEARCH_SELECT_NEXT_MATCH":
            state = {
                ...state,
                searchFocusIndex:
                    state.searchFocusIndex !== null ?
                        (state.searchFocusIndex + 1) % state.searchFoundCount :
                        0,
            };
            break;

        case "CHAPTER_SEARCH_SET_SEARCH_STRING":
            state = {
                ...state,
                searchString: action.payload,
            };
            break;

        case "CHAPTER_SEARCH_FINISH_CALLBACK":
            state = {
                ...state,
                searchFoundCount: action.payload.length,
                searchFocusIndex: action.payload.length > 0 ? state.searchFocusIndex % action.payload.length : 0
            };
            break;

        case "RENDER_TREE":
            state = {
                ...state,
                treeData: action.payload
            };
            break;

        case "PICKED_CONCEPT":
            state = {
                ...state,
                pickedConcept: action.payload
            };
            break;

        case "UPDATE_SELECTED_CHAPTER":
            state = {
                ...state,
                selectedChapter: action.payload
            };
            break;

        case "CLEAR_SELECTED_CHAPTER":
            state = {
                ...state,
                selectedChapter: null
            };
            break;

        case "PATCH_CHAPTERS_START":
            state = {...state, fetching: true};
            break;

        case "PATCH_CHAPTERS_SUCCESS":
            state = {
                ...state,
                chapters: action.payload.map(c => ({
                    title: c.title,
                    parent: c.parent,
                    id: c.id,
                    treeIndex: c.treeIndex
                })).sort((a,b) => a.treeIndex > b.treeIndex)
            };
            break;
    }
    return state;
}

