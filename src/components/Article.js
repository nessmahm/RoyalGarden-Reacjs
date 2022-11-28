import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Element = styled.div`
 display : flex; 
 background-color: ${props=>props.couleur || "white "};
 margin-bottom:50px;


  @media screen and (max-width: 700px) {
    flex-wrap: wrap  ; 
  
}
`
const ImageContainer = styled.div `
height: 100%;
min-width: 60%;
  @media screen and (max-width: 700px) {
    width: 100%;
    max-height: 350px;
  
}

`
const Plantimg = styled.img `

  width: 100%;
  height: 100%;
  object-fit : cover ;
}

`
const Description = styled.div `
margin:  auto 20px ;

@media screen and (max-width: 700px) {
width:100%;
margin : 30px;

}

`
const Title = styled.h1`
color :black;
`
const Text = styled.p`
color :black;
font-size:18px;

`

 
const LinkB = styled.a`

&:hover{
cursor: pointer;
color : ${props=>props.couleur || "white "} ;
font-size:18px;
} 

color : ${props=>props.couleur || "white "}
`
function Article({article,index}) {
  const navigate = useNavigate();

  return (

   index%2 ?
   ( 
   <Element couleur = {article.bg}>
    <ImageContainer> 
    <Plantimg src={article.image} alt="plant-image"/>
 
    </ImageContainer> 
 
    <Description>
         <Title>{article.title} </Title>
         <Text>{article.introduction}</Text>
         <LinkB onClick={() => { navigate(`/plantcare/${article.name}/${article.id}`); }}  couleur={article.linkcolor} >{article.linktext}</LinkB>
     </Description>
      </Element> )
    :
    (<Element couleur = {article.bg}>
    <Description>
         <Title>{article.title} </Title>
         <Text>{article.introduction}</Text>
         <LinkB onClick={() => { navigate(`/plantcare/${article.name}/${article.id}`); }}  couleur={article.linkcolor} >{article.linktext}</LinkB>
     </Description> 
     <ImageContainer>
    <Plantimg src={article.image} alt="plant-image"/>
 
    </ImageContainer>
   
    </Element>

    ))
}

export default Article