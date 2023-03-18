import axios from "axios";
import * as types from "./actionType";

// get all teachers data-
export const getAllTeachersData = ()=> (dispatch)=>{
    dispatch({type: types.GET_ALL_TEACHERS_REQUEST})
    return axios
        .get("https://sr-gurukul-academy-server.vercel.app/api/v1/teacher")
        .then(res=>{
            dispatch({type: types.GET_ALL_TEACHERS_SUCCESS, payload:res.data})
        })
        .catch(err=>{
            dispatch({type: types.GET_ALL_TEACHERS_ERROR})
        })
}

// get single teacher data-
export const getSingleTeachersData = (_id)=> (dispatch)=>{
    dispatch({type: types.GET_SINGLE_TEACHER_REQUEST})
    return axios
        .get(`https://sr-gurukul-academy-server.vercel.app/api/v1/teacher/${_id}`)
        .then(res=>{
            dispatch({type: types.GET_SINGLE_TEACHER_SUCCESS, singleTeacherData:res.data[0]})
        })
        .catch(err=>{
            dispatch({type: types.GET_SINGLE_TEACHER_ERROR})
        })
}

// add teacher data-
export const postTeacherData = (payload)=> (dispatch)=>{
    dispatch({type: types.POST_TEACHERS_REQUEST})
    return axios
        .post("https://sr-gurukul-academy-server.vercel.app/api/v1/teacher/addteacher", payload)
        .then(res=>{
            alert(res.data.message);
            dispatch({type: types.POST_TEACHERS_SUCCESS, postResponse: res.data})
        })
        .catch(err=>{
            alert(err.response.data.error)
            dispatch({type: types.POST_TEACHERS_ERROR, postResponse: err.response.data})
        })
}

// update teacher data-
export const updateTeacherData = (payload, _id)=> (dispatch)=>{
    dispatch({type: types.UPDATE_TEACHER_REQUEST})
    return axios
        .patch(`https://sr-gurukul-academy-server.vercel.app/api/v1/teacher/updateteacher/${_id}`, payload)
        .then(res=>{
            dispatch({type: types.UPDATE_TEACHER_SUCCESS, updateResponse: res.data})
        })
        .catch(err=>{
            dispatch({type: types.UPDATE_TEACHER_ERROR, updateResponse: err.response.data})
        })
}

// delete teacher data-
export const deleteTeacherData = (_id)=> (dispatch)=>{
    dispatch({type: types.DELETE_TEACHER_REQUEST})
    return axios
        .delete(`https://sr-gurukul-academy-server.vercel.app/api/v1/teacher/deleteteacher/${_id}`)
        .then(res=>{
            dispatch({type: types.DELETE_TEACHER_SUCCESS, deleteResponse: res.data})
        })
        .catch(err=>{
            dispatch({type: types.DELETE_TEACHER_ERROR, deleteResponse: err.response.data})
        })
}