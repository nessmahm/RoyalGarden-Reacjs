import React from 'react'
import { useParams } from 'react-router-dom'
import {Tips} from '../assets/Data.js'
import styled from 'styled-components'
const Container = styled.div`


`
function Tip() {
  const {tip,id} = useParams()
  const article = Tips.articles.filter((t) => t.id==id )[0].content


 return (
<Container>
 {article.map((a)=>
 <p>
 
 </p>)}
</Container>

    )
}

export default Tip