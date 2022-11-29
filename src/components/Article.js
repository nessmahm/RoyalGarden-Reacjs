import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const Element = styled.div`
 display : flex; 
 min-height:500px;
 min-height:600px;
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


`
const Description = styled.div `
margin:  auto 20px ;

@media screen and (max-width: 700px) {
width:100%;
margin : 30px;

}

`
const Title = styled.h1`
    font-family: "Untitled Serif",Georgia,Moderat,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #313232;
    text-rendering: optimizeLegibility;`
    
const Text = styled.p`
    color :black;
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
`

const Link = styled.div`

`
const LinkB = styled.a`
padding:10px;
&:hover{
cursor: pointer;
padding:0px;
color : ${props=>props.couleur || "white "} ;
font-size:18px;
} 
fony-weight:bold;
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
         <Link>
         <LinkB onClick={() => { navigate(`/plantcare/${article.name}/${article.id}`); }}  couleur={article.linkcolor} >{article.linktext}</LinkB>
         </Link>
     </Description> 
     <ImageContainer>
    <Plantimg src={article.image} alt="plant-image"/>
 
    </ImageContainer>
   
    </Element>

    ))
}

export default Article