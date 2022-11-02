import React from 'react'
import { useState, useEffect } from "react";
import {plants} from '../assets/Data.js'
import styled from 'styled-components';
import Product from '../components/Product'
import indoor from '../assets/Images/indoor.jpg'
import outdoor from '../assets/Images/outdoor.jpeg'

const Plantspage = styled.div`

`

const Filterlist = styled.div `
display : flex; 
flex-wrap : nowrap ;
justify-content:center ;
align-items:center;

`
const Filter = styled.div `
  
  margin-left : 10px;

  
  `


const Filterimg = styled.img `
width : 100px;
height:100px;
border-radius:  50% ;



`

const List = styled.ul`
margin :  10px;
display:flex;
flex-wrap : wrap ; 
 justify-content:center ;

`

function Plants() {

     
  return (

<Plantspage>

<Filterlist>
 <Filter > 
    <Filterimg src={indoor} alt="indoor" />
    <span>Indoor</span>
  </Filter>
  <Filter > 
    <Filterimg src={outdoor} alt="outdoor" />
    <span>Outdoor</span>
  </Filter>


 </Filterlist>


 <List>
 {
        plants.map((item) => {
            return ( <Product plant={item} /> )
        }
 )}

 </List>
</Plantspage>

    )
}

export default Plants