
import React from 'react'
import { Header } from './styles'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";



const Headers = () => {
  return (
    <Header>
     <div className='wrapper'>
      <div>
        <span><RiFileList3Line style={{ fontSize: '20px', verticalAlign: 'middle'}}/> Add anything here or just remove it...</span>
      </div>
      <div>
        <span><img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png" alt="USA Flag" style={{ width: '1.2rem', verticalAlign: 'middle' }} /> English <MdOutlineKeyboardArrowDown /></span>
        <span>United State (USD$) <MdOutlineKeyboardArrowDown /></span>
      </div>
     </div>
    </Header>
  )
}

export default Headers
