const mongoose = require("mongoose");

var x = new Date(new Date());
let date = x.toLocaleDateString();

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
        default: date
    }
})

// Model-
const TeacherFormModel = mongoose.model("teacher", teacherFormSchema);

module.exports = TeacherFormModel;