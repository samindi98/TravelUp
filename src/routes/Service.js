import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import serviceImg from "../assets/services.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-about"
       
        heroImg={serviceImg}
        title="Services"
       
       
        url="/"
        btnClass="shownone"  
        />
        <Trip/>



        <Footer/>

        
        </>
    )
}
export default Service;