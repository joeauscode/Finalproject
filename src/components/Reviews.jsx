import React from 'react'
import {Reviewshere} from './styles'
import man from '../assets/Reviews/man.png'
import { TiStarFullOutline } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { FaArrowAltCircleRight } from "react-icons/fa";
import tomatoes from '../assets/Reviews/tomatoes.png'
import potatoes from '../assets/Reviews/potatoess.png'
import leaves from '../assets/Reviews/leaves.png'
import mush from '../assets/Reviews/mush.png'
import { MdOutlineAccountCircle, MdOutlineInsertComment } from "react-icons/md";
import juice from '../assets/Reviews/friutjoice.png'
import ortopus from '../assets/Reviews/othopus.png'
import fanta from '../assets/Reviews/fanta.png'
import flows from '../assets/Reviews/lowes.png'









const Reviews = () => {
  return (
    <Reviewshere>
      <div className="imagedis">
        <div className='imagdibs'><img src={man} alt="Man" /></div>
        <div className="revis">
        <p>" Also like the fact that i can pick my staples in the brown paper packs and glass containers at the zero waste section with an idea to reduce plastic and also more convenient. "</p>
        <span><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></span>
      </div>
       <div className='name'>
        <span>Alxeander Ball</span>
      <span>New York</span>
       </div>
      
      <div className='dotscroll'>
      <GoDotFill className='dot'/>
      <GoDotFill className='dot'/>
      <GoDotFill className='dot'/>
       </div>
      </div>



      <div className="reviwcards">
        
        <div className="cardshere">
          <div className='reviwimg'><img src={tomatoes} alt="tomatoes" /></div>

          <div>
           <span className='reviewhead'>Fresh Tomatoes</span>
            <div className='middlescard'>
            <span>Exotic Fruits & Veggies</span>
           <span>Fresh Fruits</span>
           <span>Fresh Vegetables</span>
           <span>Herbs & Seasinings</span>
            </div>

           <span className='shopmore'>Shop All <FaArrowAltCircleRight style={{color: 'lightgray', fontSize: '15px'}} /></span>
          </div>
        </div>


        <div className="cardshere">
          <div className='reviwimg'><img src={potatoes} alt="potatoes" /></div>

          <div>
           <span className='reviewhead'>Fresh Potatoes</span>
            <div className='middlescard'>
            <span>Exotic Fruits & Veggies</span>
           <span>Fresh Fruits</span>
           <span>Fresh Vegetables</span>
           <span>Herbs & Seasinings</span>
            </div>

           <span className='shopmore'>Shop All <FaArrowAltCircleRight style={{color: 'lightgray', fontSize: '15px'}} /></span>
          </div>
        </div>


        <div className="cardshere">
          <div className='reviwimg'><img src={leaves} alt="leaves" /></div>

          <div>
           <span className='reviewhead'>Fresh Potatoes</span>
            <div className='middlescard'>
            <span>Exotic Fruits & Veggies</span>
           <span>Fresh Fruits</span>
           <span>Fresh Vegetables</span>
           <span>Herbs & Seasinings</span>
            </div>

           <span className='shopmore'>Shop All <FaArrowAltCircleRight style={{color: 'lightgray', fontSize: '15px'}} /></span>
          </div>
        </div>


        <div className="cardshere">
          <div className='reviwimg'><img src={mush} alt="mush" /></div>

          <div>
           <span className='reviewhead'>Fresh Potatoes</span>
            <div className='middlescard'>
            <span>Exotic Fruits & Veggies</span>
           <span>Fresh Fruits</span>
           <span>Fresh Vegetables</span>
           <span>Herbs & Seasinings</span>
            </div>

           <span className='shopmore'>Shop All <FaArrowAltCircleRight style={{color: 'lightgray', fontSize: '15px'}} /></span>
          </div>
        </div>

        <div className="cardshere">
          <div className='reviwimg'><img src={potatoes} alt="potatoes" /></div>

          <div>
           <span className='reviewhead'>Fresh Potatoes</span>
            <div className='middlescard'>
            <span>Exotic Fruits & Veggies</span>
           <span>Fresh Fruits</span>
           <span>Fresh Vegetables</span>
           <span>Herbs & Seasinings</span>
            </div>

           <span className='shopmore'>Shop All <FaArrowAltCircleRight style={{color: 'lightgray', fontSize: '15px'}} /></span>
          </div>
        </div>


      </div>




      <div className="latestpost">
        <p className='titleheaing'>Our Latest Post</p>
    

    <div className="mainhercardss">
      
        <div id='cardshere'>
          <div className='mydivimg'><img src={juice} alt="juice" /></div>

          <div className='titsh'>
          <span>Transition Your Favorite Looks into Fall France</span>
          </div>
           <div className='lastvewbitton'>
           <span>13 Feb</span>
          <span>|</span>
          <span><MdOutlineAccountCircle /> ALO Support</span>
          <span>|</span>
          <span><MdOutlineInsertComment /> 0 comment</span>
           </div>
        </div>

        
        <div id='cardshere'>
          <div className='mydivimg'><img src={ortopus} alt="ortopus" /></div>

          <div className='titsh'>
          <span>Perfect Quality Reasonable Price For Your Family</span>
          </div>
           <div className='lastvewbitton'>
           <span>13 Feb</span>
          <span>|</span>
          <span><MdOutlineAccountCircle /> ALO Support</span>
          <span>|</span>
          <span><MdOutlineInsertComment /> 0 comment</span>
           </div>
        </div>

        <div id='cardshere'>
          <div className='mydivimg'><img src={fanta} alt="fanta" /></div>

          <div className='titsh'>
          <span>Ways To Choose Fruits & Seafoods Good For Pregnancy</span>
          </div>
           <div className='lastvewbitton'>
           <span>13 Feb</span>
          <span>|</span>
          <span><MdOutlineAccountCircle /> ALO Support</span>
          <span>|</span>
          <span><MdOutlineInsertComment /> 0 comment</span>
           </div>
        </div>


        <div id='cardshere'>
          <div className='mydivimg'><img src={flows} alt="flows" /></div>

          <div className='titsh'>
          <span>Summer Breakfast For The Healthy Morning With Tomatoes</span>
          </div>
           <div className='lastvewbitton'>
           <span>13 Feb</span>
          <span>|</span>
          <span><MdOutlineAccountCircle /> ALO Support</span>
          <span>|</span>
          <span><MdOutlineInsertComment /> 0 comment</span>
           </div>
        </div>

    </div>


      </div>

    </Reviewshere>
  )
}

export default Reviews
