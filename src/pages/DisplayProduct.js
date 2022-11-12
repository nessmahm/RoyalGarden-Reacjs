import React from "react";
import { useParams } from "react-router-dom";
import PlantItem from './PlantItem'
import {plantsData} from '../assets/Data/Data'
import styled from "styled-components";

const Product = styled.div`
display:flex;
width:400px;
align-items: center ; 
justify-content: space-between ;
margin-left:100px;
`

const Image  = styled.img`


`


const Discription = styled.div`
margin-left:50px;

`


function DisplayProduct() {
  const { type , id } = useParams();
  const plant = (plantsData.filter(item => item.type==type ))[0].products; 
   return (
    <Product >
        <Image src={plant[id ].image}   />  
      <Discription>
      <h1>{plant[id ].name}</h1>{" "}
        <h4>{plant[id ].price}</h4>
        <p>Other discriptions</p>
      </Discription>
    </Product> 
  );
}

export default DisplayProduct