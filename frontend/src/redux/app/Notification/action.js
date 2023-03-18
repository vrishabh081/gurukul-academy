import axios from "axios";
import * as types from "./actionType";


// get notifications-
export const getNotifications = ()=> (dispatch)=>{
    dispatch({type: types.GET_NOTIFICATIONS_REQUEST})
    return axios.get(`https://sr-gurukul-academy-server.vercel.app/api/v1/home/get-notification`)
            .then(res=>{
                // console.log(res.data)
                dispatch({type: types.GET_NOTIFICATIONS_SUCCESS, getNotifyResponse: res.data})
            })
            .catch(err=>{
                dispatch({type: types.GET_NOTIFICATIONS_ERROR, getNotifyResponse: err.response.data})
            })
}


// post notification-
export const postNotification = (payload)=> (dispatch)=>{
    dispatch({type: types.POST_NOTIFICATION_REQUEST})
    return axios.post(`https://sr-gurukul-academy-server.vercel.app/api/v1/home/post-notification`, payload)
            .then(res=>{
                dispatch({type: types.POST_NOTIFICATION_SUCCESS, postNotifyResponse: res.data})
                alert(res.data.message);
            })
            .catch(err=>{
                dispatch({type: types.POST_NOTIFICATION_ERROR, postNotifyResponse: err.response.data})
                alert(err.response.data.error);
            })
}


// delete notification-
export const deleteNotification = (_id)=> (dispatch)=>{
    // console.log(_id);
    dispatch({type: types.DELETE_NOTIFICATION_REQUEST})
    return axios
            .delete(`https://sr-gurukul-academy-server.vercel.app/api/v1/home/delete-notification/${_id}`)
            .then(res=>{
                dispatch({type: types.DELETE_NOTIFICATION_SUCCESS, deleteNotifyResponse: res.data})
            })
            .catch(err=>{
                alert(err.response.data.error);
                dispatch({type: types.DELETE_NOTIFICATION_ERROR, deleteNotifyResponse: err.response.data})
            })
}