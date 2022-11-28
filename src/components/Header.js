import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/Images/RoyalGarden.png';
import {FaSearch} from 'react-icons/fa'
import {RiShoppingCartFill} from 'react-icons/ri'
import { IconContext } from "react-icons";
import {CgMenuOreos} from 'react-icons/cg';
import {FaUserAlt} from 'react-icons/fa'
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import BasketModal from './BasketModal';
import SearchModal from './SearchModal';
const Logo = styled(Link)`

`

function Header() {
  const [menu,setMenu]=useState(false);
  const handleMenu =  () => setMenu(!menu);
  const [loginnmodalOpen, setLoginModalOpen] = useState(false);
  const [RegistermodalOpen, setRegisterModalOpen] = useState(false);
  const [BasketmodalOpen, setBasketModalOpen] = useState(false);
  const [SearchmodalOpen, setSearchModalOpen] = useState(false);

  return (
    <div className="header">

    <IconContext.Provider value={{ className : "menu-icon" , size : "29px" }}>
  
    <CgMenuOreos  onClick={handleMenu} />
    
    </IconContext.Provider>
   <Logo to="/"><img src={logo} className="logo"/></Logo>
    
    
    <Navbar  nameclass = {menu   ? "item-list2" : "item-list" } />
  

    <div className="icons">
    <IconContext.Provider value={{size : "22px" }}>
    <FaSearch className="icon" onClick={() => {
          setSearchModalOpen(!SearchmodalOpen);} }/>
    <RiShoppingCartFill className="icon"  onClick={() => {
          setBasketModalOpen(true);} }  />
    <FaUserAlt className="icon"  onClick={() => {
          setLoginModalOpen(true);} } />
    </IconContext.Provider>
    </div>
    {loginnmodalOpen && <LoginModal setLoginModalOpen={setLoginModalOpen} setRegisterModalOpen={setRegisterModalOpen} />}
    {RegistermodalOpen && <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />}
    {BasketmodalOpen && <BasketModal setBasketModalOpen={setBasketModalOpen} /> }
    {SearchmodalOpen && <SearchModal setSearchModalOpen={setSearchModalOpen} /> }
    </div>
    
    
      )
}

export default Header