import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import {AiOutlineDoubleRight} from 'react-icons/ai'
function ProductElement( {element} ) {
  const navigate = useNavigate();
  return (
      <div className='product-element plant'  >
     
      <img src ={element.image[0]} alt={element.name} />
      <h3 className="title"> {element.name} </h3>
      <p className="price"> {element.price}$ </p>
      <button className="ViewButton" onClick={() => { navigate(`${element.name.toLowerCase() }/${element.id}`); }}>
          <span >View product </span>
          <span>  <AiOutlineDoubleRight size={15} className="One" /> </span>

      </button>
      
      </div>

      )

    
}

export default ProductElement