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
const [showSearch, setShowSearch] = useState(false); // note the S


const searchbar = () => {
  setShowSearch(prev => !prev)
}

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
         <span onClick={searchbar}><BiSearchAlt style={{fontSize: '25px', cursor: 'pointer'}} /></span>
        </div>
      </div>




     <div className="navwrapper" >
      <div className='icons' id='iconshere' onClick={() => {searchbar(); setShowSearch(false);}}>
       <span><FaXTwitter /></span>
       <span><FaFacebookF /></span>
       <span><FaInstagram /></span>
       <span><FaYoutube /></span>
       <span><FaTiktok /></span>
     </div>
     <div className='middle' onClick={() => {searchbar(); setShowSearch(false);}}>
      <img src={logo} alt="Logo" />
     </div>
     <div className='rightnav'>
      <span className='searbarhere' onClick={searchbar}><BiSearchAlt style={{fontSize: '23px',}} />Search</span>
      <a href=""><VscAccount style={{fontSize: '22px',}} onClick={() => {searchbar(); setShowSearch(false);}} /> Account</a>
      <a href=""><PiShoppingBagOpenLight style={{fontSize: '22px',}} onClick={() => {searchbar(); setShowSearch(false);}}/>  Cart 10</a>
      <a href=""><img src={heart} alt="Heart" style={{width: '20px',}} onClick={() => {searchbar(); setShowSearch(false);}} />  Wishlist 10</a>
     </div>
     </div>


{showSearch && (
       <div className="searchbar">
      
      <div className="sear">
        <input type="text" name="" id="" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
     </div>
)}

    </Nav>
  )
}



export default Navbar
