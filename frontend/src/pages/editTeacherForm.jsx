import { useEffect, useState } from "react";
import "../style/addmissionForm.css";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import { Navbar } from "../components/navbar";
import { getAllTeachersData, getSingleTeachersData, updateTeacherData } from "../redux/app/teachers/action";

export const EditTeacherForm = ()=>{

    const {_id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // getting data-
    useEffect(()=>{
        dispatch(getSingleTeachersData(_id));
    }, [])

    // single teacher data with dispatch-
    const data = useSelector((store)=>store.teacherReducer);
    const {isLoading, singleTeacherData, isError} = data;

    // console.log(data);

    // student data-
    const {teacherName, teacherPhoto, teacherQualification, teacherAdhaarCard, dob, experience, fatherName, 
        motherName, address, mobileNumber1, mobileNumber2,
    } = singleTeacherData;

    // students-
    const [teacherNameEdit, setTeacherNameEdit] = useState("");
    const [dobEdit, setDobEdit] = useState("");
    const [teacherAdhaarCardEdit, setTeacherAdhaarCardEdit] = useState("");
    const [teacherQualificationEdit, setTeacherQualificationEdit] = useState("");
    const [experienceEdit, setExperienceEdit] = useState("");

    // parents-
    const [fatherNameEdit, setFatherNameEdit] = useState("");
    const [motherNameEdit, setMotherNameEdit] = useState("");
    const [mobileNumber1Edit, setMobileNumber1Edit] = useState("");
    const [mobileNumber2Edit, setMobileNumber2Edit] = useState("");
    const [addressEdit, setAddressEdit] = useState("");

    // form submit-
    const updateSubmitHandler = (e)=>{
        e.preventDefault(e)

        // payload-
        let payload = {
            teacherNameEdit : teacherNameEdit || teacherName,
            dobEdit : dobEdit || dob,
            teacherAdhaarCardEdit : teacherAdhaarCardEdit || teacherAdhaarCard,
            teacherQualificationEdit : teacherQualificationEdit || teacherQualification,
            experienceEdit : experienceEdit || experience,
            fatherNameEdit : fatherNameEdit || fatherName,
            motherNameEdit : motherNameEdit || motherName,
            mobileNumber1Edit : mobileNumber1Edit || mobileNumber1,
            mobileNumber2Edit : mobileNumber2Edit || mobileNumber2,
            addressEdit : addressEdit || address
        }
        dispatch(updateTeacherData(payload, _id)).then(()=>{
            dispatch(getAllTeachersData())
            alert("Successfully Updated");
            navigate("/teacher");
        });
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
                <h1>Edit Teacher Form</h1>
                <form id="addmission-form">
                    
                    {/* teacher details */}
                    <h3>Teacher's Details -</h3>
                    <div className="details">
                        <div>
                            <div className="image-select">
                                <img src={teacherPhoto} id="output" alt="" />
                                {/* <input type="file" accept="image/*" onChange={(e)=> {loadfile(e); setteacherPhotoEdit(e.target.files[0])}} /> */}
                            </div>
                            <div>
                                {/* teacher name */}
                                <div>
                                    <label>Name</label>
                                    <input type="text" placeholder="Type Teacher Name" value={teacherNameEdit || teacherName} onChange={(e)=>setTeacherNameEdit(e.target.value)} />
                                </div>

                                {/* teacher dob */}
                                <div>
                                    <label>Date Of Birth</label>
                                    <input type="date" value={dobEdit || dob} onChange={(e)=>setDobEdit(e.target.value)} />
                                </div>

                                {/* teacher adhaar card */}
                                <div>
                                    <label>Adhaar Card</label>
                                    <input type="tel" maxLength={12} value={teacherAdhaarCardEdit || teacherAdhaarCard} placeholder="Type Teacher's Adhaar Card" onChange={(e)=>setTeacherAdhaarCardEdit(e.target.value)} />
                                </div>

                                {/* qualification */}
                                <div>
                                    <label>Class</label>
                                    <select name="" value={teacherQualificationEdit || teacherQualification} onChange={(e)=>setTeacherQualificationEdit(e.target.value)}>
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

                                {/* experience */}
                                <div>
                                    <label>Experience</label>
                                    <input type="tel" maxLength={12} value={experienceEdit || experience} placeholder="Type Teacher's Adhaar Card" onChange={(e)=>setExperienceEdit(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* parents details */}
                    <div>
                        <h3>Parents Details -</h3>
                        <div>
                            <div id="parent-details">
                                {/* father name */}
                                <div>
                                    <label>Father's Name</label>
                                    <input type="text" value={fatherNameEdit || fatherName} placeholder="Type Father's Name" onChange={(e)=>setFatherNameEdit(e.target.value)} />
                                </div>

                                {/* mother name */}
                                <div>
                                    <label>Mother's Name</label>
                                    <input type="text" value={motherNameEdit || motherName} placeholder="Type Mother's Name" onChange={(e)=>setMotherNameEdit(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* addressEdit */}
                    <div>
                        <h3>Address & Contact -</h3>
                        <div>
                            <div id="address-contact-details">
                                {/* address */}
                                <div id="address">
                                    <label>Permanent Address</label>
                                    <textarea placeholder="Type Address" value={addressEdit || address} onChange={(e)=>setAddressEdit(e.target.value)} />
                                </div>

                                {/* mobile number 1 */}
                                <div>
                                    <label>Mobile Number 1</label>
                                    <input type="tel" maxLength={10} value={mobileNumber1Edit || mobileNumber1} placeholder="Type Mobile Number 1" onChange={(e)=>setMobileNumber1Edit(e.target.value)} />
                                </div>

                                {/* mobile number 2 */}
                                <div>
                                    <label>Mobile Number 2</label>
                                    <input type="tel" maxLength={10} value={mobileNumber2Edit || mobileNumber2} placeholder="Type Mobile Number 2" onChange={(e)=>setMobileNumber2Edit(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" id="form-btn" onClick={(e)=>updateSubmitHandler(e)} value={isLoading === true ? "Wait..." : "Update"} />
                </form>
            </div>
        </>
    )
}