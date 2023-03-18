import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications, postNotification } from "../redux/app/Notification/action";

export const ContactUs = ()=>{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [about, setAbout] = useState("");

    // redux-
    const dispatch = useDispatch();
    const data = useSelector(store=>store.notifyReducer);
    const {isLoading} = data;

    const submitForm = ()=>{
        let payload = {name, phone, email, address, about};
        dispatch(postNotification(payload)).then(()=>dispatch(getNotifications()));
    }

    // useEffect-
    useEffect(()=>{
        AOS.init({duration: 1500})
    }, [])


    return(
        <div data-aos="flip-down">
            <div>
                <div>
                    <div id="contact-form">
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Mobile Number</label>
                            <input type="tel" maxLength={10} placeholder="Your Mobile Number" required onChange={(e)=>setPhone(e.target.value)} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="Your Email Address" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>Address</label>
                            <input type="text" placeholder="Permanent Address" onChange={(e)=>setAddress(e.target.value)} />
                        </div>
                        <div>
                            <label>About</label>
                            <textarea cols="30" rows="10" placeholder="Write Something ..." onChange={(e)=>setAbout(e.target.value)}></textarea>
                        </div>
                        <div>
                            <button onClick={submitForm}>{isLoading === true ? "Wait..." : "Submit"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}