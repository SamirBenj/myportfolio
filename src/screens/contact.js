import React from "react";
import NavBar from "../Components/navbar";
import '../styles/contact.css'
const ContactPage =()=>{
    return(
        <div>
            <NavBar></NavBar>
            <div id="formContact">
                <form>
                    <h2>CONTACT FORM</h2>
                    <label style={{textAlign:'start'}}>First Name</label><br></br>
                    <input type={'text'}></input>
                    <br></br>
                    
                    <label style={{textAlign:'start'}}>First Name</label><br></br>
                    <input type={'text'}></input>
                    <br></br>
                    <label style={{textAlign:'start'}}>Your Message</label><br></br>
                    <input style={{paddingBottom:'50px'}} type={'text'}></input>

                    <br></br>
                    <input id="validateButton" type={'button'} value="VALIDER"></input>
                </form>
            </div>
            
        </div>
    );
}

export default ContactPage