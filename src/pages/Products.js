import React from 'react'
import { useState, useEffect } from "react";
import {navBarItems} from '../assets/Data.js'
import styled from 'styled-components';
import ProductElement from '../components/ProductElement'
import FilterElement from '../components/FilterElement.js';
import { useParams } from 'react-router-dom'

const Plantspage = styled.div`

`

const FilterBarre  = styled.div `
display : flex ; 
flex-wrap : nowrap ; 
justify-content: center ; 
align-items: center;
margin : 20px;
@media screen and (max-width: 700px) {
  flex-wrap : wrap ; 

}
`
const SubFilter = styled.div`

`

const List = styled.ul`
margin :  10px;
display:flex;
flex-wrap : wrap ; 
 justify-content:center ;

`

function Products() {
  const {product} = useParams()
  const item = navBarItems.filter(i => i.name.toLowerCase()==product.toLowerCase())[0]
  const [subFilter,setsubFilter]=useState(null);
  const [criteria,setcriteria]=useState(null);
  return (

<Plantspage>
      


   
   <FilterBarre  >
   { item.filterList.map((element) => 
    <div  key= {element[0][0]}  onClick={()=> setsubFilter(element) } >
    <FilterElement item={element[0]} sub={false}  />
    </div>
    )}
   
   </FilterBarre>

{ subFilter &&
  <FilterBarre  >
   { subFilter.map((element,index) => 
    index>0 &&
    <div  key= {element[0]}  onClick={()=> setcriteria(element[0]) } >
    <FilterElement item={element} sub={true} />
    </div>
   )}
   
   </FilterBarre>}
   

  
 <List>
    { criteria==null ? 
      item.products.map((p) => 
        <ProductElement product={p} key={p.id} />
        
        )
        : 
        item.products.filter(p => ( p.description.includes(criteria))).map((p) => 
        <ProductElement product={p} key={p.id} />
        )

        
 
    }
  </List> 

</Plantspage>

    )
}

export default Products