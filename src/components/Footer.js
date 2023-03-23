import React from 'react'
import styled from 'styled-components'
import {GrMail} from 'react-icons/gr'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'

const FooterX=styled.footer `
  background-color:#dbd4c8;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px 2em;
  width: 100%;
  bottom : 0;
  justify-content:center;
  align-items:center;


`
function Footer() {
  return (
<FooterX>

<ul >
<li>About</li>
<li><a href="/">About SecretGarden</a></li>
<li><a href="/">Plant care</a></li>
<li><a href="/">FAQ</a></li>
<li><a href="/">Contact</a></li>
<li><a href="/">Careers</a></li>

</ul>
{/* ----- */}

<ul >
<li>Terms</li>
<li><a href="/">Service</a></li>
<li><a href="/">Privacy Policy</a></li>
<li><a href="/">Returns and Delivery</a></li>
<li><a href="/">Cookies</a></li>
</ul>
{/* ----- */}

<ul className="SocialMedia">

<li>Sicial medias</li>
<li><IoLogoWhatsapp/></li>
<li><AiFillInstagram/></li>
<li><BsFacebook/></li>
<li><GrMail/></li>

</ul>

  
</FooterX>


    )
}

export default Footer