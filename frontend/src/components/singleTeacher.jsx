import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import pdfIcon from "../Images/pdfLogo.png";
import srLogo from "../Images/SR_Logo.png";
import { Navbar } from "./navbar";
import { DeleteModal } from "./deleteModal";
import { deleteTeacherData, getAllTeachersData, getSingleTeachersData } from "../redux/app/teachers/action";

export const SingleTeacher = ()=>{
    const {_id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // getting data-
    useEffect(()=>{
        dispatch(getSingleTeachersData(_id));
    }, [])

    // single student data with dispatch-
    const data = useSelector((store)=>store.teacherReducer);
    const {isLoading, singleTeacherData} = data;

    const {teacherName, teacherPhoto, teacherQualification, teacherAdhaarCard, experience, dob, fatherName, 
        motherName, address, mobileNumber1, mobileNumber2,
        createdAt
    } = singleTeacherData;

    // pdf downlaod-
    const generatePdf = ()=>{
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#single-student-data"), {
            callback: function(pdf){
                pdf.save(`${teacherName}.pdf`)
            }
        })
    }

    // delete accessories-
    const deleteTeacherRecord = () =>{
        dispatch(deleteTeacherData(_id)).then(()=>{
            dispatch(getAllTeachersData())
            navigate("/teacher")
        })
    }

    var date = new Date(dob);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return(
        <>
            <Navbar/>
            <div>
                <div id="single-student-data">
                    <div id="single-student-data-top-section">
                        <div>
                            <div>
                                <img src={srLogo} alt="" />
                            </div>
                            <div>
                                <h2>SR Gurukul Academy</h2>
                                <p>The Best Kids School in Jajmau Kanpur</p>
                            </div>
                        </div>
                    </div>
                    {
                        isLoading === false ? 
                            <div>
                            <div id="single-student-details">
                                <div>
                                    <img src={teacherPhoto} alt="" />
                                </div>
                                <div>
                                    <h2>{teacherName}</h2>
                                    <p><span className="span-head">Qualification</span> - {teacherQualification}</p>
                                    <p><span className="span-head">Date of birth</span> - {day}/{month}/{year}</p>
                                    <p><span className="span-head">Aadhaar Card</span> - {teacherAdhaarCard}</p>
                                </div>
                            </div>

                            {/* Parents Details */}
                            <h3 style={{marginTop:"2rem"}}>Parents Details -</h3>
                            <div id="parents-details">
                                <div>
                                    <p><span className="span-head">Father's Name</span> - {fatherName}</p>
                                    <p><span className="span-head">Mother's Name</span> - {motherName}</p>
                                </div>
                            </div>

                            {/* Address */}
                            <h3 style={{marginTop:"2rem"}}>Address & Contact -</h3>
                            <div id="single-address-details">
                                <div>
                                    <p style={{width:"100%"}}> <span className="span-head">Address</span> - {address}</p>
                                </div>
                                <div>
                                    <p><span className="span-head">Mobile Number 1</span> - {mobileNumber1}</p>
                                    <p><span className="span-head">Mobile Number 2</span> - {mobileNumber2}</p>
                                </div>
                            </div>

                            {/* Experience */}
                            <h3 style={{marginTop:"2rem"}}>Experience -</h3>
                            <div id="single-address-details">
                                <div>
                                    <p style={{width:"100%"}}> <span className="span-head">Experience</span> - {experience}</p>
                                </div>
                            </div>
                            <h3 style={{marginTop:"2rem"}}>Submission date -</h3>
                            <div id="admission-date">
                                <p>{(createdAt !== "Date") ? createdAt : ""}</p>
                            </div>
                            </div>
                    :
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50vh"}} ><h1 id="loader">Please Wait...</h1></div>

                    }
                </div>
                <div id="single-student-info-section">
                    <div>
                        <Link to={`/edit/${_id}`}><ion-icon name="create-outline" x={"Hello"} ></ion-icon></Link>
                        <DeleteModal 
                            deleteFun={deleteTeacherRecord}
                            name={"teacher"}
                        />
                    </div>
                    <div id="pdf-download-btn">
                        <img src={pdfIcon} alt="pdf-icon" onClick={generatePdf} />
                    </div>
                </div>
            </div>
        </>
    );
}