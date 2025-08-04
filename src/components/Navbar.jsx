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



const Navbar = ({cartCount, showSearch, setShowSearch, handleShowCart}) => {

const [menuBar, setMenuBar] = useState(false);
// const [showSearch, setShowSearch] = useState(false); // note the S


const searchbar = () => {
  setShowSearch(prev => !prev)
}

  const Menubar = () => {
   setMenuBar(prev => !prev)
  }


  return (
    <Nav>
    {menuBar && (

         <div className="lefdrop" >
        <div className="cloasdiv" onClick={()=> {setMenuBar(false)}}>
          <span style={{fontSize: '20px'}}>Close</span>
          <span><IoClose style={{fontSize: '25px'}} /></span>
        </div>
             <ul >
               <li>Home <IoIosArrowDown /></li>
               <li>Shops <IoIosArrowDown /></li>
               <li>Product <IoIosArrowDown /></li>
               <li>Collections <IoIosArrowDown /></li>
               <li>Pages <IoIosArrowDown /></li>
               <li>Blog <IoIosArrowDown /></li>
               <li>Contact Us</li>
             </ul> 
        <div className='icons' >
       <span><FaXTwitter /></span>
       <span><FaFacebookF /></span>
       <span><FaInstagram /></span>
       <span><FaYoutube /></span>
       <span><FaTiktok /></span>
     </div>
      </div>
    )}

      <div className="mobileview" >
        <div className="menuebar" onClick={() => {Menubar(), setShowSearch(false);}}>
         <span onClick={() => { setShowSearch(false);}} ><AiOutlineMenu style={{fontSize: '20px', cursor: 'pointer'}} /></span>
        </div>

       <div className="logo" onClick={() => {setShowSearch(false);}}>
        <img  src={logo} alt="Logo" onClick={() => {setMenuBar(false);}} />
       </div>

        <div className="searchicon" onClick={() => {searchbar(), setMenuBar(false);}}>
         <span ><BiSearchAlt style={{fontSize: '25px', cursor: 'pointer'}} /></span>
        </div>
      </div>




     <div className="navwrapper" >
      <div className='icons' id='iconshere' onClick={() => {setShowSearch(false);}}>
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
      <span className='searbarhere' onClick={searchbar}><BiSearchAlt style={{fontSize: '23px',}} />Search</span>
      <span><VscAccount style={{fontSize: '22px',}} /> Account</span>
      <span onClick={handleShowCart} style={{ cursor: 'pointer', fontSize: '17px', userSelect: 'none' }} ><PiShoppingBagOpenLight style={{ marginRight: '6px' }}  />Cart {cartCount}</span>

      <span><img src={heart} alt="Heart" style={{width: '20px',}}/>  Wishlist 10</span>
     </div>
     </div>


{showSearch && (
       <div className="searchbarone">
      
      <form className="sear">
        <input type="text" name="" id="" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
     </div>
)}

    </Nav>
  )
}



export default Navbar
