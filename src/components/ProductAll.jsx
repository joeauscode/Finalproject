import React, { useEffect, useMemo, useState} from 'react';
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
  const producs = [
    {name: 'green ', price: 2154.00, oldPrice: 3200.00, img: potato},
    {name: 'Tomatoes', price: 15.00, oldPrice: 230.00, img: egg},
    {name: ' Cauliflower', price: 10,  img: Violet},
    {name: 'Sorbet Mango', price: 254.00, oldPrice: 30340.00, img: cream},
    {name: 'Shiso Green', price: 3260.00, oldPrice: 40230.00, img: Shiso},
  ];


  const productions = [
    { name: 'Yellow Potatoess', price: 254.00, oldPrice: 300.00, img: potato},
    { name: 'Yellow Cherry Tomatoes', price: 15.00, oldPrice: 20.00, img: egg},
    { name: 'Violet Cauliflower', price: 10,  img: Violet},
    { name: 'Sorbet Mango Ice Cream', price: 254.00, oldPrice: 300.00, img: cream},
    { name: 'Shiso Leaves Green', price: 360.00, oldPrice: 400.00, img: Shiso},
  ];
  const production = [
    { name: 'Yellow ', price: 1000.00, oldPrice: 200.00, img: potato},
    { name: 'Yellow Cherry ', price: 135.00, oldPrice: 220.00, img: egg},
    { name: 'Cauliflower', price: 130,  img: Violet},
    { name: 'Mango Ice Cream', price: 2254.00, oldPrice: 2300.00, img: cream},
    { name: 'Shiso Leaves', price: 360.00, oldPrice: 400.00, img: Shiso},
  ];


  

const producWithID = useMemo(() =>
  produc.map((item) => ({
    ...item,
    id: `${Math.floor(10000 + Math.random() * 90000)}` 
  }))
, []);

const producWitID = useMemo(() =>
  producs.map((item) => ({
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
const productionhID = useMemo(() =>
  production.map((item) => ({
    ...item,
    id: `${Math.floor(10000 + Math.random() * 90000)}` 
  }))
, []);



const [changeTap, setChangeTap] = useState("allproduct"); 
const [changeTaps, setChangeTaps] = useState("all"); 




  return (
    <Allpro>


 
    <div className="allproduct">
      <div className='topone'>
        <span onClick={() => setChangeTap('allproduct')}>All Products</span>
        <span onClick={() => setChangeTap('meat')}>Fresh Meat</span>
        <span onClick={() => setChangeTap('Bakery')}>Fresh Bakery</span>
        <span onClick={() => setChangeTap('Biscuits')}>Biscuits Snack</span>
      </div>
      
      {changeTap === 'allproduct' && (
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
          <span style={{display: 'flex', gap: '10px'}}>${item.price} <span className='strock'>{item.oldPrice}</span></span>
          </div>
      </div>
        ))}

      </div>
      )}

   {changeTap === 'meat' && (
          <div id="cardshere">

        {producWitID.map((item) => (
        <div className="maincards" data-aos="fade-up" key={item.id}>
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={item.img} alt={item.name} /></div>
          <div className='addtocatbutton' style={{position: 'absolute', top: '59%', right: '10%', color: '#28a745', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'2px'}} onClick={() => addToCart(item)}><span style={{fontSize: '9px'}}>add to cart</span><FaShoppingCart className='onlcikhover' /></div>
         </div>
          <div className='buttom'>
           <span>{item.name}</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span style={{display: 'flex', gap: '10px'}}>${item.price} <span className='strock'>{item.oldPrice}</span></span>
          </div>
      </div>
        ))}

      </div>
   )}

   
    {changeTap === 'Bakery' && (
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
          <span style={{display: 'flex', gap: '10px'}}>${item.price} <span className='strock'>{item.oldPrice}</span></span>
          </div>
      </div>
        ))}

      </div>
    )}

    {changeTap === 'Biscuits' && (

      <div id="cardshere">

        {producWitID.map((item) => (
        <div className="maincards" data-aos="fade-up" key={item.id}>
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={item.img} alt={item.name} /></div>
          <div className='addtocatbutton' style={{position: 'absolute', top: '59%', right: '10%', color: '#28a745', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'2px'}} onClick={() => addToCart(item)}><span style={{fontSize: '9px'}}>add to cart</span><FaShoppingCart className='onlcikhover' /></div>
         </div>
          <div className='buttom'>
           <span>{item.name}</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span style={{display: 'flex', gap: '10px'}}>${item.price} <span className='strock'>{item.oldPrice}</span></span>
          </div>
      </div>
        ))}

      </div>
    )}



    </div>




      <div className="allproduct">
      <div className='trending'>
        <div className='tredtop'>
          <span>TOP TRENDING PRODUCT</span>
        </div>
         <div className='toponetwo'>
        <span onClick = {() => setChangeTaps('all')}>All Products</span>
        <span onClick = {() => setChangeTaps('fresh')}>Fresh Meat</span>
        <span onClick = {() => setChangeTaps('Bakeryfresh')}>Fresh Bakery</span>
        <span onClick = {() => setChangeTaps('Snack')}>Biscuits Snack</span>
         </div>
      </div>


  {changeTaps === 'all' && (
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
          <span style={{display: 'flex', gap: '10px'}}>${items.price}<span className='strock'>{items.oldPrice}</span></span>
          </div>
      </div>
  ))}

      

      </div>
  )}

  {changeTaps === 'fresh' && (
          <div id="cardshere">
  {productionhID.map((items) => (
        <div className="maincards" data-aos="fade-up" key={items.id}>
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={items.img} alt={items.name} /></div>
           <div className='addtocatbutton' style={{position: 'absolute', top: '59%', right: '10%', color: '#28a745', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'2px'}} onClick={() => addToCart(items)}><span style={{fontSize: '9px'}}>add to cart</span><FaShoppingCart className='onlcikhover'/></div>
         </div>
          <div className='buttom'>
           <span>{items.name}</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span style={{display: 'flex', gap: '10px'}} >${items.price}<span className='strock'>{items.oldPrice}</span></span>
          </div>
      </div>
  ))}

      

      </div>
  )}
    {changeTaps === 'Bakeryfresh' && (
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
          <span style={{display: 'flex', gap: '10px'}}>${items.price}<span className='strock'>{items.oldPrice}</span></span>
          </div>
      </div>
  ))}

      

      </div>
  )}
    {changeTaps === 'Snack' && (
          <div id="cardshere">
  {productionhID.map((items) => (
        <div className="maincards" data-aos="fade-up" key={items.id}>
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={items.img} alt={items.name} /></div>
           <div className='addtocatbutton' style={{position: 'absolute', top: '59%', right: '10%', color: '#28a745', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'2px'}} onClick={() => addToCart(items)}><span style={{fontSize: '9px'}}>add to cart</span><FaShoppingCart className='onlcikhover'/></div>
         </div>
          <div className='buttom'>
           <span>{items.name}</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span style={{display: 'flex', gap: '10px'}}>${items.price}<span className='strock'>{items.oldPrice}</span></span>
          </div>
      </div>
  ))}

      

      </div>
  )}
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
