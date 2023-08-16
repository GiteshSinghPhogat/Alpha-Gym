import Navbar from "../components/NavBar/Navbar";
import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";

function NoPage() {
    return (
        <>
            <Navbar />
            <Intro
                cName="intro"
                introImg="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="404: NO PAGE FOUND"
                btnClass="hide"
            />
            <Footer />
        </>
    )


}

export default NoPage;