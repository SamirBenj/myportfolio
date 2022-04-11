import React, { useState } from "react";
import NavBar from "../Components/navbar";
import '../styles/contact.css'
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com'
import { Alert } from "bootstrap";
import { AddAlert } from "@material-ui/icons";
init("user_a2FIt6ZPjMAAuyWMglKDe");

const ContactPage =()=>{

    const [mail, setEmail]= useState("");
    const [message, setMessage]=useState("");
    const templateParams = {
        name: 'contact',
        message:message,
        from_name:mail,

        
    };


    const sendMessage = ()=>{
        
    window.emailjs.send('service_2jl1xsl','template_vdnsipi', templateParams, 'hwenWsSoZ5xCclL1k','jello')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
           document.getElementById('alert').style.display='block';
        }, (err) => {
           console.log('FAILED...', err);
        });
    }
        // sendMessage();

    return(
        <div>
            <NavBar></NavBar>
            <div id="formContact">
                <form onSubmit={sendMessage}>
                    <h2>CONTACT FORM</h2>
                    <label style={{textAlign:'start'}}>First Name</label><br></br>
                    <input type={'text'} required></input>
                    <br></br>
                    
                    <label style={{textAlign:'start'}}>Your Mail</label><br></br>
                    <input required type={'text'} onChange={(val)=>setEmail(val.target.value)} ></input>
                    <br></br>
                    <label style={{textAlign:'start'}}>Your Message</label><br></br>
                    <input required style={{paddingBottom:'50px'}} type={'text'} onChange={(val)=>setMessage(val.target.value)} ></input>

                    <br></br>
                    <input id="validateButton" type={'submit'} value="VALIDER"></input>
                </form>
                <div style={{color:'green', fontSize:"20px", textAlign:'center', fontWeight:'bold', display:'none'}} id="alert">Mail Bien Envoyé</div>
            </div>

            
        </div>
    );
}

export default ContactPage