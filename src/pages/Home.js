import React from 'react'
import styled from 'styled-components'
import './Home.css'
import logo from '../assets/Images/icons/HomeFront.jpg'


function Home() {
  return (
   <div className="home">
    <img src={logo} /> 
    <h1>Are you ready to make your dream garden   🌱  🌱   !  </h1>
    </div>
    )
}

export default Home