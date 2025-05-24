import React from 'react'
import { Navbutton } from './styles'
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  return (
    <Navbutton>
      <ul>
        <li>Home <IoIosArrowDown /></li>
        <li>Shops <IoIosArrowDown /></li>
        <li>Product <IoIosArrowDown /></li>
        <li>Collections <IoIosArrowDown /></li>
        <li>Pages <IoIosArrowDown /></li>
        <li>Blog <IoIosArrowDown /></li>
        <li>Contact Us</li>
      </ul> 
    </Navbutton>
  )
}

export default Navigation
