import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {Plants,Pots} from '../assets/Data.js'
import { useState,useEffect ,useContext} from "react";
import {CountProductsContext} from '../utils/CountContext'

const Container = styled.div`
  display : flex; 
  margin : 120px 10% 50px 10%;  
`;

const ImgContainer = styled.div`
max-width:60%;
display:flex;
flex-direction : column;
height:100%
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
margin:3px;


`;
const Details = styled.div`
  padding-left: 5%;
  width:50%;
`;
const Name = styled.h1` 
   font-weight: 900;
    line-height: 1.215;
    margin-top: 0;
    color: #313232;
    font-family: "Untitled Serif",Georgia,Moderat,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-style: normal;
`;
const Price = styled.span`
font-weight: 100;
font-size: 25px;
font-weight: 500;
font-family: "Untitled Serif",Georgia,Moderat,Helvetica Neue,Helvetica,Arial,sans-serif;
font-style: normal;
color: #313232;

`
const FilterContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
`;
const Filter = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top : 10px;
  `

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  width:75px;
  height:35px;
  text-align: center;
  
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
flex-wrap: no-wrap;
Height:30px;


`;

const HeightElements = styled.div `
border : solid 1px beige ; 
margin: 0 10px;
width:30px;
font-weight:500;
text-align:center;
&:hover{
      background-color: #f8f4f4;
  }

`
const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  width:100%;
  
`;

const Amount = styled.span`
  width: 50px;
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
padding-bottom:9px;
cursor:pointer;


`;

const Add = styled.span`
font-size:35px;
font-weight: 700;
padding:5px;
cursor:pointer;
padding-bottom:9px;

`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid white ;
  background-color: teal ;
  color:white;
  cursor: pointer;
  width:100%;
  font-weight: 500;

  &:hover{
    background-color: #4c9d96;
    font-size :18px;
  }
`;
function Product() {
  const {product,name,id} = useParams()
  const item = (product == "plants") ? Plants : Pots ; 
  const element = item.products.filter(i =>i.name.toLocaleLowerCase()==name && i.id==id )[0]
  const [images, setImages] = useState(element.image)
  const [count, setcount] = useState(1)
  useEffect(() => {
  });
  const {countProducts,setcountProducts} = useContext(CountProductsContext);

  
return (
<Container >

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
              <FilterTitle>Color :</FilterTitle>
              {element.colors.map((c)=>
              <FilterColor key={c} color={c[0]} onClick = {()=> setImages(c[1])}/>
              )}
             
        </Filter>
        
        <Filter>
              
              <FilterTitle>Height : </FilterTitle>
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
              
              <FilterTitle>Height :</FilterTitle>
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
              <Remove onClick={  ()=> count>0 ? setcount(count-1) : true}>-</Remove>
              <Amount>{count}</Amount>
              <Add onClick={ ()=> setcount(count+1) } >+</Add>
            </AmountContainer>
            <Button onClick={()=> setcountProducts(countProducts+count)  }>ADD TO CART</Button>
          </AddContainer>
     </Details> 
</Container>
  
  )
}
export default Product