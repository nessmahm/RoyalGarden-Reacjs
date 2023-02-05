import React from 'react'
import Navbar from './Navbar'
import NavbarModal from '../modal/NavbarModal'
import logo from '../assets/Images/RoyalGarden.png';
import {FaSearch} from 'react-icons/fa'
import {FaShoppingBag} from 'react-icons/fa'
import { IconContext } from "react-icons";
import {CgMenuOreos} from 'react-icons/cg';
import {FaUserAlt} from 'react-icons/fa'
import { useState ,useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginModal from '../modal/LoginModal';
import RegisterModal from '../modal/RegisterModal';
import BasketModal from '../modal/BasketModal';
import SearchModal from '../modal/SearchModal';
import {CountProductsContext} from '../utils/CountContext'
const Logo = styled(Link)`

`

function Header() {
  const [menu,setMenu]=useState(false);
  const handleMenu =  () => setMenu(!menu);
  const [loginnmodalOpen, setLoginModalOpen] = useState(false);
  const [RegistermodalOpen, setRegisterModalOpen] = useState(false);
  const [BasketmodalOpen, setBasketModalOpen] = useState(false);
  const [SearchmodalOpen, setSearchModalOpen] = useState(false);
  const {countProducts} = useContext(CountProductsContext);

  return (
    <div className="header">

    <IconContext.Provider value={{ className : "menu-icon" , size : "29px" }}>
  
    <CgMenuOreos  onClick={handleMenu} />
    
    </IconContext.Provider>
   <Logo to="/"><img src={logo} className="logo"/></Logo>
    
    
    <Navbar/>
    {menu && <NavbarModal/> }
  

    <div className="icons">
    <IconContext.Provider value={{size : "22px" }}>
    <FaSearch className="icon" onClick={() => {
          setSearchModalOpen(!SearchmodalOpen);} }/>
   
    <div className="Basket">
    <div className="Badge"><p>{countProducts}</p></div>
    <FaShoppingBag className="icon"  onClick={() => {
          setBasketModalOpen(true);} }  />
   </div>
   
    <FaUserAlt className="icon"  onClick={() => {
          setLoginModalOpen(true);} } />
    </IconContext.Provider>
    </div>
    {loginnmodalOpen && <LoginModal  setLoginModalOpen={setLoginModalOpen} setRegisterModalOpen={setRegisterModalOpen} />}
    {RegistermodalOpen && <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />}
    {BasketmodalOpen && <BasketModal setBasketModalOpen={setBasketModalOpen} /> }
    {SearchmodalOpen && <SearchModal setSearchModalOpen={setSearchModalOpen} /> }
    </div>
    
    
      )
}

export default Header