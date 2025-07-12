import React from 'react'
import {Allpro} from './styles'
import potato from '../assets/Allproduct/potato.png'
import { IoIosStarOutline } from "react-icons/io";
import egg from '../assets/Allproduct/egg.png'
import Violet from '../assets/Allproduct/Violet.png'
import cream from '../assets/Allproduct/cream.png'
import Shiso from '../assets/Allproduct/Shiso.png'
import bannes from '../assets/Allproduct/banner.png'


const ProductAll = () => {
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
              <div className="maincards">
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={potato} alt="potato" /></div>
         </div>
          <div className='buttom'>
           <span>Yellow Potatoes</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$254.00 <span className='strock'>$300.00</span></span>
          </div>
      </div>
      
      <div className="maincards">
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={egg} alt="egg" /></div>
         </div>
          <div className='buttom'>
           <span>Yellow Cherry Tomatoes</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$15.00 <span className='strock'>$20.00</span></span>
          </div>
      </div>

      <div className="maincards">
         <div className='maoncardtwo'>
          <span className='newminus'>New</span>
          <div className='imagediv'><img src={Violet} alt="Violet" /></div>
         </div>
          <div className='buttom'>
           <span>Violet Cauliflower</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$10.00</span>
          </div>
      </div>

      <div className="maincards">
         <div className='maoncardtwo'>
          <span className='new'>New</span>
          <div className='imagediv'><img src={cream} alt="cream" /></div>
         </div>
          <div className='buttom'>
           <span>Sorbet Mango Ice Cream</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$79.00 <span className='strock'>$100.00</span></span>
          </div>
      </div>

      <div className="maincards">
         <div className='maoncardtwo'>
          <span className='new'>New</span>
          <div className='imagediv'><img src={Shiso} alt="Shiso" /></div>
         </div>
          <div className='buttom'>
           <span>Shiso Leaves Green</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$360.00 <span className='strock'>$400.00</span></span>
          </div>
      </div>

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
              <div className="maincards">
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={potato} alt="potato" /></div>
         </div>
          <div className='buttom'>
           <span>Yellow Potatoes</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$254.00 <span className='strock'>$300.00</span></span>
          </div>
      </div>
      
      <div className="maincards">
         <div className='maoncardtwo'>
          <span className='new'>-15%</span>
          <div className='imagediv'><img src={egg} alt="egg" /></div>
         </div>
          <div className='buttom'>
           <span>Yellow Cherry Tomatoes</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$15.00 <span className='strock'>$20.00</span></span>
          </div>
      </div>

      <div className="maincards">
         <div className='maoncardtwo'>
          <span className='newminus'>New</span>
          <div className='imagediv'><img src={Violet} alt="Violet" /></div>
         </div>
          <div className='buttom'>
           <span>Violet Cauliflower</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$10.00</span>
          </div>
      </div>

      <div className="maincards">
         <div className='maoncardtwo'>
          <span className='new'>New</span>
          <div className='imagediv'><img src={cream} alt="cream" /></div>
         </div>
          <div className='buttom'>
           <span>Sorbet Mango Ice Cream</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$79.00 <span className='strock'>$100.00</span></span>
          </div>
      </div>

      <div className="maincards">
         <div className='maoncardtwo'>
          <span className='new'>New</span>
          <div className='imagediv'><img src={Shiso} alt="Shiso" /></div>
         </div>
          <div className='buttom'>
           <span>Shiso Leaves Green</span>
          <span><IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /> <IoIosStarOutline /></span>
          <span>$360.00 <span className='strock'>$400.00</span></span>
          </div>
      </div>

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
