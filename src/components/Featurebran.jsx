import React from 'react'
import {Feature} from './styles'
import { IoIosStarOutline } from "react-icons/io";
import apples from '../assets/Feature/apple.png'
import bergamot from '../assets/Feature/bergamot.png'
import Strawberries from '../assets/Feature/Strawberries.png'
import orange from '../assets/Feature/orrange.png'
import cauliflower from '../assets/Feature/cauliflower.png'
import Almaverde from '../assets/Feature/Almaverde.png'
import Bananas from '../assets/Feature/Bananas.png'
import Lemon from '../assets/Feature/lemo.png'
import Granny from '../assets/Feature/Granny.png'
import Baanas from '../assets/Feature/bana.png'
import avaocado from '../assets/Feature/avocado.png'
import cabbage from '../assets/Feature/cabbage.png'
import { FaShoppingCart } from "react-icons/fa";


const Featurebran = ({addToCart}) => {

const products = [
  { id: 1, name: "Annurca apples", price: 19, oldPrice: 29, img: apples },
  { id: 2, name: "Fresh bergamot", price: 320, oldPrice: 390, img: bergamot },
  { id: 3, name: "Fresh Strawberries", price: 69, oldPrice: 100, img: Strawberries },
  { id: 4, name: "Navel orange", price: 49, oldPrice: 59, img: orange },
  { id: 5, name: "Orange cauliflower", price: 39, oldPrice: 45, img: cauliflower },
  { id: 6, name: "Organic Almaverde Bio", price: 29, oldPrice: 35, img: Almaverde },
  { id: 7, name: "Organic Fresh Bananas", price: 14, oldPrice: 16, img: Bananas },
  { id: 8, name: "Organic Lemon", price: 40, oldPrice: null, img: Lemon },
  { id: 9, name: "Apples Granny", price: 19, oldPrice: 29, img: Granny },
  { id: 10, name: "Bananas", price: 29, oldPrice: 39, img: Baanas },
  { id: 11, name: "Pinkerton Avocado", price: 29, oldPrice: 39, img: avaocado },
  { id: 12, name: "Red cabbage", price: 50, oldPrice: 55, img: cabbage },
];







  
  return (
    <Feature>
      <div className="features">
        <div className="brandheader">
            <span>Featured Brand Products</span>
        </div>
        
        <div className="cardsmain">
        {products.map((product) => (
        <div className="featuredcards" style={{position: 'relative'}} key={product.id}>
         <div className='myimgediv'><img src={product.img} alt={product.name} /></div>
         <div className='cardswrtup'>
            <span>{product.name}</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>${product.price} <span className='strock'>${product.oldPrice}</span></span>
            <div style={{ position: 'absolute', top: '68%', right: '2%', color: '#28a745', fontSize: '20px', cursor: 'pointer' }} onClick={() => addToCart(product)} role="button"  tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') addToCart(product) }}> <FaShoppingCart className='onlcikhover'/></div>

         </div>
        </div>
        ))}
      </div>

      </div>
    </Feature>
  )
}

export default Featurebran
