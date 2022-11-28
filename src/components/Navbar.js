import React from 'react'
import { Link } from 'react-router-dom'
import {navBarItems} from '../assets/Data'
import greenhouse from '../assets/Images/greenhouse.png'
import styled from 'styled-components'

function Navbar( {nameclass}) {

  return (

   <ul className={nameclass} >
   { navBarItems.map((item)=>
    <Link to={(`/${item.toLowerCase().replace(/ /g, "") }`)  }   className="item" key={item} > {item} </Link>
   
   )}

    { nameclass=="item-list2" && (
      <div className="logo-list2">
        <img src={greenhouse}  />
        <span> Best plant delivery service </span>
      </div>
    )


    }
   </ul>
  

    )
}

export default Navbar