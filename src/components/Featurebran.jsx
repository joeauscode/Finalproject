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

const Featurebran = () => {
  return (
    <Feature>
      <div className="features">
        <div className="brandheader">
            <span>Featured Brand Products</span>
        </div>
        
        <div className="cardsmain">

        <div className="featuredcards">
         <div className='myimgediv'><img src={apples} alt="apples" /></div>
         <div className='cardswrtup'>
            <span>Annurca apples</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$19.00 <span className='strock'>$29.00</span></span>
         </div>
        </div>


        <div className="featuredcards">
         <div className='myimgediv'><img src={bergamot} alt="apples" /></div>
         <div className='cardswrtup'>
            <span>Fresh bergamot</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$320.00 <span className='strock'>$390.00</span></span>
         </div>
        </div>
        
        <div className="featuredcards">
         <div className='myimgediv'><img src={Strawberries} alt="apples" /></div>
         <div className='cardswrtup'>
            <span>Fresh Strawberries</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$69.00 <span className='strock'>$100.00</span></span>
         </div>
        </div>

        <div className="featuredcards">
         <div className='myimgediv'><img src={orange} alt="orange" /></div>
         <div className='cardswrtup'>
            <span>Navel orange</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$49.00 <span className='strock'>$59.00</span></span>
         </div>
        </div>


        <div className="featuredcards">
         <div className='myimgediv'><img src={cauliflower} alt="orange" /></div>
         <div className='cardswrtup'>
            <span>Orange cauliflower</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$39.00 <span className='strock'>$45.00</span></span>
         </div>
        </div>


        <div className="featuredcards">
         <div className='myimgediv'><img src={Almaverde} alt="Almaverde" /></div>
         <div className='cardswrtup'>
            <span>Organic Almaverde Bio</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$29.00 <span className='strock'>$35.00</span></span>
         </div>
        </div>

        <div className="featuredcards">
         <div className='myimgediv'><img src={Bananas} alt="Bananas" /></div>
         <div className='cardswrtup'>
            <span>Organic Fresh Bananas</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$14.00 <span className='strock'>$16.00</span></span>
         </div>
        </div>

        <div className="featuredcards">
         <div className='myimgediv'><img src={Lemon} alt="Lemon" /></div>
         <div className='cardswrtup'>
            <span>Organic Lemon</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$40.00</span>
         </div>
        </div>

        <div className="featuredcards">
         <div className='myimgediv'><img src={Granny} alt="Granny" /></div>
         <div className='cardswrtup'>
            <span>Apples Granny</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$19.00 <span className='strock'>$29.00</span></span>
         </div>
        </div>


        <div className="featuredcards">
         <div className='myimgediv'><img src={Baanas} alt="Baanas" /></div>
         <div className='cardswrtup'>
            <span>Bananas</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$29.00 <span className='strock'>$39.00</span></span>
         </div>
        </div>


        <div className="featuredcards">
         <div className='myimgediv'><img src={avaocado} alt="Pinkerton" /></div>
         <div className='cardswrtup'>
            <span>Pinkerton Avocado</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$29.00 <span className='strock'>$39.00</span></span>
         </div>
        </div>

        <div className="featuredcards">
         <div className='myimgediv'><img src={cabbage} alt="cabbage" /></div>
         <div className='cardswrtup'>
            <span>Red cabbage</span>
             <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
            <span>$50.00 <span className='strock'>$55.00</span></span>
         </div>
        </div>





        </div>



      </div>
    </Feature>
  )
}

export default Featurebran
