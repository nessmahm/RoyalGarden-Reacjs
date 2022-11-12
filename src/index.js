import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import React from 'react'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { ClickMenuProvider } from './utils/context';
import Home from './pages/Home'
import Plants from './pages/Plants'
import DisplayProduct from './pages/DisplayProduct'

import './index.css'

ReactDOM.render(
    <React.StrictMode>
    <ClickMenuProvider>

   <Router>

      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home/>}    />
     
      <Route path="/plants" >
        <Route path="" element={<Plants/>}       />
       <Route path=":type/:id" element={<DisplayProduct/>}  />   

      </Route>
       
      </Routes>
      <Footer/>

  </Router>
  
  </ClickMenuProvider>


</React.StrictMode>,document.getElementById('root')
)
