import React from "react";
import '../styles/cardPro.css'
// import {covidInOne} from '../assets/covidInOne.jpg'
// import NewsAppImg from '../assets/projectImage/NewsAppImg.png';
const CardProject = (props)=>{
    var data = props.data;
    // console.log(data)
    return(
        <div className="cardProject" id={data.class} onClick={()=>window.location.href=`${data.link}`}>
           <img src={`${process.env.PUBLIC_URL}/assets/projectImage/${data.imageLink}`}/>
           <h3>{data.nom}</h3>
           
        </div>
    );   
}

export default CardProject;
 