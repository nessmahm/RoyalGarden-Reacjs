import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/Images/RoyalGarden.png';
import {FaSearch} from 'react-icons/fa'
import {RiShoppingCartFill} from 'react-icons/ri'
import { IconContext } from "react-icons";
import {CgMenuOreos} from 'react-icons/cg';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`

`

function Header() {
  const [menu,setMenu]=useState(false);
  const handleMenu =  () => setMenu(!menu);

  return (
    <div className="header">

    <IconContext.Provider value={{ className : "menu-icon" , size : "29px" }}>
  
    <CgMenuOreos  onClick={handleMenu} />
    
    </IconContext.Provider>
   <Logo to="/"><img src={logo} className="logo"/></Logo>
    
    
    <Navbar  nameclass = {menu   ? "item-list2" : "item-list" } />
  

    <div className="icons">
    <IconContext.Provider value={{size : "22px" }}>
    <FaSearch/>
    <RiShoppingCartFill/>
    </IconContext.Provider>
    </div>
    </div>
    
      )
}

export default Header