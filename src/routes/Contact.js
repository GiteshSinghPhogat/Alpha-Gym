import Navbar from "../components/NavBar/Navbar";
import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";
import ContactFrom from "../components/contact form/ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Intro
                cName="intro-mid"
                introImg="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                title="Join Us"
                text="Start Your Own Story"
                btnClass="hide"
            />
            <ContactFrom />
            <Footer />
        </>
    )


}

export default Contact;