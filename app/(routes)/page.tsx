
import Navbar from "@/app/_components/navbarComponents/Navbar";
import "./style.css"
import Member from "@/app/_components/memberComponents/Member";
import pf1 from "@/app/_images/profil1.jpg"
const HomePage = () => {
    return ( 
        <div className="content">
            <Navbar/>
            <div className="banner " data-aos="fade-down">
                <span className="sp1">PROJECT BY <span className="sp2">PBLRKS 301</span></span>
            </div>
            <div className="text-member">
                Our Member
            </div>

            <Member name="Thoriq" img={pf1} reverse={false}/>
            <Member name="Rasyad" img={pf1} reverse={true}/>
            <Member name="Syauqi" img={pf1} reverse={false}/>
            <Member name="Chintya" img={pf1} reverse={true}/>
            <Member name="Balqis" img={pf1} reverse={false}/>
            <Member name="Cecilia" img={pf1} reverse={true}/>

            <div  className="sm:footer " >
                &copy; PBLRKS-301 All Rights Reserved.
            </div>
        </div>
    );
}
 
export default HomePage;