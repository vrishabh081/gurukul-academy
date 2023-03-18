import "../style/stu_teach_acce.css";
import {Link} from "react-router-dom";

export const TeachersCard = ({teachers}) => {
    const {_id, teacherName, teacherPhoto, teacherAdhaarCard, dob, teacherQualification} = teachers;

    // date of birth-
    var date = new Date(dob);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return(
        <div style={{margin:"0 1rem"}}>
            <Link to={`/teacher/${_id}`}>
                <div id="student-card">
                    <div id="student-photo">
                        <img src={teacherPhoto} alt="" />
                    </div>
                    <div id="student-details">
                        <h2>{teacherName}</h2>
                        <p><span className="span-head">Date of birth</span> - {day}/{month}/{year}</p>
                        <p><span className="span-head">Adhaar Card</span> - {teacherAdhaarCard}</p>
                        <p><span className="span-head">Qualification</span> - {teacherQualification}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}