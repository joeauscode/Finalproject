import React, { useEffect} from 'react';
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




const ProductAll = ({addToCartts, addToCatts}) => {

    useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);





  const produc = [
    {id: 1, name: 'Yellow Potatoes', price: 254.00, oldPrice: 300.00, img: potato},
    {id: 2, name: 'Yellow Cherry Tomatoes', price: 15.00, oldPrice: 20.00, img: egg},
    {id: 3, name: 'Violet Cauliflower', price: 10,  img: Violet},
    {id: 4, name: 'Sorbet Mango Ice Cream', price: 254.00, oldPrice: 300.00, img: cream},
    {id: 5, name: 'Shiso Leaves Green', price: 360.00, oldPrice: 400.00, img: Shiso},
  ];


  const productions = [
    {id: 1, name: 'Yellow Potatoess', price: 254.00, oldPrice: 300.00, img: potato},
    {id: 2, name: 'Yellow Cherry Tomatoes', price: 15.00, oldPrice: 20.00, img: egg},
    {id: 3, name: 'Violet Cauliflower', price: 10,  img: Violet},
    {id: 4, name: 'Sorbet Mango Ice Cream', price: 254.00, oldPrice: 300.00, img: cream},
    {id: 5, name: 'Shiso Leaves Green', price: 360.00, oldPrice: 400.00, img: Shiso},
  ];






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

        {produc.map((pros) => (
        <div className="maincards" data-aos="fade-up" key={pros.id}>
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={pros.img} alt={pros.name} /></div>
          <div style={{position: 'absolute', top: '55%', right: '10%', color: '#28a745', fontSize: '20px'}} ><FaShoppingCart className='onlcikhover' onClick={() => addToCartts(produc)} /></div>
         </div>
          <div className='buttom'>
           <span>{pros.name}</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>${pros.price} <span className='strock'>{pros.oldPrice}</span></span>
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
  {productions.map((items) => (
        <div className="maincards" data-aos="fade-up" key={items.id}>
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={items.img} alt={items.name} /></div>
          <div  style={{position: 'absolute', top: '55%', right: '10%', color: '#28a745', fontSize: '20px' }}><FaShoppingCart onClick={addToCatts} className='onlcikhover' /></div>
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
