import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { fontFamily } from '@mui/system';

const Item = styled.li `
width : 250px;
height: 350px;
color : #1E4B2D;
border-bottom : 2px solid #0B9446;
display:flex;
flex-direction:column;
list-style: none;
margin:20px 10px;

`

const ItemImage = styled.img `
width : 100%;
height:60%;
margin-bottom:5px;
object-fit : cover ;


`
const Title = styled.p`
    margin: 0.3em;
    line-height: 1;
    word-wrap: break-word;
    font-size: 1.25rem;
    font-family: "Untitled Serif",Georgia,Moderat,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #313232;
    text-rendering: optimizeLegibility;
`
const Price = styled.p `
    line-height: 1.4;
    text-rendering: optimizeLegibility;
    font-family: "Untitled Serif",Georgia,Moderat,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 1.2rem;
    margin:  0.2em 0.3em ;

    `;

const View = styled.p`
height : 30px;
weidth : 100%;
font-weight: 700;
background-color : #1E4B2D ;
cursor:pointer;
color : white;
padding-left:20px;
border-radius: 30px;`


function ProductElement( {element} ) {
  const navigate = useNavigate();
  return (
      <Item  >
     
      <ItemImage src ={element.image[0]} alt={element.name} />
      <Title> {element.name} </Title>
      <Price> {element.price}$ </Price>
      <View  onClick={() => { navigate(`${element.name.toLowerCase() }/${element.id}`); }}>View product </View>
      
      </Item>

      )

    
}

export default ProductElement