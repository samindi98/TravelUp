import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About (){
    return(
        <>
        <Navbar/>
        <Hero
         cName="hero-about"
         heroImg="https://img.freepik.com/free-photo/bukhansan-mountains-is-covered-by-morning-fog-sunrise-bukhansan-national-park-seoul-south-korea_335224-305.jpg?w=1380&t=st=1694295818~exp=1694296418~hmac=60d53632d817e0e2e75e836c966df37b9ae5fe77fcf80bdcc834cfdefcebb69b"
         title="About Us"
        
        
         url="/"
         btnClass="shownone" 
        />
        <Aboutus/>
        <Footer/>

        
        </>
    )
}
export default About;