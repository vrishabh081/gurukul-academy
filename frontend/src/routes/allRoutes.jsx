import {Routes, Route} from "react-router-dom";
import { AddAccesories } from "../components/addAccessories";
import { SingleStudent } from "../components/singleStudent";
import { SingleTeacher } from "../components/singleTeacher";
import { Accessories } from "../pages/accessories";
import { AddmissionForm } from "../pages/addmissionForm";
import { TeacherForm } from "../pages/addTeacher";
import { EditAddmissionForm } from "../pages/editAddmissionForm";
import { ForgetPassword } from "../pages/forgetPassword";
import { Home } from "../pages/home";
import { Notifications } from "../pages/notifications";
import { Otp } from "../pages/otp";
import { SignInWithEmail } from "../pages/signInWithEmail";
import { Student } from "../pages/student";
import { Teacher } from "../pages/teacher";

export const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path={"/"} element = {<Home/>} />
            {/* students */}
            <Route path={"/student"} element = {<Student/>} />
            <Route path={"/student/:_id"} element = {<SingleStudent/>} />
            <Route path={"/addmission"} element = {<AddmissionForm/>} />
            <Route path={"/edit/:_id"} element = {<EditAddmissionForm/>} />
            
            {/* teachers */}
            <Route path={"/teacher"} element = {<Teacher/>} />
            <Route path={"/teacher/:_id"} element = {<SingleTeacher/>} />
            <Route path={"/teacher-form"} element = {<TeacherForm/>} />

            <Route path={"/accessories"} element = {<Accessories/>} />
            <Route path={"/add-accessories"} element = {<AddAccesories/>} />
            <Route path={"/auth/sign-in-email"} element = {<SignInWithEmail/>} />
            <Route path={"/auth/verify-otp"} element = {<Otp/>} />
            <Route path={"/auth/forget-password"} element = {<ForgetPassword/>} />
            <Route path={"/notifications"} element = {<Notifications/>} />
        </Routes>
    )
}