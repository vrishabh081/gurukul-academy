import "../style/stu_teach_acce.css";
import {Link} from "react-router-dom";

export const StudentsCard = ({students}) => {
    const {_id, studentName, studentPhoto, dob, studentClass, fatherName, motherName} = students;

    // date of birth-
    var date = new Date(dob);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return(
        <div style={{margin:"0 1rem"}}>
            <Link to={`/student/${_id}`}>
                <div id="student-card">
                    <div id="student-photo">
                        <img src={studentPhoto} alt="" />
                    </div>
                    <div id="student-details">
                        <h2>{studentName}</h2>
                        <p><span className="span-head">Date of birth</span> - {day}/{month}/{year}</p>
                        <p><span className="span-head">Father's name</span> - {fatherName}</p>
                        <p><span className="span-head">Mother's name</span> - {motherName}</p>
                        <p><span className="span-head">Class</span> - {studentClass}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}