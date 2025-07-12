import React, { useState } from 'react'
import { Nav } from './styles'
import logo from '../assets/icons/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok} from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import heart from '../assets/icons/heart.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const Navbar = () => {

const [menuBar, setMenuBar] = useState(false);

  const Menubar = () => {
   setMenuBar(prev => !prev)
  }


  return (
    <Nav>
    {menuBar && (

         <div className="lefdrop" onClick={Menubar}>
        <div className="cloasdiv">
          <span style={{fontSize: '20px'}}>Close</span>
          <span><IoClose style={{fontSize: '25px'}} /></span>
        </div>
             <ul>
               <li>Home <IoIosArrowDown /></li>
               <li>Shops <IoIosArrowDown /></li>
               <li>Product <IoIosArrowDown /></li>
               <li>Collections <IoIosArrowDown /></li>
               <li>Pages <IoIosArrowDown /></li>
               <li>Blog <IoIosArrowDown /></li>
               <li>Contact Us</li>
             </ul> 
        <div className='icons'>
       <span><FaXTwitter /></span>
       <span><FaFacebookF /></span>
       <span><FaInstagram /></span>
       <span><FaYoutube /></span>
       <span><FaTiktok /></span>
     </div>
      </div>
    )}

      <div className="mobileview">
        <div className="menuebar" onClick={Menubar}>
         <span><AiOutlineMenu style={{fontSize: '20px', cursor: 'pointer'}} /></span>
        </div>

       <div className="logo">
        <img src={logo} alt="Logo" />
       </div>

        <div className="searchicon">
         <span><BiSearchAlt style={{fontSize: '25px', cursor: 'pointer'}} /></span>
        </div>
      </div>




     <div className="navwrapper">
      <div className='icons'>
       <span><FaXTwitter /></span>
       <span><FaFacebookF /></span>
       <span><FaInstagram /></span>
       <span><FaYoutube /></span>
       <span><FaTiktok /></span>
     </div>
     <div className='middle'>
      <img src={logo} alt="Logo" />
     </div>
     <div className='rightnav'>
      <a href=""><BiSearchAlt style={{fontSize: '23px',}} />Search</a>
      <a href=""><VscAccount style={{fontSize: '22px',}} /> Account</a>
      <a href=""><PiShoppingBagOpenLight style={{fontSize: '22px',}} />  Cart</a>
      <a href=""><img src={heart} alt="Heart" style={{width: '20px',}} />  Wishlist</a>
     </div>
     </div>
    </Nav>
  )
}



export default Navbar
