import React from 'react'
import { Link } from 'react-router-dom'
import {navBarItems} from '../assets/Data'
import greenhouse from '../assets/Images/greenhouse.png'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

function NavbarModal( {nameclass}) {
  const navigate = useNavigate();

  return (

   <ul className="item-list2" >
   { navBarItems.map((item)=>
    <a onClick={() => { navigate(`/${item.toLowerCase().replace(/ /g, "") }`)  ; }}   className="item" key={item} > {item} </a>

   )}

      <div className="logo-list2">
        <img src={greenhouse} alt="img"  />
        <span> Best plant delivery service </span>
      </div>
   


  
   </ul>
  

    )
}

export default NavbarModal ;