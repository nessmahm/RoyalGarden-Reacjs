import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import basket from '../assets/Images/icons/basketicon.png'
import home from '../assets/Images/icons/titre.png'
import list from '../assets/Images/icons/listicon.png'
import login from '../assets/Images/icons/Loginicon.png'
import close2 from '../assets/Images/icons/close2.png'
import SubMenu from './SubMenu.js'
import loop from '../assets/Images/icons/loop.png'
import './Components.css'
import {SidebarData} from '../assets/Data/Data'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CSSTransition } from 'react-transition-group'

const LoopLogo = styled.img`
height : 20px;
padding-left:10px;
`


const Navbarr = styled.nav`
  background-color : #1E4B2D ;
  height : 80px; 
  display : flex;
  align-items : center ;
  justify-content : space-between;
  transition: 0.3s background-color;
`


const MenuList = styled.nav `
    margin-top:28px;
    width:200px;
    background-color:#73E680;
    position : absolute;
    diplay:flex;
`


const MenuItems= styled.ul `
   list-style : none;
   margin:0;
   padding:0;
   display:flex;
   flex-direction : column;
   justify-content:center;
   align-items:center;
   cursor:pointer;
   transition-duration: 1s;

`


const HomeLogo = styled.img`
  height : 50px;
  cursor:pointer;

  
  `

const LoginLogo = styled.img`
  height : 30px;
  margin-right:50px;
  margin-top:10px;
  cursor:pointer;

`

const BasketLogo = styled.img`
  height : 40px;

align-items:end;
cursor:pointer;


`

const ListLogo = styled.img`
  height : 18px;
  margin-left:50px;
  cursor:pointer;


  
`
const CloseLogo = styled.img`
height : 18px;
margin-left:10px;
cursor:pointer;

`
const CloseLogo2 = styled.img`
height : 18px;
padding-left:290px;
cursor:pointer;

`
const SideWindow = styled.div `
background-color:#73E680;
right :0;
top:0;
width:350px;
height:100%;
position:absolute;
padding:20px;
border-radius : 0 0 0 20px;




`
const Text = styled.span`
font-family: Gabriola  ;
text-decoration : none ;
color : #4B610E;
font-size : 28px;
`
const Text2 = styled.span`
font-family: Gabriola  ;
text-decoration : none ;
color : #2C3907;
font-size : 20px;
`

function Navbar() {

  const [clickMenu,setClickMenu]=useState(false);
  const toggleMenu = () =>  {
    setClickMenu(!clickMenu);
  }

  const [clickLogin,setLogin]=useState(false);
  const toggleLogin = () =>  {
    setLogin(!clickLogin);
  }
  const [clickBasket,setBasket]=useState(false);
  const toggleBasket = () =>  {
    setBasket(!clickBasket);
  }
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);

  return ( 
   <>  

    <Navbarr >
    
    <div className='grp1'>
  {!clickMenu && (
        <ListLogo src={list} onClick={toggleMenu}  />
     )}


      {clickMenu && (
        <div  >
        <ListLogo src={list}  onClick	={toggleMenu}  />
    
    <MenuList  onMouseLeave={toggleMenu}	>
   
    <LoopLogo src={loop}/>
    <input type="text" id="search" name="search" placeholder='searching' ></input>
   
    <MenuItems>  
    
      {
        SidebarData.map((item,index) => 
        {
          return ( <SubMenu item={item}  key={index} />)
        })
      }

    </MenuItems>
    </MenuList>

    </div>
     )}

      </div>

    <div className ='grp2'>
     <Link to="/">
        <HomeLogo src={home} />
      </Link>
    </div>
      <div className='grp3'>
      
      <Link to="">
        <BasketLogo src={basket} onClick={toggleBasket}/>
      </Link>


      <Link to="">
        <LoginLogo src={login} onClick={toggleLogin}  />
      </Link>
      </div>
      
     </Navbarr>


       
     {clickLogin && (
      <SideWindow>
      <CloseLogo2 src={close2} onClick={toggleLogin}  />

        <Text>Hi There ! </Text>
        <Text>Log in with email </Text>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Text2>Email address</Text2>
        <Form.Control type="email" placeholder="Enter email" />
        <Text2>
          We'll never share your email with anyone else.
        </Text2>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Text2>Password</Text2>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      </SideWindow>

     )}
 
      { clickBasket && (
        

        <SideWindow>
        <CloseLogo2 src={close2} onClick={toggleBasket}  />

          Your Basket is empty !! 
          
          
        </SideWindow>
      )

      }


     </>

  )
}

export default Navbar