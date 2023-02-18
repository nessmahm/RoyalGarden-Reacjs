import React from 'react'
import { Link } from 'react-router-dom'
import {navBarItems} from '../assets/Data'
import greenhouse from '../assets/Images/greenhouse.png'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

function NavbarModal() {
  const navigate = useNavigate();

  return (

   <ul className="item-list item-list2" >
   { navBarItems.map((item)=>
    <a href={'/'+ item.toLowerCase().replace(/ /g, "") }   className="item" key={item} > <span>{item}</span> </a>   )}

      <div className="logo-list2">
        <img src={greenhouse} alt="img"  />
        <span> Best plant delivery service </span>
      </div>
   


  
   </ul>
  

    )
}

export default NavbarModal ;