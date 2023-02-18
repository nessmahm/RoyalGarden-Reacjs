import React from 'react'
import styled from 'styled-components'

function FilterElement({item,sub}) {
  return !sub ? 
  (
    <div className='filter-element' >
       <img src={item[1]}  />
       <figcaption> {item[0]} </figcaption>
    </div> )

 : (
     
    <div className='filter-element sup'>
      <img src={item[1]} />
      <figcaption> {item[0]} </figcaption>
    </div>

  )
}

export default FilterElement;
