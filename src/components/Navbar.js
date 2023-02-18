import React from 'react'
import { Link } from 'react-router-dom'
import {navBarItems} from '../assets/Data'
import greenhouse from '../assets/Images/greenhouse.png'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

function Navbar( ) {
  const navigate = useNavigate();

  return (

   <ul className="item-list" >
   { navBarItems.map((item)=>
    <a href={'/'+ item.toLowerCase().replace(/ /g, "") }   className="item"  key={item} > <span>{item}</span> </a>   )}
   </ul>
  

    )
}

export default Navbar