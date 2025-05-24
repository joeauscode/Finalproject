import React from 'react'
import {Homepage} from './styles'
import homepage from '../assets/homepage.png'
const HomepageComponent = () => {
  return (
    <Homepage>
      <div className="homewrapper">
       <div className='first'>
        <h4>Top seller in the week</h4>
        <h1>Choose Your Healthy Lifestyles.</h1>
        <p>Presentation matters. Our fresh Vietnamses Vegetable rolls look good and taste even better.</p>
        <div><button>SHOP NOW</button></div>
       </div>
         <div>
          <img src={homepage} alt="Homepage" />
         </div>
      </div>
      
    </Homepage>
  )
}

export default HomepageComponent
