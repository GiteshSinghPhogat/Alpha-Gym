import Navbar from "../components/NavBar/Navbar";
import Intro from "../components/Intro/Intro";
import Program from "../components/Program/Program";
import Footer from "../components/Footer/Footer";
import Trainer from "../components/Trainer/Trainer";

function Home() {
    return (
        <>
            <Navbar />
            <Intro
                cName="intro"
                introImg="https://images.unsplash.com/photo-1638805981949-362f5964521e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                title="Your Journey Your Story"
                text="Write Your Own Story"
                btnText="JOIN NOW"
                url="/contact"
                btnClass="show"
            />
            <Program />
            <Trainer />
            <Footer />
        </>
    )


}

export default Home;