import React from 'react'
import Form from 'react-bootstrap/Form';
import {AiFillCloseCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";

function RegisterModal({setRegisterModalOpen }) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
        
                 <IconContext.Provider value={{size : "22px" }}>
                    <AiFillCloseCircle   onClick={() => { setRegisterModalOpen(false);  }} />
                 </IconContext.Provider>
            </div>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
  
        <Form.Control type="text" placeholder="Your Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
  
        <Form.Control type="email" placeholder="Your Email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Repeat your password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree all statements in Terms of service" />
      </Form.Group>
    </Form>

          <div className="footer">
            <button  className="login" type="submit" onClick={() => { setRegisterModalOpen(false)   }} >REGISTER</button>
            
          </div>
        </div>
      </div>
    
  )
}

export default RegisterModal