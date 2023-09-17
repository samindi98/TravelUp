import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assets/contact.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact (){
    return(
        <>
       
       <Navbar/>
       <Hero
       cName="hero-about"
       heroImg={contactImg}
       title=""
      
      
       url="/"
       btnClass="shownone" 
       />
       <ContactForm/>
       <Footer/>

        
        </>
    )
}
export default Contact;