import React from 'react'
import { Link } from 'react-router-dom'
import {navBarItems} from '../assets/Data'
import greenhouse from '../assets/Images/greenhouse.png'
import styled from 'styled-components'


const SLink = styled(Link)`
  &:hover {border-bottom: black solid 2px ; 
  font-size:18px;
  }

`

function Navbar( {nameclass}) {
  return (

   <ul className={nameclass} >
   { navBarItems.map((item)=>
    <SLink to ={item.path} className="item" key={item.index} > {item.name} </SLink>
   
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