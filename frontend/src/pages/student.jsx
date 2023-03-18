import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { StudentsCard } from "../components/studentsCard";
import { getAllStudentsData } from "../redux/app/action";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Student = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store)=>store.appReducer);
    const {payload, isLoading, isError} = data;

    // useEffect-
    useEffect(()=>{
        dispatch(getAllStudentsData());
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
                    <h1 style={{textAlign:"center"}}>Students</h1>
                    <p>
                    <Link to={"/addmission"}><ion-icon name="add-circle-outline" id="create"></ion-icon></Link>
                    </p>
                </div>
                {
                    isLoading === false ? payload.map((students)=><StudentsCard key={students._id} students={students} isLoading={isLoading} />)
                : 
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50vh"}} ><h1 id="loader">Please Wait...</h1></div>
                }
            </div>
        </>
    )
}