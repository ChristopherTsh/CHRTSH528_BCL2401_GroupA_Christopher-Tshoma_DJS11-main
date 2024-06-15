import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
// import Api from './components/Api/Api';
// import Footer from './components/Footer';
import Home from './Home';

export default function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      
      {/* <Route index element={<Api />} /> */}
      
      
      
    </Route>
    </Routes>
    </BrowserRouter>


  )
}
