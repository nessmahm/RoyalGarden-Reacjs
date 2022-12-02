import React from 'react'
import { Link } from 'react-router-dom'
import plant1 from '../assets/Images/plant1.webp'
import plant2 from '../assets/Images/plant2.jpg'
import styled from 'styled-components'
import Article from '../components/Article'
import {Tips} from '../assets/Data.js'

const Container = styled.div `
 display: grid;
  grid-template-columns: auto;
  `


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
}

`


const Title = styled.h1`
color :black;
`
const Text = styled.p`
color :black;
font-size:18px;

`

 
const LinkB = styled(Link)`
color : ${props=>props.couleur || "white "}
`

function Home() {
  return (

    <Container  className='page-container'>


  

   <Article article={Tips.articles[0]} index={0} key={Tips.articles[0].id} />

   

  
 {/* second article */}
   
 <Article article={Tips.articles[1]} index={1} key={Tips.articles[1].id} />


    
    
    </Container>
  )
}

export default Home