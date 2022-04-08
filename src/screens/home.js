import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import NavBar from '../Components/navbar';
import AboutMeBlock1 from '../Components/AboutBlock1';
import AboutMeBlock2 from '../Components/AboutBlock2';
import MySocialNetworkBlock from '../Components/mySocialNetwork';
import Footer from '../Components/Footer';

const Home = ()=>{
    return (
        <>
         <div>
             <NavBar></NavBar>
        <AboutMeBlock1></AboutMeBlock1>
        <AboutMeBlock2></AboutMeBlock2>
        <MySocialNetworkBlock></MySocialNetworkBlock>
        <Footer></Footer>
        </div>
        </>
       
       
    );
}
export default Home;