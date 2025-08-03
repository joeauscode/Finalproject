import React, { useMemo } from 'react'
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
  { name: "Annurca apples", price: 19, oldPrice: 29, img: apples },
  { name: "Fresh bergamot", price: 320, oldPrice: 390, img: bergamot },
  { name: "Fresh Strawberries", price: 69, oldPrice: 100, img: Strawberries },
  { name: "Navel orange", price: 49, oldPrice: 59, img: orange },
  { name: "Orange cauliflower", price: 39, oldPrice: 45, img: cauliflower },
  {  name: "Organic Almaverde Bio", price: 29, oldPrice: 35, img: Almaverde },
  {  name: "Organic Fresh Bananas", price: 14, oldPrice: 16, img: Bananas },
  { name: "Organic Lemon", price: 40, oldPrice: null, img: Lemon },
  { name: "Apples Granny", price: 19, oldPrice: 29, img: Granny },
  { name: "Bananas", price: 29, oldPrice: 39, img: Baanas },
  { name: "Pinkerton Avocado", price: 29, oldPrice: 39, img: avaocado },
  { name: "Red cabbage", price: 50, oldPrice: 55, img: cabbage },
];



const Productuuid = useMemo(() => 
  products.map((item) => ({
    ...item,
    id: `${Math.floor(10000 + Math.random() * 90000)}`
  })),
[])
  
  return (
    <Feature>
      <div className="features">
        <div className="brandheader">
            <span>Featured Brand Products</span>
        </div>
        
        <div className="cardsmain">
        {Productuuid.map((item) => (
        <div className="featuredcards" style={{position: 'relative'}} key={item.id}>
         <div className='myimgediv'><img src={item.img} alt={item.name} /></div>
         <div className='cardswrtup'>
            <span>{item.name}</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>${item.price} <span className='strock'>${item.oldPrice}</span></span>
            <div style={{ position: 'absolute', top: '68%', right: '2%', color: '#28a745', fontSize: '20px', cursor: 'pointer' }} onClick={() => addToCart(item)} role="button"  tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') addToCart(item) }}> <FaShoppingCart className='onlcikhover'/></div>

         </div>
        </div>
        ))}
      </div>

      </div>
    </Feature>
  )
}

export default Featurebran
