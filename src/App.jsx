import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
// import ApiLayout from './components/Api/ApiLayout';
// import Footer from './components/Footer';
import Home from './Home';

export default function App(){

  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Layout" element={<Layout />} />
      {/* <Route path='/ApiLayout.jsx' element={<ApiLayout />} /> */}
      {/* <Route path='footer' element={<Footer />} /> */}

      
      {/* <Route index element={<Api />} /> */}
      
      
      
    {/* </Route> */}
    </Routes>
    </Router>


  )
}
