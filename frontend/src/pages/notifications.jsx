import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "../components/navbar"
import { NotificationCard } from "../components/notificationCard";
import { getNotifications } from "../redux/app/Notification/action";
import "../style/notifications.css"

export const Notifications = ()=>{
    // redux-
    const dispatch = useDispatch();
    const data = useSelector(store=>store.notifyReducer);
    // console.log(data);
    const {isLoading, isError, getNotifyResponse} = data;

    useEffect(()=>{
        dispatch(getNotifications());
    }, [])


    return(
        <>
            <Navbar/>
            <div style={{marginTop:"6rem"}} id="notification">
                <h1>Notifications</h1>
                {
                    isLoading === false ? 
                        getNotifyResponse.map((notification)=><NotificationCard key={notification._id} notification = {notification} />)
                    :
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50vh"}} ><h1 id="loader">Please Wait...</h1></div>
                }
            </div>
        </>
    )
}