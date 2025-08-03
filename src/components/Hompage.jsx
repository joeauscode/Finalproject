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
import { FaShoppingCart } from "react-icons/fa";
import Navbar from './Navbar';
import Navbutton from './Navbutton'



import ProductAll from './ProductAll'
import Featurebran from './Featurebran'
import Reviews from './Reviews'
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import aloe from '../assets/titlecard/aloe.png'
// datetime
import dayjs from "dayjs";

const HomepageComponent = () => {

    useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);


  // date time
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => setTime(dayjs()), 1000);
    return () => clearInterval(interval);
  }, []);


  const Prod = [
    {id: 1, name: 'Aloe Arborescens', price: 60.00, oldPrice: 150.00, img: aloe, available: 40},
    {id: 2, name: 'Annurca apples', price: 19.00, oldPrice: 29.00, img: apple, available: 35},
    {id: 3, name: 'Apple Granny', price: 19.00, oldPrice: 29.00, img: froud, available: 40},
    {id: 4, name: 'Bananas', price: 29.00, oldPrice: 39.00, img: banana, available: 20},
    {id: 5, name: 'Crescione Aclla Cress', price: 499.00,  img: flowers, available: 15},
  ];



  //   const [cart, setCarts] = useState(() => {
  //   const saved = localStorage.getItem("cart");
  //   return saved ? JSON.parse(saved) : [];
  // });

  const addToCarts = (Prod) => {
    const updated = [...cart, Prod];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };


// featres brand
// ================================================================
  const [showSearch, setShowSearch] = useState(false);
    const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (product) => {
    const updated = [...cart, product];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const addToCartts = (produc) => {
    const updated = [...cart, produc];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const addToCatts = (productions) => {
    const updated = [...cart, productions];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };




  return (
    <Homepage >
   
    <Navbar cartCount={cart.length} showSearch={showSearch} setShowSearch={setShowSearch}/>
       <Navbutton />

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



      <div data-aos="fade-up">
        <div className="title">
          <h3>weekly food offer </h3>
          <div>End in: {time.format("00 : HH : mm : ss")}</div>
        </div>

        <div className="titlecards">

          {Prod.map((produ) => (
           <div className='cards' data-aos="fade-up" key={produ.id}>

  
          <span className='new'>New</span>
          <div className='titleimg'><img src={produ.img} alt={produ.name}/></div>
          <div style={{position: 'absolute', top: '49%', right: '10%', color: '#28a745', fontSize: '20px'}} onClick={() => addToCarts(Prod)}><FaShoppingCart className='onlcikhover' /></div>
          <div>
            <span className='titleprice'>${produ.price} - ${produ.oldPrice ?? ''}</span>
              <p className='titleproduct'>Aloe Arborescens</p>
              <span className='titlestart'><MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /> <MdOutlineStarBorderPurple500 /></span>
              <div className='titleline'></div>
               <div className='titleinstoc'>
                <span>Sold: 60</span>
              <span>{produ.available}</span>
               </div>
          </div>
          </div>
   
          ))}

        </div>
      </div>



      <div className='mainofer'>
        <div className="topoffer" data-aos="fade-up">
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
            {/* <div style={{position: 'absolute', top: '80%', left: '3%', color: '#28a745', fontSize: '20px'}}><FaShoppingCart /></div> */}
          </div>
        </div>



        <div className="topoffer" data-aos="fade-up">
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
            {/* <div style={{position: 'absolute', top: '80%', left: '3%', color: '#28a745', fontSize: '20px'}}><FaShoppingCart /></div> */}
          </div>
        </div>


        <div className="topoffer" data-aos="fade-up">
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
            {/* <div style={{position: 'absolute', top: '80%', left: '3%', color: '#28a745', fontSize: '20px'}}><FaShoppingCart /></div> */}
          </div>
        </div>
      </div>


{/* carts */}
<div className="cartsitems">
   <div className="itmescart">
    <span>ID</span>
    <span>Item</span>
    <span>price</span>
    <span>Remove Items</span>
   </div>
</div>

      <ProductAll data-aos="fade-up" addToCartts={addToCartts} addToCatts={addToCatts} />

      <Featurebran  data-aos="fade-up" addToCart={addToCart}/>
      <Reviews  />


      
    </Homepage>
  )
}

export default HomepageComponent
