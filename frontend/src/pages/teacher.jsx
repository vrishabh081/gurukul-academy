import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { TeachersCard } from "../components/teacherCard";
import { getAllTeachersData } from "../redux/app/teachers/action";

export const Teacher = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store)=>store.teacherReducer);
    const {payload, isLoading, isError} = data;

    // useEffect-
    useEffect(()=>{
        dispatch(getAllTeachersData());
    }, [])

    // private route-
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            return navigate("/")
        }
    }, [])

    return(
        <>
            <Navbar/>
            <div id="home">
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <h1 style={{textAlign:"center"}}>Teachers</h1>
                    <p>
                    <Link to={"/teacher-form"}><ion-icon name="add-circle-outline" id="create"></ion-icon></Link>
                    </p>
                </div>
                {
                    isLoading === false ? payload.map((teachers)=><TeachersCard key={teachers._id} teachers={teachers} isLoading={isLoading} />)
                : 
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50vh"}} ><h1 id="loader">Please Wait...</h1></div>
                }
            </div>
        </>
    )
}