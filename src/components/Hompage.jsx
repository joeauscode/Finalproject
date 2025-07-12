import React, {useEffect, useState} from 'react'
import {Homepage} from './styles'
import homepage from '../assets/homepage.png'
import { SlPlane } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import { IoMdGift } from "react-icons/io";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import apple from '../assets/titlecard/apple.png'
import froud from '../assets/titlecard/fruit.png'
import banana from '../assets/titlecard/banana.png'
import flowers from '../assets/titlecard/flower.png'
import fish from '../assets/topoffer/fish.png'
import paper from '../assets/topoffer/pepper.png'
import meat from '../assets/topoffer/meat.png'


import ProductAll from './ProductAll'
import Featurebran from './Featurebran'
import Reviews from './Reviews'

 
import aloe from '../assets/titlecard/aloe.png'
// datetime
import dayjs from "dayjs";

const HomepageComponent = () => {


  // date time
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => setTime(dayjs()), 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <Homepage>
      <div className="homewrapper">
       <div className='first'>
        <h4>Top seller in the week</h4>
        <h1>Choose Your Healthy Lifestyles.</h1>
        <p>Presentation matters. Our fresh Vietnamses Vegetable rolls look good and taste even better.</p>
        <div><button>SHOP NOW</button></div>
       </div>
         <div className='imgahom'>
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



      <div>
        <div className="title">
          <h3>weekly food offer </h3>
          <div>End in: {time.format("00 : HH : mm : ss")}</div>
        </div>

        <div className="titlecards">

          <div className='cards'>
          <span className='new'>New</span>
          <div className='titleimg'><img src={aloe} alt="Aloe" /></div>
          <div>
            <span className='titleprice'>$60.00 - $150.00</span>
              <p className='titleproduct'>Aloe Arborescens</p>
              <span className='titlestart'><MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /></span>
              <div className='titleline'></div>
               <div className='titleinstoc'>
                <span>Sold: 60</span>
              <span>Available: 40</span>
               </div>
          </div>
          </div>


          <div className='cards'>
          <span className='newminus'>-34%</span>
          <div className='titleimg'><img src={apple} alt="apple" /></div>
          <div>
            <span className='titlepriceminue'>$19.00 - &nbsp;<span className='strock'>$29.00</span></span>
              <p className='titleproduct'>Annurca apples</p>
              <span className='titlestart'><MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /></span>
              <div className='titleline'></div>
               <div className='titleinstoc'>
                <span>Sold: 65</span>
              <span>Available: 35</span>
               </div>
          </div>
          </div>


          <div className='cards'>
          <span className='newminus'>-34%</span>
          <div className='titleimg'><img src={froud} alt="froud" /></div>
          <div>
            <span className='titlepriceminue'>$19.00 - &nbsp;<span className='strock'>$29.00</span></span>
              <p className='titleproduct'>Apple Granny</p>
              <span className='titlestart'><MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /></span>
              <div className='titleline'></div>
               <div className='titleinstoc'>
                <span>Sold: 60</span>
              <span>Available: 40</span>
               </div>
          </div>
          </div>


          <div className='cards'>
          <span className='newminus'>-34%</span>
          <div className='titleimg'><img src={banana} alt="banana" /></div>
          <div>
            <span className='titlepriceminue'>$29.00 - &nbsp;<span className='strock'>$39.00</span></span>
              <p className='titleproduct'>Bananas</p>
              <span className='titlestart'><MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /></span>
              <div className='titleline'></div>
               <div className='titleinstoc'>
                <span>Sold: 68</span>
              <span>Available: 15</span>
               </div>
          </div>
          </div>


          <div className='cards'>
          <span className='new'>New</span>
          <div className='titleimg'><img src={flowers} alt="flowers" /></div>
          <div>
            <span className='titleprice'>$499.00</span>
              <p className='titleproduct'>Crescione Aclla Cress</p>
              <span className='titlestart'><MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /></span>
              <div className='titleline'></div>
               <div className='titleinstoc'>
                <span>Sold: 41</span>
              <span>Available: 15</span>
               </div>
          </div>
          </div>



        </div>
      </div>



      <div className='mainofer'>
        <div className="topoffer">
          <div className="topofe">
            <p className='firstp'>TOP OFFERS</p>
             <div className='spanclas'>
            <span>Seafood</span>
            <span>Fresh & Tasty</span>
             </div>
            <p className='dis'>Short Description</p>
          </div>
          <div className='image'>
            <img src={fish} alt="fish" />
          </div>
        </div>



        <div className="topoffer">
          <div className="topofe">
            <p className='firstp'>TOP DEALS</p>
             <div className='spanclas'>
            <span>vegetable </span>
            <span>Fresh Hand-Picked</span>
             </div>
            <p className='dis'>Short Description</p>
          </div>
          <div className='imagetwo'>
            <img src={paper} alt="paper" />
          </div>
        </div>


        <div className="topoffer">
          <div className="topofe">
            <p className='firstp'>TOP DEALS</p>
             <div className='spanclas'>
            <span>Fresh Meat </span>
            <span>Best For Family</span>
             </div>
            <p className='dis'>Short Description</p>
          </div>
          <div className='imagetwo'>
            <img src={meat} alt="paper" />
          </div>
        </div>
      </div>


      <ProductAll />
      <Featurebran />
      <Reviews />
      
    </Homepage>
  )
}

export default HomepageComponent
