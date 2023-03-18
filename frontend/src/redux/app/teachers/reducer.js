import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    payload: [],
    singleTeacherData: {},
    updateResponse:{},
    postResponse: {},
    deleteResponse:{},
    isError : false
}

// reducer function-
export const reducer = (state = initState, action) => {
    const {type, payload, postResponse, singleTeacherData, updateResponse, deleteResponse} = action;

    switch(type)
    {
        // get all teachers data-
        case types.GET_ALL_TEACHERS_REQUEST:
            return {...state, isLoading: true}

        case types.GET_ALL_TEACHERS_SUCCESS:
            return {...state, isLoading: false, payload}

        case types.GET_ALL_TEACHERS_ERROR:
            return {...state, isLoading: false, isError: true, payload}


        // get single teacher data-
        case types.GET_SINGLE_TEACHER_REQUEST:
            return {...state, isLoading: true}

        case types.GET_SINGLE_TEACHER_SUCCESS:
            return {...state, isLoading: false, singleTeacherData}

        case types.GET_SINGLE_TEACHER_ERROR:
            return {...state, isLoading: false, isError: true, singleTeacherData}


        // post teacher data-
        case types.POST_TEACHERS_REQUEST:
            return {...state, isLoading: true}

        case types.POST_TEACHERS_SUCCESS:
            return {...state, isLoading: false, postResponse}

        case types.POST_TEACHERS_ERROR:
            return {...state, isLoading: false, isError: true, postResponse}


        // update teacher data-
        case types.UPDATE_TEACHER_REQUEST:
            return {...state, isLoading: true}

        case types.UPDATE_TEACHER_SUCCESS:
            return {...state, isLoading: false, updateResponse}

        case types.UPDATE_TEACHER_ERROR:
            return {...state, isLoading: false, isError: true, updateResponse}


        // delete teacher data-
        case types.DELETE_TEACHER_REQUEST:
            return {...state, isLoading: true}

        case types.DELETE_TEACHER_SUCCESS:
            return {...state, isLoading: false, deleteResponse}

        case types.DELETE_TEACHER_ERROR:
            return {...state, isLoading: false, isError: true, deleteResponse}


        default:
            return{...state}
    }
}