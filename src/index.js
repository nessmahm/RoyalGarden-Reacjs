import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Products from './pages/Products.js'
import Product from './pages/Product.js'
import PlantCare from './pages/PlantCare.js'
import Gifts from './pages/Gifts.js'
import Tip from './pages/Tip.js'
import './style.css';
import Home from './pages/Home'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/:product">
       <Route path=""    element={<Products/>} />
       <Route path=":name/:id" element={<Product/>}    />
    </Route>
    
    
    <Route path="/plantcare">
       <Route path="" element={<PlantCare/>}/>
       <Route path=":tip/:id" element={<Tip/>} />
    </Route>

    <Route path="/gifts" element={<Gifts/>}    />

    </Routes>
    <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();