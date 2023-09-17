import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";



function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://img.freepik.com/free-photo/airview-beauty-seascape-caribean-scene-generative-ai_188544-12595.jpg?w=1380&t=st=1694288544~exp=1694289144~hmac=eb3d4fd96763b0a98ec455ce3e1a06579273c114490b1c3dd35e51f3ebfcb592"
        title="Adventures Await, Begin Yours."
        text="Design Your Dream Vacation."
        buttonText="Explore More"
        url="/"
        btnClass="show"
        />

        <Destination/>
        <Trip/>
        
        <Footer/>
       
        


        </>
    )
}
export default Home;