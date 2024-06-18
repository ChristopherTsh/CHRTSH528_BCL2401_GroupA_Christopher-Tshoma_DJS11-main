import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Header/Header';
// import ApiLayout from './components/Api/ApiLayout';
// import Footer from './components/Footer';
import Home from './Home';
import Sidebar from './Sidebar/Sidebar';

export default function App(){

  return(
    <Router>
      <Header />
      <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/sidebar" element={<Sidebar />} /> */}
      {/* <Route path='/ApiLayout.jsx' element={<ApiLayout />} /> */}
      {/* <Route path='footer' element={<Footer />} /> */}

      
      {/* <Route index element={<Api />} /> */}
      
      
      
    {/* </Route> */}
    </Routes>
    </Router>


  )
}
