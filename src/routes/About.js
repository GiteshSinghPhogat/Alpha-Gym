import Navbar from "../components/NavBar/Navbar";
import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";

function About() {
    return (
        <>
            <Navbar />
            <Intro
                cName="intro-mid"
                introImg="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
                title="About"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )


}

export default About;