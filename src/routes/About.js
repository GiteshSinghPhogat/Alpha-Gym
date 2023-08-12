import Navbar from "../components/NavBar/Navbar";
import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";

function About() {
    return (
        <>
            <Navbar />
            <Intro
                cName="intro-mid"
                introImg="https://plus.unsplash.com/premium_photo-1664109999781-27f77214bcfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="About"
                btnClass="hide"
            />
            <Footer />
        </>
    )


}

export default About;