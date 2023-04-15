import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const Element = styled.div`
   display : flex; 
    min-height:500px;
    min-height:600px;
    margin-bottom:50px;

 background-color: ${props=>props.couleur || "white "};
 @media screen and (max-width: 700px) {
    flex-wrap: wrap  ; 
}
`

const Span = styled.span `
  color : ${props=>props.couleur || "white "} ;  

`

function Article({article,index}) {
  return (

   index%2 ?
   ( 
   <Element className="element-container" couleur = {article.bg}>
    <div className='img-container'> 
    <img src={article.image} alt="plant-image"/>
 
    </div> 
 
    <div className='description'>
         <h1 className='title'>{article.title}</h1>
         <p className='text'>{article.introduction}</p>
         <a className='link' href={  "./plantcare/" + article.name + "/" + article.id } > <Span couleur={article.linkcolor} > {article.linktext} </Span> </a>
     </div>
      </Element> )
    :
    (<Element  className="element-container" couleur = {article.bg}>
    <div className='description'>
         <h1 className='title'>{article.title} </h1>
         <p className='text'>{article.introduction}</p>
         <a className='link' href={  "./plantcare/" + article.name + "/" + article.id }  > <Span couleur={article.linkcolor} > {article.linktext} </Span> </a>
         
     </div> 

     <div className='img-container'>
    <img src={article.image} alt="plant-image"/>
 
    </div>
   
    </Element>

    ))
}

export default Article