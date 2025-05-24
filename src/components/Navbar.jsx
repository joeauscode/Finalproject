import React from 'react'
import { Nav } from './styles'
import logo from '../assets/icons/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok} from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import heart from '../assets/icons/heart.png'


const navbar = () => {
  return (
    <Nav>
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



export default navbar
