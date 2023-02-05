import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { IconContext } from "react-icons";

function SearchModal(setSearchModalOpen) {
  return (
    <div className="SearchmodalBackground">
        <div className="modalContainer">
            <div className="el">
             <div className="searchInputs">
                <input type="text" 
                        placeholder="Search by plant name, plant type or space in your home "
                 />
        
                <div className="searchIcon">
                <IconContext.Provider value={{size : "20px" }}>

                    <FaSearch />
                </IconContext.Provider>

                </div>
            </div>
            <div className="results">
                <ul>
                    Recent
                    <li>Hi</li>
                    <li>Hi</li>

                </ul>
                <ul>Popular
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>

                </ul>
            </div>
        </div>
        
        </div>
    </div> 
     
)}

export default SearchModal