const mongoose = require("mongoose");

let currentTime = new Date();
    let currentDate = currentTime.getDate();
    let currentMonth = currentTime.getMonth() + 1;
    let currentYear = currentTime.getFullYear();

    let x = (`${currentDate}/${currentMonth}/${currentYear}`)

// Schema-
const teacherFormSchema = mongoose.Schema({
    teacherName: {type: String},
    teacherPhoto: {type: String},
    dob: {type: String},
    teacherAdhaarCard: {type: String},
    teacherQualification: {type: String},
    experience: {type: String},
    fatherName: {type: String},
    motherName: {type: String},
    mobileNumber1: {type: String},
    mobileNumber2: {type: String},
    address: {type: String},
    createdAt: {
        type: String,
        default: x,
    }
})

// Model-
const TeacherFormModel = mongoose.model("teacher", teacherFormSchema);

module.exports = TeacherFormModel;