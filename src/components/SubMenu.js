import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Items = styled(Link) `
height :60px;
width:200px;
border-bottom : 1px solid #0B9446;
line-height:50px;
text-align:center;
margin:0px;
padding-top : 10px;
font-family: Gabriola  ;
text-decoration : none ;
color : #1E4B2D;
font-size : 20px;
&:hover , &:focus  ,&:active  {
  background-color:#59E369;
  font-size : 23px;
  color : #1E4B2D;

 }
 &:active {
  border-bottom : none;
 }
 
`
const SubItems = styled(Link) `
height :30px;
border-bottom : 1px solid #0B9446;
line-height:25px;
text-align:center;
margin:0px;
padding-top : 5px;
font-family: Gabriola  ;
text-decoration : none ;
color : #1E4B2D;
font-size : 18px;

&:hover , &:focus ,&:active  {
  color : #1E4B2D;

  font-size : 20px;
 }
`


const SubMenu = ({item}) => {

    const [subnav,setSubnav]=useState(false);
    const showSubnav = () => setSubnav(!subnav) 

  return (
    <>
    
    <Items to={item.path} onMouseOver={item.subNav && showSubnav} >
            <div>
              <span>{item.title}</span>
           
            </div>
           
    </Items>
    
        { subnav && item.subNav.map((item,index) => {
            return (
            <SubItems to={item.path} key={index}>
             
             <span>{item.title}</span>
    
            </SubItems>
            )
        }

         )}    

        </>

   )
}

export default SubMenu 