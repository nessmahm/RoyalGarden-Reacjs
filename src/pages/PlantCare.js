import React from 'react'
import styled from 'styled-components'
import Article from '../components/Article.js'
import {Tips} from '../assets/Data.js'
const Container = styled.div `
 display: grid;
  grid-template-columns: auto;
  `

export default function Plantcare() {
  return (
<Container className='page-container'>
{Tips.articles.map((element,index)=>
<Article article={element} index={index} key={element.id} />

)}
</Container> 
 )
}
