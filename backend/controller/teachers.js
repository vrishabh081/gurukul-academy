const TeacherFormModel = require("../model/teachers");

// get all teachers-
const getAllTeachers = async(req, res)=>{
    try
    {
        let query = {};
        if(req.query.keyword)
        {
            query.$or = [
                {"studentClass": {$regex: req.query.keyword, $options: "i"}},
                {"studentName": {$regex: req.query.keyword, $options: "i"}}
            ]
        }

        const allTeachers = await TeacherFormModel.find(query)
        console.log("All Teachers");
        // console.log(req.query);
        return res.json(allTeachers);
    }
    catch(error)
    {
        console.log(error);
        return res.json({error: "OOP's somthing went wrong"})
    }
}

// get single teacher-
const getSingleTeacher = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        const singleTeacher = await TeacherFormModel.find({_id});
        console.log("Single Teacher");
        res.json(singleTeacher);
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's somthing went wrong"})
    }
}


// submit form and take details of teacher-
const takeTeacherDetails = (req, res)=>{
    const payload = req.body;
    const {
        teacherName,
        dob, 
        teacherQualification,
        teacherPhoto
    } = req.body;

    if(!teacherName || !dob || !teacherQualification || !teacherPhoto)
    {
        return res.status(422).json({error: "Please fill all details"});   
    }
    
    // check if student's details are already in database-
    TeacherFormModel.findOne({$and: [{teacherPhoto}]})
    .then((existingTeacher)=>{
        if(existingTeacher)
        {
            return (res.status(401).json({error: "This teacher details already exist"}));
        }
        else
        {
            const data = new TeacherFormModel(payload);
            data.save();
            console.log("Teacher details saved");
            return (res.status(201).json({message: "Teacher details saved"}));
        }
    })
    .catch(err=>{
        console.error(err);
        res.status(401).json({error: "Teacher details not saved"});
    })
}


// update teacher details-
const updateTeacherDetails = async(req, res)=>{
    const {
        teacherNameEdit,
        teacherPhotoEdit,
        dobEdit,
        teacherAdhaarCardEdit,
        fatherNameEdit,
        motherNameEdit,
        mobileNumber1Edit,
        mobileNumber2Edit,
        addressEdit
    } = req.body;

    const {_id} = req.params;
    try
    {
        await TeacherFormModel.findByIdAndUpdate({_id}, {
            teacherName: teacherNameEdit,
            teacherPhoto: teacherPhotoEdit,
            dob: dobEdit,
            teacherAdhaarCard: teacherAdhaarCardEdit,
            fatherName: fatherNameEdit,
            motherName: motherNameEdit,
            mobileNumber1: mobileNumber1Edit,
            mobileNumber2: mobileNumber2Edit,
            address: addressEdit
        })
        console.log("Successfully updated");
        res.json({message: "Successfully updated"})
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's data not updated"})
    }
}


// delete teacher details-
const deleteTeacherDetails = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        await TeacherFormModel.findByIdAndDelete({_id})
        console.log("Successfully deleted");
        res.json({message: "Successfully deleted"})
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's data not deleted"})
    }
}
module.exports = {getSingleTeacher, getAllTeachers, takeTeacherDetails, updateTeacherDetails, deleteTeacherDetails}