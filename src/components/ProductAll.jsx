import React, { useEffect, useMemo } from 'react';
import {Allpro} from './styles'
import potato from '../assets/Allproduct/potato.png'
import { IoIosStarOutline } from "react-icons/io";
import egg from '../assets/Allproduct/egg.png'
import Violet from '../assets/Allproduct/Violet.png'
import cream from '../assets/Allproduct/cream.png'
import Shiso from '../assets/Allproduct/Shiso.png'
import bannes from '../assets/Allproduct/banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaShoppingCart } from "react-icons/fa";




const ProductAll = ({addToCart}) => {

    useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);





  const produc = [
    {name: 'Yellow Potatoes', price: 254.00, oldPrice: 300.00, img: potato},
    {name: 'Yellow Cherry Tomatoes', price: 15.00, oldPrice: 20.00, img: egg},
    {name: 'Violet Cauliflower', price: 10,  img: Violet},
    {name: 'Sorbet Mango Ice Cream', price: 254.00, oldPrice: 300.00, img: cream},
    {name: 'Shiso Leaves Green', price: 360.00, oldPrice: 400.00, img: Shiso},
  ];


  const productions = [
    { name: 'Yellow Potatoess', price: 254.00, oldPrice: 300.00, img: potato},
    { name: 'Yellow Cherry Tomatoes', price: 15.00, oldPrice: 20.00, img: egg},
    { name: 'Violet Cauliflower', price: 10,  img: Violet},
    { name: 'Sorbet Mango Ice Cream', price: 254.00, oldPrice: 300.00, img: cream},
    { name: 'Shiso Leaves Green', price: 360.00, oldPrice: 400.00, img: Shiso},
  ];


  

const producWithID = useMemo(() =>
  produc.map((item) => ({
    ...item,
    id: `${Math.floor(10000 + Math.random() * 90000)}` 
  }))
, []);

const productionWithID = useMemo(() =>
  productions.map((item) => ({
    ...item,
    id: `${Math.floor(10000 + Math.random() * 90000)}` 
  }))
, []);




  return (
    <Allpro>


 
    <div className="allproduct">
      <div className='topone'>
        <span>All Products</span>
        <span>Fresh Meat</span>
        <span>Fresh Bakery</span>
        <span>Biscuits Snack</span>
      </div>

      <div id="cardshere">

        {producWithID.map((item) => (
        <div className="maincards" data-aos="fade-up" key={item.id}>
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={item.img} alt={item.name} /></div>
          <div className='addtocatbutton' style={{position: 'absolute', top: '59%', right: '10%', color: '#28a745', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'2px'}} onClick={() => addToCart(item)}><span style={{fontSize: '9px'}}>add to cart</span><FaShoppingCart className='onlcikhover' /></div>
         </div>
          <div className='buttom'>
           <span>{item.name}</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>${item.price} <span className='strock'>{item.oldPrice}</span></span>
          </div>
      </div>
        ))}

      </div>


    </div>




      <div className="allproduct">
      <div className='trending'>
        <div className='tredtop'>
          <span>TOP TRENDING PRODUCT</span>
        </div>
         <div className='toponetwo'>
            <span>All Products</span>
        <span>Fresh Meat</span>
        <span>Fresh Bakery</span>
        <span>Biscuits Snack</span>
         </div>
      </div>



      <div id="cardshere">
  {productionWithID.map((items) => (
        <div className="maincards" data-aos="fade-up" key={items.id}>
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={items.img} alt={items.name} /></div>
           <div className='addtocatbutton' style={{position: 'absolute', top: '59%', right: '10%', color: '#28a745', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'2px'}} onClick={() => addToCart(items)}><span style={{fontSize: '9px'}}>add to cart</span><FaShoppingCart className='onlcikhover'/></div>
         </div>
          <div className='buttom'>
           <span>{items.name}</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>{items.price}<span className='strock'>{items.oldPrice}</span></span>
          </div>
      </div>
  ))}

      

      </div>


    </div>


    <div className="banner">
      <div className='banndiv'>
        <img src={bannes} alt="bannes" />
      </div>
    </div>
      
      
    </Allpro>
  )
}

export default ProductAll
