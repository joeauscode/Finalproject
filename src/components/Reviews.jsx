import React from 'react'
import {Reviewshere} from './styles'
import man from '../assets/Reviews/man.png'
import { TiStarFullOutline } from "react-icons/ti";
import { LuDot } from "react-icons/lu";





const Reviews = () => {
  return (
    <Reviewshere>
      <div className="imagedis">
        <div className='imagdibs'><img src={man} alt="Man" /></div>
        <div className="revis">
        <p>" Also like the fact that i can pick my staples in the brown paper packs and glass containers at the zero waste section with an idea to reduce plastic and also more convenient. "</p>
        <span><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></span>
      </div>
      <span>Alxeander Ball</span>
      <span>New York</span>
       <div className='dotscroll'>
        <span><LuDot /></span>
      <span><LuDot /></span>
      <span><LuDot /></span>
       </div>
      </div>

    </Reviewshere>
  )
}

export default Reviews
