import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import SR_Logo from "../Images/SR_Logo.png";
import { getNotifications } from "../redux/app/Notification/action";
import "../style/navabar.css";
import { SearchBox } from "./search";

export const Navbar = ()=>{
    // Accordian-
    const [isActive, setActive] = useState("false");
    const AccordianFun = () => {
        setActive(!isActive);
    };
    const navigate = useNavigate();

    // hamburger-
    const openSidebar = ()=>{
        document.querySelector(".sidebar").classList.add("open-sidebar")
        document.querySelector(".sidebar-body-background").classList.add("show-body-background");
    }

    const closeSidebar = ()=>{
        document.querySelector(".sidebar").classList.remove("open-sidebar");
        document.querySelector(".sidebar-body-background").classList.remove("show-body-background");
    }

    // sign out-
    const signOut = ()=>{
        localStorage.clear();
        alert("Successfully Logged Out");
        window.location.reload(true);
    } 

    // notification-count-
    // redux-
    const dispatch = useDispatch();
    const data = useSelector(store=>store.notifyReducer);
    // console.log(data);
    const {getNotifyResponse} = data;

    useEffect(()=>{
        dispatch(getNotifications());
    }, [])

    // console.log(getNotifyResponse);
    const notifyCount = getNotifyResponse.length || 0;
    // console.log(notifyCount)

    // private route-
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            return navigate("/")
        }
    }, [])

    // name-
    const Name = JSON.parse(localStorage.getItem("name")) || "Username";

    return(
        <div id="navbar-wrraper">
            {/* navbar */}
            <div id="main-navbar">
                <div id="navbar">
                    <div id="left-section">
                        <Link to={"/"}><img src={SR_Logo} alt="" /></Link>
                    </div>
                    <SearchBox/>
                    <div id="right-section">
                        <Link to="/"><ion-icon name="home-outline"></ion-icon></Link>
                        {
                            localStorage.getItem("token") && <Link to={"/notifications"} className="notification-count" ><ion-icon name="notifications-outline"></ion-icon> <span>{notifyCount}</span> </Link>
                        }
                        {
                            localStorage.getItem("token") !== null
                            ?
                            (<Link to="" onClick={signOut} style={{fontWeight:"600"}}><ion-icon name="log-out-outline"></ion-icon></Link>)
                            :
                            (<Link to="/auth/sign-in-email" style={{fontWeight:"600"}}><ion-icon name="log-in-outline"></ion-icon></Link>)
                        }
                    </div>
                    <div id="hamburger" onClick={openSidebar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {/* subnav bar */}
                {
                    localStorage.getItem("token") 
                    &&
                    <div id="subnav-bar">
                        <div>
                            <Link to="/student">Students</Link>
                        </div>
                        <div>
                            <Link to="/teacher">Teachers</Link>
                        </div>
                        <div>
                            <Link to="/accessories">Accessories</Link>
                        </div>
                        <div>
                            <Link to="">Results</Link>
                        </div>
                        <div>
                            <Link to="" style={{fontWeight:"600"}}>{Name}</Link>
                        </div>
                    </div>
                }
            </div>

            {/* sidebar */}
            <div className="sidebar">
                <div>
                    <div id="sidebar-logo">
                        <img src={SR_Logo} alt="" />
                        <p>{Name}</p>
                    </div>

                    {
                        localStorage.getItem("token")
                        &&
                        <p className="sidebar-nav" id="accordian" onClick={AccordianFun}>
                            <p>New</p>
                        </p>
                    }

                    {/* accordian */}
                    {
                        localStorage.getItem("token")
                        &&
                        <div className={isActive ? "inactiveAccordian" : "activeAccordian"}>
                            <p>
                                <Link to="/student">Students</Link>
                            </p>
                            <p>
                                <Link to="/teacher">Teachers</Link>
                            </p>
                            <p>
                                <Link to="/accessories">Accessories</Link>
                            </p>
                            <p>
                                <Link to="">Results</Link>
                            </p>
                        </div>
                    }
                    
                    <p className="sidebar-nav">
                        <Link to="/"><ion-icon name="home-outline"></ion-icon></Link>
                    </p>

                    {
                        localStorage.getItem("token")
                        &&
                        <p className="sidebar-nav">
                            <Link to={"/notifications"} className="notification-count" ><ion-icon name="notifications-outline"></ion-icon> <span>{notifyCount}</span> </Link>
                        </p>
                    }
                    
                    <p className="sidebar-nav">
                    {
                            localStorage.getItem("token") !== null
                            ?
                            (<Link to="" onClick={signOut} style={{fontWeight:"600"}}><ion-icon name="log-out-outline"></ion-icon></Link>)
                            :
                            (<Link to="/auth/sign-in-email" style={{fontWeight:"600"}}><ion-icon name="log-in-outline"></ion-icon></Link>)
                        }
                    </p>
                </div>
            </div>
            <div className="sidebar-body-background" onClick={closeSidebar}>
            </div>
        </div>
    )
}