import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";




const Item = styled.li `
width : 250px;
height:100%;
border-bottom : 1px solid #0B9446;
color : #1E4B2D;
list-style: none;
margin:10px;
`
const ItemImage = styled.img `
width : 250px;
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


function Product( {plant} ) {
  const navigate = useNavigate();
  //const item = items.products;
  return (
      <Item key={plant.id} >
      <ItemImage src ={plant.image} alt={plant.image} />
      <p> {plant.name} </p>
      <p> {plant.price} </p>
      <View onClick={() => { navigate(`` );
              }} >
      <p>View product </p> 
      </View>
      
      </Item>

      )

    
}

export default Product