import React from "react";
import '../styles/aboutBlock.css'
import headPro from '../assets/profilePicture.png'
const AboutMeBlock1 =()=> {
    return(
        <section className="gridBlock">
            <div className="parag1">
                <h1>Hi There ! 👋</h1>
                <h3> <span>I'M </span>SAMIR BENJALLOUL</h3>
            </div>
           <div className="myFace">
               <img src={headPro} width={'300px'} style={{marginTop:'-40px'}}/>
           </div>
        </section>
    );
}

export default AboutMeBlock1;