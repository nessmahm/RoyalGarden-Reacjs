import React from 'react'
import {HiOutlineArrowRight} from 'react-icons/hi'
import { IconContext } from "react-icons";
import flower from "../assets/Images/flower.webp"
function Basket({setBasketModalOpen}) {
  return (
  <div className="BasketmodalBackground">
    <div className="modalContainer">

        <div className="titleCloseBtn">    
                 <IconContext.Provider value={{size : "22px" }}>
                    <HiOutlineArrowRight   onClick={() => { setBasketModalOpen(false)  }} />
                 </IconContext.Provider>
        </div>

        <div className="title">
            <p>ITEMS IN YOUR BASKET</p>
        </div>
        
        <div className="elements">

          
           <div className="item-title">
             <p>item Name : </p> 
           </div>

            <div className="itemi">

              <img src={flower}  className="itemimage"/>
              <div className="description">
                <h5> title: </h5>
                <h6> content: </h6>
              </div>
            </div> 
            </div> 
            <div className="footer">
            <button  className="bag" type="submit" onClick={() => { setBasketModalOpen(false)   }} >PROCEED TO BAG </button>
            <span className="continueshooping"  onClick={() => { setBasketModalOpen(false)   }} >Continue Shopping</span>

            
          </div>
    </div>
   </div>

     
      )
}

export default Basket