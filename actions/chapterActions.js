import axios from 'axios';
import SortableTree, { getTreeFromFlatData, getFlatDataFromTree, changeNodeAtPath, removeNodeAtPath } from 'react-sortable-tree';
import jsonPatch from 'fast-json-patch';


// UPDATE STORE TREE ONLY
export function updateChapterTreeInStoreOnly(newTree) {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_CHAPTER_TREE_IN_STORE_ONLY",
            payload: newTree
        })
    }
}


export function patchChapters(oldChapterList, newChapterList, courseId) {
    return (dispatch) => {
        dispatch({type: "PATCH_CHAPTERS_START"});

        // since none of the libraries takes into account that we only want to track changes between objects of the same ID,
        // I'll have to implement some customized logic.
        let diff = [];
        oldChapterList.map(o => {
            let patchDoc = jsonPatch.compare(o, newChapterList.filter(n => n.id === o.id)[0]);
            let length = patchDoc.length;
            for (let i = 0; i < length; i++) {
                patchDoc[i].path = `/${o.treeIndex}` + patchDoc[i].path
            }
            return diff.push(...patchDoc);
        });

        return axios.patch(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters`, diff)
            .then(response => {
                dispatch({type: "PATCH_CHAPTERS_SUCCESS", payload: response.data})
            })
    }
}


export function updateChapterTitle(chapterId, newTitle) {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_CHAPTER_TITLE",
            payload: {chapterId: chapterId, newTitle: newTitle}
        })
    }
}


export function patchChapterTitle(courseId, chapterId, newTitle) {
    return (dispatch) => {
        dispatch({type: "PATCH_CHAPTER_TITLE_START"});
        let patchDoc = [{
            op: "replace",
            path: "/title",
            value: newTitle
        }];
        return axios.patch(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters/${chapterId}`, patchDoc)
            .then(response => {
                dispatch({type: "PATCH_CHAPTER_TITLE_SUCCESS", payload: response.data});
            })
    }
}


// GET Chapters from Database
export function fetchChapters(courseId) {
    return (dispatch) => {
        dispatch({type: "FETCH_CHAPTERS_START"});
        axios.get(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters/`)
        .then((response) => {
            dispatch({type: "FETCH_CHAPTERS_SUCCESS", payload: response.data});
        })
        .catch((error) => {
            dispatch({type: "FETCH_CHAPTERS_ERROR", payload: error});
        });
    }
}


// POST Chapters to Database
export function postChapter(courseId, treeIndex){
    let chapter = {
        title: '',
        parent: '00000000-0000-0000-0000-000000000000',
        treeIndex: treeIndex,
        courseId: courseId
    };
    return (dispatch) => {
        dispatch({type: "POST_CHAPTER_START"});
        return axios.post(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters/`, chapter)
            .then((response) => {
                dispatch({type: "POST_CHAPTER_SUCCESS", payload: response.data});
            }).catch((error) => {
                dispatch({type: "POST_CHAPTER_ERROR", payload: error});
            });
    }
}


// Update Single Chapter in Database
export function updateSingleChapter(s, courseId) {
    let chapter = {
        id: s.id,
        name: s.name,
        treeIndex: s.treeIndex,
        //size could be wrong
        size: s.size,
        parent: s.parent === null ? 0 : s.parent
    };
    return (dispatch) => {
        dispatch({type: "UPDATE_SINGLE_CHAPTER_START"});
        return axios.put(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters/${chapter.id}`, chapter)
            .then((response) => {
                dispatch({type: "UPDATE_SINGLE_CHAPTER_SUCCESS", payload: response.data});
            })
    }
}


// Update Multiple Chapters in Database
export function updateMultipleChapters(chapters, courseId){
    let mappedChapters = chapters.map(obj => {
        return {
            id: obj.id,
            //size could be wrong
            size: obj.size,
            name: obj.name,
            parent: obj.parent === null ? 0 : obj.parent,
            treeIndex: obj.treeIndex,
            // path: obj.path.toString(),
            // children: obj.node.children === undefined ? [] : JSON.stringify(obj.node.children),
            // children: JSON.stringify(obj.node.children) ===  undefined ? null : JSON.stringify(obj.node.children)
            // lowerSiblingCounts: obj.lowerSiblingCounts.toString()
        }
    });

    return (dispatch) => {
        dispatch({type: "UPDATE_MULTIPLE_CHAPTERS_START"});
        return axios.put(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters/`, mappedChapters)
        .then((response) => {
            dispatch({type: "UPDATE_MULTIPLE_CHAPTERS_SUCCESS", payload: response.data});
        })
    }
}


// Delete Chapters in Database
export function deleteChapter(courseId, chapterId, oldChapterList) {
    let newChapterList = [].concat(oldChapterList.map(ch => ({...ch})));
    return (dispatch) => {

        dispatch({type: "DELETE_CHAPTER_START"});

        newChapterList.map(ch => {
            if (ch.parent === chapterId) {
                ch.parent = "00000000-0000-0000-0000-000000000000";
                ch.treeIndex = ch.treeIndex-1;
            }
            return ch;
        });

        let diff = [];
        oldChapterList.map(o => {
            let patchDoc = jsonPatch.compare(o, newChapterList.filter(n => n.id === o.id)[0]);
            let length = patchDoc.length;
            for (let i = 0; i < length; i++) {
                patchDoc[i].path = `/${o.treeIndex}` + patchDoc[i].path
            }
            return diff.push(...patchDoc);
        });

        return axios.patch(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters`, diff)
            .then(response => {
                dispatch({type: "PATCH_CHAPTERS_SUCCESS", payload: response.data});
                axios.delete(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters/${chapterId}`)
                    .then((response) => {
                        dispatch({type: "DELETE_CHAPTER_SUCCESS", payload: chapterId});
                    })
                    .catch((error) => {
                        console.log("IS IT WORKING?");
                        dispatch({type: "DELETE_CHAPTER_ERROR", payload: error});
            });
        });
    }
}

export function updateSelectedChapter(chapterId) {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_SELECTED_CHAPTER",
            payload: chapterId
        })
    }
}


export function clearSelectedChapter() {
    return (dispatch) => {
        dispatch({
            type: "CLEAR_SELECTED_CHAPTER",
        })
    }
}


/*** SEARCH ***/
// searchFocusIndex
export const selectPrevMatch = () => ({
    type: 'CHAPTER_SEARCH_SELECT_PREV_MATCH',
});

export const selectNextMatch = () => ({
    type: 'CHAPTER_SEARCH_SELECT_NEXT_MATCH',
});

export const setSearchString = searchString => ({
    type: 'CHAPTER_SEARCH_SET_SEARCH_STRING',
    payload: searchString
});

export const finishSearchCallback = matches => ({
    type: 'CHAPTER_SEARCH_FINISH_CALLBACK',
    payload: matches
});


/*** TREE ***/
export const renderTree = chapters => ({
    type: 'RENDER_TREE',
    payload: getTreeFromFlatData({
        flatData: chapters,
        getKey: node => node.id, // resolve a node's key
        getParentKey: node => node.parent, // resolve a node's parent's key
        rootKey: null, // The value of the parent key when there is no parent (i.e., at root level)
    })
});


export function pConcept(conceptId) {
    return {
        type: "PICKED_CONCEPT",
        payload: conceptId
    }
}