import React from 'react'
import { useParams } from 'react-router-dom'
import {Tips} from '../assets/Data.js'
import styled from 'styled-components'

const Container = styled.div`

`


const Introduction =styled.div`
width:100%;
display:flex;

`
const Bande = styled.div`
display:flex;
height:400px;
width:100%;
opacity:80%;
`
const Title = styled.p`
    font-family: "proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 200;
    font-size: 60px;
    font-family: proxima-nova;
    font-style: normal;
    letter-spacing: 4px;
    text-transform: uppercase;
    line-height: 1em;
    -webkit-transform: translatez(0);
    text-decoration: none;
    color: #fff;
    text-align: center ;
    margin :  auto 0 ;
    width: 100%;
    padding:0 10%;
`
const ArticlContainer =styled.div`
display:flex;
flex-wrap:wrap;
width: auto;
    margin: auto;
    max-width: 1020px;
    padding: 96px 32px;

`

const IntroImg = styled.img`
width:100%;
max-height:400px;
object-fit : cover ;
position:absolute;
z-index:-1;


`
const IntroText =styled.p`
    font-family: "proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-family: adobe-garamond-pro;
    font-weight: 700;
    font-style: normal;
    font-size: 20px;
    letter-spacing: 0px;
    line-height: 1.6em;
    color: rgba(26,26,26,.7);`

const Content = styled.div`
display:flex;
width:100%;
flex-direction : column ;

`
const SousTitle = styled.h3`
    font-family: "proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 20px;
    font-family: adobe-garamond-pro;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0px;
    line-height: 1.6em;
    color: rgba(29,29,29,.75);

`
const Texts =styled.div``
const Text =styled.p`
    font-family: "proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-family: adobe-garamond-pro;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    letter-spacing: 0px;
    line-height: 1.6em;
    color: rgba(26,26,26,.7);`
const ContentImg=styled.img`
max-height:500px;
object-fit : cover ;
margin-bottom:15px;
`


function Tip() {
  const {tip,id} = useParams()
  const article = Tips.articles.filter((t) => t.id==id )[0]
  console.log(article.content)
 return (
<Container>
<Introduction>
   <Bande>
    <IntroImg src={article.image}/>
    <Title>{article.title}</Title>
   </Bande> 
</Introduction>

<ArticlContainer>

<IntroText>{article.introduction}</IntroText>



{article.content.map((art,index)=>
 <Content key={index}>

   <SousTitle> {art.title} </SousTitle>
   
   <Texts>

   {art.text && art.text.map((a,index)=>
   <Text key={index}> {a} </Text>
   )}
</Texts>

   { art.image && <ContentImg src={art.image} /> }

 </Content>

)}
  
</ArticlContainer>

</Container>


    )
}

export default Tip