import { useDispatch } from "react-redux"
import { deleteNotification, getNotifications } from "../redux/app/Notification/action"

export const NotificationCard = ({notification})=>{

    const {_id, name, phone, email, address, about, date} = notification

    // redux-
    const dispatch = useDispatch();

    // delete notification-
    const deleteNotify = (_id)=>{
        dispatch(deleteNotification(_id)).then(()=>dispatch(getNotifications()))
    }


    return (
        <>
            <div>
                <div>
                    <p><span>Name</span> - {name}</p>
                    <ion-icon name="trash-outline" onClick = {()=>{deleteNotify(_id)}}></ion-icon>
                </div>
                <div>
                    <p><span className="span-head">Phone</span> - {phone}</p>
                </div>
                <div>
                    <p><span className="span-head">Email</span> - {email}</p>
                </div>
                <div>
                    <p><span className="span-head">Address</span> - {address}</p>
                </div>
                <div>
                    <p><span className="span-head">About</span> - {about}</p>
                </div>
                <div>
                    <p><span className="span-head">Date</span> - {date}</p>
                </div>
            </div>
        </>
    )
}