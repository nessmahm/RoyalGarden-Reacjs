import React from "react";
import '../utils/styles/style.css';
import Form from 'react-bootstrap/Form';
import {AiFillCloseCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";


function LoginModal ({ setLoginModalOpen,setRegisterModalOpen }) { 
    return (
        <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
          <IconContext.Provider value={{size : "22px" }}>

            <AiFillCloseCircle   onClick={() => { setLoginModalOpen(false);  }} />

          </IconContext.Provider>

          </div>
          <div className="title">
            <h1>LOGIN TO MY ACCOUNT</h1>
          </div>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
        Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>

          <div className="footer">
            <button  className="login"  onClick={() => { setLoginModalOpen(false)   }} type="submit" >LOGIN</button>
            <span className="forgotpassword" >Forgot Your Password?</span>
            <button className="newAccount" onClick={() => { setRegisterModalOpen(true) || setLoginModalOpen(false)   }} >Create a New Account</button>
          </div>
        </div>
      </div>
    );
  }


export default LoginModal