import React from 'react'
import {Foot} from './styles'
import logo from '../assets/icons/logo.png'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';





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
        <form>
        <input type="text" name="" id="" placeholder='Enter your email here' />
        <button type='submit'>Subscribe</button>
        </form>
        </div>
        </div>

        <div className="lists">
            <div>
             <ul>
            <li><Link>Calista Wise 7292 Dictum Av.</Link></li>
            <li><Link>Antonio, Italy</Link></li>
            <li><Link>(498) 709-6393</Link></li>
            <li><Link>aloshopify@alothemes.com</Link></li>
            </ul>
            </div>

            <div>
             <ul>
              <li><Link>Organix</Link></li>
              <li><Link>Vegetables</Link></li>
              <li><Link>Fruit Drink</Link></li>
              <li><Link>Sea Foods</Link></li>
              <li><Link>Bisciuts Snack</Link></li>
            </ul>
            </div>

            <div>
                <ul>
                    <li><Link>Help</Link></li>
                    <li><Link>Gift Cards</Link></li>
                    <li><Link>Order Status</Link></li>
                    <li><Link>Free Shipping</Link></li>
                    <li><Link>Meet The Maker</Link></li>
                </ul>
            </div>

            <div className='listdays'>
             <div><span>Monday-Friday</span> <span>8:00am - 9:00pm</span></div>
             <div><span>Saturday</span> <span>8:00am - 9:00pm</span></div>
             <div><span>Sunday</span> <span>8:00am - 9:00pm</span></div>
            </div>
        </div>
         <div className="shifg"></div>
      </div>
    </Foot>
  )
}

export default Footer
