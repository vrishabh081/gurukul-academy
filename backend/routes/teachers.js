const express = require("express");
const { getAllTeachers, getSingleTeacher, takeTeacherDetails, updateTeacherDetails, deleteTeacherDetails } = require("../controller/teachers");
const teacherRoutes = express.Router();

// routes-
teacherRoutes.get("/", getAllTeachers)
teacherRoutes.get("/:_id", getSingleTeacher);
teacherRoutes.post("/addteacher", takeTeacherDetails);
teacherRoutes.patch("/updateteacher/:_id", updateTeacherDetails);
teacherRoutes.delete("/deleteteacher/:_id", deleteTeacherDetails)

module.exports = teacherRoutes;