import '../styles/navbar.css'
import React, {useState, useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar =()=>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', changeWidth)
      return () => {
        window.removeEventListener('resize', changeWidth)
    }
    }, []);
  
    return (
      <div className="App">
        <p style={{
          marginLeft:'15px', 
          marginTop:'10px'
          }} 
          className="logoName">SB.</p>
      <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
        <Link className='link' to="/Home">
            <li className="items">Home</li>
        </Link>
        <Link  className='link' to="/Contact">
            <li className="items">Contact</li>
        </Link>
        <Link  className='link' to="/Projet">
            <li className="items">My Projects</li>
        </Link>
        <Link  className='link' to="/Resume">
            <li className="items">Resume</li>
        </Link>  
      </ul>
       )}
      <p onClick={toggleNav} id="myBtn" className='btn'><AiOutlineMenu color='white'></AiOutlineMenu></p>
      {/* <i color='red' className="fas fa-home"></i> */}
  
      </nav>
   
      </div>
    );
}

export default NavBar;