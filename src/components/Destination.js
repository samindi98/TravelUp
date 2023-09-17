import "./Destination.css"
import DestinationData from "./DestinationData";

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Travel is a shared human experience that transcends borders and enriches lives. </p>

        <DestinationData className="first-des"
        heading="Cheow Larn Lake, Wat Arun Temple"
        text="Sitting in the heart of Khao Sok National Park, magnificent Cheow Larn Lake is one of the most beautiful locations in Thailand. Ringed by jungle-clad mountains and with vertiginous limestone karsts and submerged trees breaking the surface of the water, it’s a spectacular place to visit. Almost amazing as the scenery is the fact that this massive lake in southern Thailand didn’t exist prior to the 1980s."
        img1="https://img.freepik.com/free-photo/beautiful-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-851.jpg?size=626&ext=jpg&uid=R82634072&ga=GA1.2.2146957971.1691182558&semt=ais"
        img2="https://img.freepik.com/free-photo/wat-arun-temple-twilight-bangkok-thailand_335224-772.jpg?w=996&t=st=1694339881~exp=1694340481~hmac=7329a491977f946f65700285dc5352e1e7242c2c2ed924e2fdfa832296d1fc13"
       
        />

<DestinationData className="first-des-reverse"
        heading="Tirta Gangga Water Palace, Handara Gate"
        text="It's become a must-visit place among tourists and photography lover. Handara Gate is actually the entrance to a golf resort. The traditional Hindu gate symbolises the entrance from the outer world to the temple, or in this case, golf course, and plays an important role in Indonesian culture, particularly in Bali."
        img1="https://img.freepik.com/free-photo/woman-feeding-colorful-fish-pond-tirta-gangga-water-palace-bali-indonesia_335224-360.jpg?w=996&t=st=1694332754~exp=1694333354~hmac=6cbbd50dd6a4a3357339b986f47e0b0eb2bf39cc4931ffc76d1c497a7df81201"
        img2="https://img.freepik.com/free-photo/big-entrance-gate-bali-indonesia_335224-376.jpg?size=626&ext=jpg&uid=R82634072&ga=GA1.2.2146957971.1691182558&semt=sph"
        />
        </div>

    )
}
export default Destination;