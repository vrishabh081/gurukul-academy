const mongoose = require("mongoose");

let currentTime = new Date();
    let currentDate = currentTime.getDate();
    let currentMonth = currentTime.getMonth() + 1;
    let currentYear = currentTime.getFullYear();

    let x = (`${currentDate}/${currentMonth}/${currentYear}`)

// Schema-
const studentFormSchema = mongoose.Schema({
    studentName: {type: String},
    studentPhoto: {type: String},
    dob: {type: String},
    studentAdhaarCard: {type: String},
    studentClass: {type: String},
    fatherName: {type: String},
    motherName: {type: String},
    parentPhoto: {type: String},
    parentAdhaarCard: {type: String},
    parentOccupation: {type: String},
    mobileNumber1: {type: String},
    mobileNumber2: {type: String},
    address: {type: String},
    createdAt: {
        type: String,
        default: x
    }
})

// Model-
const StudentFormModel = mongoose.model("student", studentFormSchema);

module.exports = StudentFormModel;