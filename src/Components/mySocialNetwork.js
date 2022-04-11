import React from "react";
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import github from '../assets/github.png'

const MySocialNetworkBlock = ()=>{
    return (
        <section>
            <h2>YOU CAN FIND ME ON</h2>
            <ul className='listSocialNetwork'>
                <li>
                <img onClick={()=>window.location.href="https://www.linkedin.com/in/samir-benjalloul-026501195/"} src={linkedin} width={'100px'}/>
                
                </li>
                <li>
                <img onClick={()=>window.location.href="https://www.youtube.com/watch?v=uGjLV9320oA"} src={youtube} style={{paddingTop:'30px'}} width={'100px'}/>
                </li>
                <li>
                <img onClick={()=>window.location.href="https://github.com/SamirBenj"} src={github} style={{borderRadius:'50px'}} width={'100px'}/>

                </li>
            </ul>
        </section>
    );
}
export default MySocialNetworkBlock;