import "../style/stu_teach_acce.css";
import userPhoto from "../Images/userPhoto.png"
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { deleteAccessoreis, getAccessoreis } from "../redux/app/accessories/action";
import { DeleteModal } from "./deleteModal";

export const AccessoriesCard = ({accessories}) => {
    const {
        _id, 
        accessoriesName, 
        accessoriesPhoto, 
        accessoriesPrice, 
        accessoriesAbout, 
        createdAt
    } = accessories;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // delete accessories-
    const deleteAccessoriesRecord = () =>{
        dispatch(deleteAccessoreis(_id)).then(()=>dispatch(getAccessoreis()))
    }
    
    return(
        <div style={{margin:"0 1rem"}}>
             <div id="student-card">
                    <div id="student-photo">
                        <img src={accessoriesPhoto || userPhoto} alt="" />
                    </div>
                    <div id="student-details">
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"0 1rem"}}>
                            <h2>{accessoriesName}</h2>
                            {/* <DeleteAccessoriesRecord deleteAccessoriesRecord={deleteAccessoriesRecord}/> */}
                            <DeleteModal 
                                deleteFun={deleteAccessoriesRecord}
                                name={"accessories"}
                            />
                        </div>
                        <p>Price - {accessoriesPrice}</p>
                        <p>About - {accessoriesAbout}</p>
                        <p>Created At - {createdAt}</p>
                    </div>
                </div>   
        </div>
    )
}