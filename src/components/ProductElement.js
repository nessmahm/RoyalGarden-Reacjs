import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import '../utils/styles/button.css'
import {AiOutlineDoubleRight} from 'react-icons/ai'
const Item = styled.li `
width : 250px;
height: 350px;
color : teal;
border-bottom : 2px solid teal;
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


function ProductElement( {element} ) {
  const navigate = useNavigate();
  return (
      <Item  >
     
      <ItemImage src ={element.image[0]} alt={element.name} />
      <Title> {element.name} </Title>
      <Price> {element.price}$ </Price>
      <button className="ViewButton" onClick={() => { navigate(`${element.name.toLowerCase() }/${element.id}`); }}>
          <span >View product </span>
          <span>  <AiOutlineDoubleRight size={15} className="One" /> </span>

      </button>
      
      </Item>

      )

    
}

export default ProductElement