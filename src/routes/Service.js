import Navbar from "../components/NavBar/Navbar";
import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";
import Facility from "../components/Services/Facility";

function Service() {
    return (
        <>
            <Navbar />
            <Intro
                cName="intro-mid"
                introImg="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="Service"
                btnClass="hide"
            />
            <Facility />
            <Footer />
        </>
    )


}

export default Service;