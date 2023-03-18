import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    getNotifyResponse: [],
    postNotifyResponse: {},
    deleteNotifyResponse: {},
    isError : false
}

// reducer function-
export const reducer = (state = initState, action) => {
    const {type, getNotifyResponse, postNotifyResponse, deleteNotifyResponse} = action;

    switch(type)
    {
        // get all notification-
        case types.GET_NOTIFICATIONS_REQUEST:
            return {...state, isLoading: true}

        case types.GET_NOTIFICATIONS_SUCCESS:
            return {...state, isLoading: false, getNotifyResponse}

        case types.GET_NOTIFICATIONS_ERROR:
            return {...state, isLoading: false, isError: true, getNotifyResponse}


        // post notification-
        case types.POST_NOTIFICATION_REQUEST:
            return {...state, isLoading: true}

        case types.POST_NOTIFICATION_SUCCESS:
            return {...state, isLoading: false, postNotifyResponse}

        case types.POST_NOTIFICATION_ERROR:
            return {...state, isLoading: false, isError: true, postNotifyResponse}


        // delete notification-
        case types.DELETE_NOTIFICATION_REQUEST:
            return {...state, isLoading: true}

        case types.DELETE_NOTIFICATION_SUCCESS:
            return {...state, isLoading: false, deleteNotifyResponse}

        case types.DELETE_NOTIFICATION_ERROR:
            return {...state, isLoading: false, isError: true, deleteNotifyResponse}


        default:
            return{...state}
    }
}