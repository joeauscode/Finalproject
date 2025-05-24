import React from 'react'
import {Homepage} from './styles'
import homepage from '../assets/homepage.png'
import { SlPlane } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import { IoMdGift } from "react-icons/io";
import { TbPigMoney } from "react-icons/tb";

const HomepageComponent = () => {
  return (
    <Homepage>
      <div className="homewrapper">
       <div className='first'>
        <h4>Top seller in the week</h4>
        <h1>Choose Your Healthy Lifestyles.</h1>
        <p>Presentation matters. Our fresh Vietnamses Vegetable rolls look good and taste even better.</p>
        <div><button>SHOP NOW</button></div>
       </div>
         <div>
          <img src={homepage} alt="Homepage" />
         </div>
      </div>

      <div className="flyer">
        <div>
          <span><SlPlane style={{fontSize: '20px'}} /> FREE SHIPPING</span>
          <p>Free Shipping for all US order</p>
        </div>
        <div>
          <span><BiSupport style={{fontSize: '20px'}} /> SUPPORT 24/7</span>
          <p>We support 24h a day</p>
        </div>
        <div>
          <span><TfiReload style={{fontSize: '20px'}}/> 100% MONEY BACK</span>
          <p>You have 30 days to return</p>
        </div>
        <div>
          <span><IoMdGift style={{fontSize: '20px'}}/> PAYMENT SECURE</span>
          <p>We ensure secure payment</p>
        </div>
        <div>
          <span><TbPigMoney style={{fontSize: '20px'}} /> DISCOUNT</span>
          <p>From all order over $100</p>
        </div>
      </div>
      
    </Homepage>
  )
}

export default HomepageComponent
