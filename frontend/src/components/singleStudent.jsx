import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteStudentData, getAllStudentsData, getSingleStudentsData } from "../redux/app/action";
import jsPDF from "jspdf";
import pdfIcon from "../Images/pdfLogo.png";
import srLogo from "../Images/SR_Logo.png";
import { Navbar } from "./navbar";
import { DeleteModal } from "./deleteModal";

export const SingleStudent = ()=>{
    const {_id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // getting data-
    useEffect(()=>{
        dispatch(getSingleStudentsData(_id));
    }, [])

    // single student data with dispatch-
    const data = useSelector((store)=>store.appReducer);
    const {isLoading, singleStudentData, isError} = data;

    const {studentName, studentPhoto, studentClass, studentAdhaarCard, dob, fatherName, 
        motherName, parentAdhaarCard, parentOccupation, address, mobileNumber1, mobileNumber2,
        createdAt
    } = singleStudentData;

    // pdf downlaod-
    const generatePdf = ()=>{
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#single-student-data"), {
            callback: function(pdf){
                pdf.save(`${studentName}.pdf`)
            }
        })
    }

    // delete accessories-
    const deleteStudentRecord = () =>{
        dispatch(deleteStudentData(_id)).then(()=>{
            dispatch(getAllStudentsData())
            navigate("/student")
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
                                    <img src={studentPhoto} alt="" />
                                </div>
                                <div>
                                    <h2>{studentName}</h2>
                                    <p><span className="span-head">Class</span> - {studentClass}</p>
                                    <p><span className="span-head">Date of birth</span> - {day}/{month}/{year}</p>
                                    <p><span className="span-head">Student Aadhaar Card</span> - {studentAdhaarCard}</p>
                                </div>
                            </div>
                            <h3 style={{marginTop:"2rem"}}>Parents Details -</h3>
                            <div id="parents-details">
                                <div>
                                    <p><span className="span-head">Father's Name</span> - {fatherName}</p>
                                    <p><span className="span-head">Mother's Name</span> - {motherName}</p>
                                </div>
                                <div>
                                    <p><span className="span-head">Occupation</span> - {parentOccupation}</p>
                                    <p><span className="span-head">Parents Aadhaar Card</span> - {parentAdhaarCard}</p>
                                </div>
                            </div>
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
                            <h3 style={{marginTop:"2rem"}}>Addmission date -</h3>
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
                        <Link to={`/student/edit/${_id}`}><ion-icon name="create-outline" x={"Hello"} ></ion-icon></Link>
                        <DeleteModal 
                            deleteFun={deleteStudentRecord}
                            name={"student"}
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