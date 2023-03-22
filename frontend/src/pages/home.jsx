import { useEffect } from "react"
import { Navbar } from "../components/navbar";
import { Typewriter } from 'react-simple-typewriter'
import "../style/home.css";
import sirPhoto from "../Images/sir_photo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../Images/sr_gurukul_icon_2.jpg";
import Card1 from "../Images/sr_gurukul_icon_4.jpg";
import Card2 from "../Images/sr_gurukul_icon_5.jpg";
import { ClassPhotos } from "../components/classPhotos";
import { ContactUs } from "../components/contactUs";

// array of sir details-
const sirArray = [
    {
        id: 1,
        name: "RC Pandey",
        photo: sirPhoto,
        exp: "20 Years of teaching in Oxford School",
        subject: "English",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, inventore! Quo tenetur eius repudiandae, quae ipsum perspiciatis officia dolor modi cumque distinctio animi deleniti natus sit, vitae error repellat! Quasi.",
    },
    {
        id: 2,
        name: "Raju Pandey",
        photo: sirPhoto,
        exp: "12 Years of teaching in Oxford School",
        subject: "Maths",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, inventore! Quo tenetur eius repudiandae, quae ipsum perspiciatis officia dolor modi cumque distinctio animi deleniti natus sit, vitae error repellat! Quasi.",
    },
    {
        id: 3,
        name: "Rajeev Pandey",
        photo: sirPhoto,
        exp: "10 Years of teaching in Oxford School",
        subject: "Physics",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, inventore! Quo tenetur eius repudiandae, quae ipsum perspiciatis officia dolor modi cumque distinctio animi deleniti natus sit, vitae error repellat! Quasi.",
    }
]

export const Home = ()=>{
    // useEffect-
    useEffect(()=>{
        AOS.init({duration: 1500})
    }, [])


    return(
        <>
            <Navbar/>
            <div id="home">
                <h1 className="home-page-heading">SR Gurukul Academy</h1>

                <div id="banner">
                    <img src={Banner} alt="banner" />
                </div>

                {/* All Sir */}
                <div id="sir">
                    <h1 className="home-page-heading">Meet Our Team</h1>
                    {
                        sirArray.map(el=>
                        <div id="sir-section" key={el.id} data-aos="fade-down-left">
                            <div>
                                <img src={el.photo} alt={el.name} />
                            </div>
                            <div>
                                <p className="typewriter">
                                    <span className="sir-name">Hii, I am </span> <span><Typewriter words={[el.name]} loop={false} delaySpeed={5000} /></span>
                                </p>
                                <p>
                                    <span className="info-title">Experience</span> - <span>{el.exp}</span>
                                </p>
                                <p>
                                    <span className="info-title">Subject</span> - <span>{el.subject}</span>
                                </p>
                                <p>
                                <span className="info-title">About</span> - <span>{el.about}</span>
                                </p>
                            </div>
                        </div>
                    )
                }
                </div>

                {/* Cards */}
                <div id="card">
                    <div data-aos="slide-left">
                        <img src={Card1} alt="" />
                    </div>
                    <div data-aos="slide-right">
                        <img src={Card2} alt="" />
                    </div>
                </div>

                {/* Our Classes */}
                <div id="classes">
                    <h1>Our Classes Pics</h1>
                    <ClassPhotos/>
                </div>

                {/* Contact Us */}
                <div id="contact-us">
                    <h1>Contact Us</h1>
                    <ContactUs/>
                </div>
            </div>
            <div id="fix-contact-options">
                <a href="tel:+919794494076">
                    <ion-icon name="call-outline"></ion-icon>
                </a>
                <a href="https://wa.me/917054402218">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
            </div>
        </>
    )
}