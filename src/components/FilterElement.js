import React from 'react'
import styled from 'styled-components'


const Element = styled.figure`
margin : 20px;  
cursor:pointer;

`
const ElementImg = styled.img`
width :90px ;
height : 90px;
border-radius:  50% ;


`
const ElementTitle = styled.figcaption `
font-family : 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ; 
font-size : 18px ; 
text-align : center ;


`
const ElementImgS = styled.img`
width :70px ;
height : 70px;
border-radius:  50% ;

`
const ElementTitleS = styled.figcaption `
font-family : 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ; 
font-size : 14px ; 
text-align : center ;


`
function FilterElement({item,sub}) {
  return !sub ? 
  (
    <Element >
       <ElementImg src={item[1]}  />
       <ElementTitle> {item[0]} </ElementTitle>
    </Element> )

 : (
     
    <Element>
      <ElementImgS src={item[1]} />
      <ElementTitleS> {item[0]} </ElementTitleS>
    </Element>

  )
}

export default FilterElement;
