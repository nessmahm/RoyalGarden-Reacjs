import React from 'react'
import './Footer.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/Images/icons/Footer.png'
import fb from '../../assets/Images/icons/FbLogo.png'
import insta from '../../assets/Images/icons/InstaLogo.png'
import whats from '../../assets/Images/icons/WhatsLogo.png'

const Foter = styled.footer `
    height : 200px;
    background-color : #1E4B2D ;
    display:flex;
    align-items : center ;
    justify-content : space-between;
    padding-top: 3em;
    position: relative;
    bottom: 0;
    width: 100%;
`

const Logo = styled.img `
width: 300px ;

`
const Contact = styled.ul `
width: 240px ;
list-style : none;


`

const Location = styled.ul `
width: 200px ;
list-style : none;

`
const Icon = styled.img`
width:20px;


`


function Footer() {
  return (
    <Foter>
    <Logo src={logo}></Logo>
    <Contact>Contact us :
    <li> <Icon src={fb}/> Royal Garden  </li>  
    <li><Icon src={insta}/> Royal_garden</li>
    <li><Icon src={whats}/> +215 34 543 213</li>

    
    </Contact>
    <Location>Locations : 
    <li> Marsa , rue Ibn Khaldoun </li>
    <li> Monastir , Skanes rue 1000</li>
    <li> Djerba , Rue 1293</li>
    </Location>
    </Foter>
  )
}

export default Footer