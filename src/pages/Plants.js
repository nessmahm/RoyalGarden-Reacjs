import React from 'react'
import styled from 'styled-components'
import {plantsData} from '../assets/Data/Data'
import PlantItem from './PlantItem'


function Plants() {
  return (
  
  
    <ul > 
        {
          (plantsData).map ( (items) => 

           
          <ul>
           <p>{items.type}</p>

          
          <PlantItem item={items} key={items.index}/>
           </ul>
      


              )
        }

  </ul>
  
  
    )}
export default Plants