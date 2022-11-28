import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Item = styled.li `
width : 250px;
height:350px;
border-bottom : 1px solid #0B9446;
color : #1E4B2D;
list-style: none;
margin:10px;
`

const ItemImage = styled.img `
width : 250px;
height:70%

`

const View = styled.div`
height : 30px;
weidth : 250px;
background-color : #1E4B2D ;
cursor:pointer;
color : white;
margin-bottom:10px;
padding :5px;

`


function ProductElement( {element} ) {
  const navigate = useNavigate();
  return (
      <Item  >
      <ItemImage src ={element.image[0]} alt={element.name} />
      <p> {element.name} </p>
      <p> {element.price} </p>

      <View  onClick={() => { navigate(`${element.name.toLowerCase() }/${element.id}`); }} >
      
      <p>View product </p> 
      </View>
      
      </Item>

      )

    
}

export default ProductElement