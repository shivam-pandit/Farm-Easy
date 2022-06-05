import { useContext } from "react";
import { authContext } from "../AuthProvider";
import BestSeller from "./BestSeller";
import Category from "./Category";
import Herosection from "./herosection";
import NewArrivel from "./NewArrivel";
import WhyUs from "./WhyUs";



let Home = ()=>{

    let user = useContext(authContext);
    console.log("home",user);

    return(
        <section>

            <Herosection/>
            <div className="marqueeWrapper" style={{display:"flex", justifyContent:"center", fontWeight:"600", fontSize:"13px", padding:"2px 0px"}}>

            <marquee direction="left" height="" width="100%" bgcolor="white" ><span style={{color:"red"}}>Beware of Fraud:</span>Currently, we are not accepting any request for franchisee stores. Hence, do not trust anyone offering such facility and seeking money in our name.</marquee>
            </div>
            <BestSeller/>
            <NewArrivel/>
            <Category/>
            <WhyUs/>
            
        </section>
    )
}

export default Home;