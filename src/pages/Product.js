import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {Plants,Pots} from '../assets/Data.js'
import { useState } from "react";

const Container = styled.div`
  display : flex; 
  margin : 50px 100px ;  

`;

const ImgContainer = styled.div`
width:60%;
display:flex;
flex-direction : column;
`;

const MainImg = styled.div `

`;

const ProductImg = styled.img`
  width:100%;
  max-height:500px;
  object-fit: cover;
`;


const Other = styled.div `
display : flex;
flex-wrap : wrap;
`;
const OtherImg=styled.img`
object-fit:cover ; 
width: 30%;


`;
const Details = styled.div`
  padding-left: 50px;
`;
const Name = styled.h1` 
 font-weight: Bold;
 
`;
const Price = styled.span`
font-weight: 100;
font-size: 25px;
margin: 20px 0px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const HeightContainer = styled.div`
display:flex;


`;

const HeightElements = styled.div `
border : solid 1px beige ; 
margin:10px;
width:30px;
text-align:center;
&:hover{
      background-color: #f8f4f4;
  }

`
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  width:100%;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Remove = styled.span`
font-size:40px;
font-weight: 700;
padding-right:5px;
cursor:pointer;


`;

const Add = styled.span`
font-size:35px;
font-weight: 700;
padding:5px;
cursor:pointer;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
function Product() {
  const {product,name,id} = useParams()
  const item = (product == "plants") ? Plants : Pots ; 
  const element = item.products.filter(i =>i.name.toLocaleLowerCase()==name && i.id==id )[0]
  const [images, setImages] = useState(element.image)
  console.log(images)
  return (
<Container>
    <ImgContainer>
      <MainImg>
        <ProductImg src={images[0]}/>
      </MainImg>
      
      <Other>
      { images.map((i)=>
      <OtherImg  src={i} key={i} />
      )}
      </Other>

    </ImgContainer>
     <Details>
        <Name>{element.name}</Name>
        <Price>{element.price}$</Price>
        {product=="pots" ?
       (<FilterContainer>
        <Filter>
              <FilterTitle>Color</FilterTitle>
              {element.colors.map((c)=>
              <FilterColor key={c} color={c[0]} onClick = {()=> setImages(c[1])}/>
              )}
             
        </Filter>
        
        <Filter>
              
              <FilterTitle>height</FilterTitle>
              <FilterSize>
              {element.sizes.map((s)=>

              <FilterSizeOption key={s} >{s}</FilterSizeOption>
              )}
              </FilterSize>
  
        </Filter>
        
        </FilterContainer>)
        : 
        (<FilterContainer>
       
        
          <Filter>
              
              <FilterTitle>Height</FilterTitle>
              <HeightContainer>
              {element.height.map((h)=>

              <HeightElements key={h} >{h}</HeightElements>
              )}
              </HeightContainer>
  
        </Filter>
        
        </FilterContainer>)
        }
        <AddContainer>
            <AmountContainer>
              <Remove>-</Remove>
              <Amount>1</Amount>
              <Add>+</Add>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
     </Details> 
</Container>
  
  )
}
export default Product