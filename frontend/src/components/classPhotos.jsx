import classPic from "../Images/classPic/pic.png";
import classPic1 from "../Images/classPic/pic1.png";
import classPic2 from "../Images/classPic/pic2.png";
import classPic3 from "../Images/classPic/pic3.png";
import classPic4 from "../Images/classPic/pic4.png";
import classPic5 from "../Images/classPic/pic5.png";
import classPic6 from "../Images/classPic/pic6.png";
import classPic7 from "../Images/classPic/pic7.png";
import classPic8 from "../Images/classPic/pic8.png";
import classPic9 from "../Images/classPic/pic9.png";
import classPic10 from "../Images/classPic/pic10.png";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Photos = [
    {classPic : classPic},
    {classPic : classPic8},
    {classPic : classPic5},
    {classPic : classPic3},
    {classPic : classPic4},
    {classPic : classPic2},
    {classPic : classPic6},
    {classPic : classPic7},
    {classPic : classPic1},
    {classPic : classPic9},
    {classPic : classPic10},
]

export const ClassPhotos = ()=>{

    // useEffect-
    useEffect(()=>{
        AOS.init({duration: 1500})
    }, [])


    return(
        <>
            <div id="class-photo">
                {Photos.map(el=><div key={Math.random()} data-aos="flip-right">
                    <img src={el.classPic} alt="" />
                </div>)}
            </div>
        </>
    )
}