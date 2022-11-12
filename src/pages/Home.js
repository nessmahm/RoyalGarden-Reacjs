import React from 'react'
import { Link } from 'react-router-dom'
import plant1 from '../assets/Images/plant1.webp'
import plant2 from '../assets/Images/plant2.jpg'
import styled from 'styled-components'

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
const Article = styled.div `
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

 
const LinkB = styled(Link)`
color : ${props=>props.couleur || "white "}
`

function Home() {
  return (

    <Container>

   {/*first article */}
   <Element couleur = "#faf7f2">
   
   
   <ImageContainer>
   <Plantimg src={plant1} alt="plant-image"/>

   </ImageContainer>

   <Article>
        <Title>The Benefits of Houseplants : </Title>
        <Text>Not only do indoor plants enhance the overall appearance of a space, but studies show they boost moods, increase creativity, reduce stress, and eliminate air pollutants—making for a healthier, happier you.</Text>
        <LinkB to='/' oculeur="#856e51" >Read more</LinkB>
    </Article>
   

  </Element>
  
 {/* second article */}
 <Element couleur = "#f0f6fb">
   
    <Article>
        <Title>How to Keep Potted Plants Alive : </Title>
        <Text>While the rules for all plants are fairly similar, they will differ slightly depending on the environment your plant is going to be living in. If you’re mostly wondering how to take care of potted indoor plants, then this is the section for you. Here are our best tips to keep houseplants alive:</Text>
        <LinkB to='/' couleur="#7f7d7a" >Here</LinkB>
    </Article>
    <ImageContainer>
    <Plantimg src={plant2} alt="plant-image"/>
   </ImageContainer>

  </Element>
    
    
    </Container>
  )
}

export default Home