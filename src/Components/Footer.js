import React from "react";
import "../styles/aboutBlock.css"

const Footer = ()=>{
    return (
        <footer style={{textAlign:'center',marginTop:'20px'}} className='gridBlock'>
            <div> 
                <ul className="footerList">
                    <li>Designed By Samir BENJALLOUL</li>
                </ul>
            </div>

            <div>
                <ul className="copyRight">
                        <li>Copyright © 2022 BS</li>
                </ul>
            </div>       
                
           

           
        </footer>
    );
}

export default Footer;