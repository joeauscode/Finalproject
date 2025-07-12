import React from 'react'
import {Foot} from './styles'
import logo from '../assets/icons/logo.png'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";





const Footer = () => {
  return (
    <Foot>
      <div className="footerimage">

        <div className="topfoo">
        <div> <img src={logo} alt="logo" /></div>


        <div className='sociamidea'>
           <BsTwitterX />
           <FaFacebookF />
           <FaInstagram />
           <FaYoutube />
           <FaTiktok />
        </div>

        <div className='subscrib'>
        <span>Newsletter!</span>
        <input type="text" name="" id="" placeholder='Enter your email here' />
        <button type='submit'>Subscribe</button>
        </div>
        </div>

        <div className="lists">
            <div>
             <ul>
            <li>Calista Wise 7292 Dictum Av.</li>
            <li>Antonio, Italy</li>
            <li>(498) 709-6393</li>
            <li>aloshopify@alothemes.com</li>
            </ul>
            </div>

            <div>
             <ul>
              <li>Organix</li>
              <li>Vegetables</li>
              <li>Fruit Drink</li>
              <li>Sea Foods</li>
              <li>Bisciuts Snack</li>
            </ul>
            </div>

            <div>
                <ul>
                    <li>Help</li>
                    <li>Gift Cards</li>
                    <li>Order Status</li>
                    <li>Free Shipping</li>
                    <li>Meet The Maker</li>
                </ul>
            </div>

            <div className='listdays'>
             <div><span>Monday-Friday</span> <span>8:00am - 9:00pm</span></div>
             <div><span>Saturday</span> <span>8:00am - 9:00pm</span></div>
             <div><span>Sunday</span> <span>8:00am - 9:00pm</span></div>
            </div>
        </div>

      </div>
    </Foot>
  )
}

export default Footer
