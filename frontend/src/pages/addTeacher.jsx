import { useEffect, useState } from "react";
import "../style/addmissionForm.css";
import userPhoto from "../Images/userPhoto.png"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { Navbar } from "../components/navbar";
import { getAllTeachersData, postTeacherData } from "../redux/app/teachers/action";

export const TeacherForm = ()=>{
    const [loading, setLoading] = useState(false);

    // students-
    const [teacherName, setTeacherName] = useState("");
    const [dob, setDob] = useState("");
    const [teacherAdhaarCard, setTeacherAdhaarCard] = useState("");
    const [teacherPhoto, setTeacherPhoto] = useState("");
    const [teacherQualification, setTeacherQualification] = useState("");
    const [experience, setExperience] = useState("");
    const [mobileNumber1, setMobileNumber1] = useState("");
    const [mobileNumber2, setMobileNumber2] = useState("");
    const [address, setAddress] = useState("");

    // parents-
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");

    // redux and navigate-
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // private route-
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            return navigate("/auth/sign-in-email")
        }
    }, [])

    // preview image-
    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
          URL.revokeObjectURL(output.src); // free memory
        };
    };

    // form submit-
    const submitHandler = (e)=>{
        e.preventDefault(e)

        if(!teacherPhoto)
        {
            return alert("Please fill all the details");
        }
        else
        {
        // cloudinary-
            setLoading(true);
            const data = new FormData();
            data.append("file", teacherPhoto);
            data.append("upload_preset", "sr-gurukul-academy");
            data.append("cloud_name", "dmbla1pzw")
            axios
            .post("https://api.cloudinary.com/v1_1/dmbla1pzw/image/upload", data)
            .then(res=>{
                setLoading(false);
                if(res.data.url)
                {
                    // payload-
                    let payload = {
                        teacherName,
                        teacherPhoto: res.data.url,
                        dob,
                        teacherAdhaarCard,
                        teacherQualification,
                        experience,
                        fatherName,
                        motherName,
                        mobileNumber1,
                        mobileNumber2,
                        address
                    }
                    // add all details of a students-
                    dispatch(postTeacherData(payload)).then(()=>dispatch(getAllTeachersData()));
                    navigate("/teacher");
                }
            })
            .catch(err=>console.log(err))
        }
    }

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
                <div id="admission-form-main-div">
                <h1>Teacher Form</h1>
                <form id="addmission-form">
                    
                    {/* teacher details */}
                    <h3>Teacher's Details -</h3>
                    <div className="details">
                        <div>
                            <div className="image-select">
                                <img src={userPhoto} id="output" alt="" />
                                <input type="file" accept="image/*" onChange={(e)=> {loadfile(e); setTeacherPhoto(e.target.files[0])}} />
                            </div>
                            <div>
                                <div>
                                    <label>Name</label>
                                    <input type="text" placeholder="Type Teacher Name" onChange={(e)=>setTeacherName(e.target.value)} />
                                </div>
                                <div>
                                    <label>Date Of Birth</label>
                                    <input type="date" onChange={(e)=>setDob(e.target.value)} />
                                </div>
                                <div>
                                    <label>Adhaar Card</label>
                                    <input type="tel" maxLength={12} placeholder="Type Teacher's Adhaar Card" onChange={(e)=>setTeacherAdhaarCard(e.target.value)} />
                                </div>
                                <div>
                                    <label>Qualification</label>
                                    <select name="" onChange={(e)=>setTeacherQualification(e.target.value)}>
                                        <option value="">Qualification</option>
                                        <option value="12th">12th</option>
                                        <option value="B.A.">B.A.</option>
                                        <option value="B.Sc.">B.Sc.</option>
                                        <option value="B.Com.">B.Com.</option>
                                        <option value="B.Ed.">B.Ed.</option>
                                        <option value="B.Tech.">B.Tech.</option>
                                        <option value="M.A.">M.A.</option>
                                        <option value="M.Sc.">M.Sc.</option>
                                        <option value="M.Com.">M.Com.</option>
                                        <option value="M.Tech.">M.Tech.</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Experience</label>
                                    <input type="text" placeholder="Type Experience" onChange={(e)=>setExperience(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* parents details */}
                    <div>
                        <h3>Parents Details -</h3>
                        <div>
                            <div id="parent-details">
                                <div>
                                    <label>Father's Name</label>
                                    <input type="text" placeholder="Type Father's Name" onChange={(e)=>setFatherName(e.target.value)} />
                                </div>
                                <div>
                                    <label>Mother's Name</label>
                                    <input type="text" placeholder="Type Mother's Name" onChange={(e)=>setMotherName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* address */}
                    <div>
                        <h3>Address & Contact -</h3>
                        <div>
                            <div id="address-contact-details">
                                <div id="address">
                                    <label>Permanent Address</label>
                                    <textarea placeholder="Type Address" onChange={(e)=>setAddress(e.target.value)} />
                                </div>
                                <div>
                                    <label>Mobile Number 1</label>
                                    <input type="tel" maxLength={10} placeholder="Type Mobile Number 1" onChange={(e)=>setMobileNumber1(e.target.value)} />
                                </div>
                                <div>
                                    <label>Mobile Number 2</label>
                                    <input type="tel" maxLength={10} placeholder="Type Mobile Number 2" onChange={(e)=>setMobileNumber2(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="submit" id="form-btn" onClick={(e)=>submitHandler(e)} value={loading === true ? "Wait..." : "Submit"} />
                </form>
            </div>
        </>
    )
}