import "./Trip.css"
import TripData from "./TripData";
import trip1 from "../assets/trip1.jpg"
import trip2 from "../assets/trip6.jpg"
import trip3 from "../assets/trip5.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover uniqeu destination using Google maps.</p>
            <div className="tripcard">
                <TripData
                image={trip1}
                heading="Trip in Turkey"
                text="Planning a trip to Turkey? Here’s a quick guide to its beaches, cultural sites, shopping hubs and cruise destinations – precisely all the best places to visit in Turkey. Sometimes all we need is a vacation, away from the humdrum of city life, the constant buzz of social media and of course, the traffic! But it often gets difficult to choose a destination. If your heart says beach, your mind craves a rich historical site. It’s quite rare that you find a place with almost everything. Turkey is one such rare gem."

                
                />
                <TripData
                image={trip2}
                heading="Trip in Switzerland"
                text="Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned."
                
                
                />
                <TripData
                image={trip3}
                heading="Trip in Maldives"
                text="Unbeatable beaches, unmatched luxury and a very happening underwater world makes Maldives worth it all! Endowed with incredible beauty and splendor of nature. With 1200 islands and 26 atolls, this island country holds a great allure for tourists across the globe for its exotic islands, enthralling blue seas, shiny-sandy beaches, magnificent reefs, and a variety of water sports. Being an island country dominated by water sports, the tourism here is strictly relative to the dry weather conditions and hence the span of December to April is the best time to visit Maldives."
                
                
                />
            </div>
        </div>
    )
}
export default Trip;
