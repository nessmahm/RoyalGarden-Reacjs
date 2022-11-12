import React from 'react'
import styled from 'styled-components'
import { Link,Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const List = styled.ul`
display:flex;
flex-wrap : wrap ; 
justify-content:space-between ;


`

const Item = styled.li `
width : 250px;
height:100%;
border-bottom : 1px solid #0B9446;
color : #1E4B2D;


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

`


function PlantItem( {item} , {key}) {
  const navigate = useNavigate();
  //const item = items.products;
  return (
    <List  key={key} > 
      { ( item.products ) .map((plant)=>
      <Item key={plant.id} >
      <ItemImage src ={plant.image} alt={plant.image} />
      <p> {plant.name} </p>
      <p> {plant.price} </p>
      <View onClick={() => { navigate(`/plants/${item.type}/${plant.id}`);
              }} >
      <p>View product </p> 
      </View>
      
      </Item>

      )

      }
    </List>  )
}

export default PlantItem