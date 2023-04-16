import React from 'react'
import { useParams } from 'react-router-dom'
import {Tips} from '../assets/Data.js'
import styled from 'styled-components'


const Introduction =styled.div`
background-image: ${ (props) => `url(${props.bg})` };
`

function Tip() {
  const {tip,id} = useParams()
  const article = Tips.articles.filter((t) => t.id==id )[0]
 return (
<div className='page-container tip' >
<Introduction className="introduction" bg={"/"+article.image} >
    <span className='title'>{article.title}</span>

</Introduction>

<div className='article-container'>

<h2 className='intro-text'>{article.introduction}</h2>



{article.content.map((art,index)=>
 <div className='content' key={index}>

   <h3> {art.title} </h3>
   
   <div className="texts">

   {art.text && art.text.map((a,index)=>
   <p key={index}> {a} </p>
   )}
</div>

   { art.image && <img src={"/"+art.image} /> }

 </div>

)}
  
</div>

</div>


    )
}

export default Tip