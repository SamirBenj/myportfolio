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
                <img src={linkedin} width={'50px'}/>
                
                </li>
                <li>
                <img src={youtube} style={{paddingTop:'10px'}} width={'100px'}/>
                </li>
                <li>
                <img src={github} style={{borderRadius:'50px'}} width={'80px'}/>

                </li>
            </ul>
        </section>
    );
}
export default MySocialNetworkBlock;