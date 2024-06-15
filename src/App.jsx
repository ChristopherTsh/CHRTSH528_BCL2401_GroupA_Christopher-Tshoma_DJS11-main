import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Api from './components/Api/Api';

export default function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Api />} />
      
      
      
    </Route>
    </Routes>
    </BrowserRouter>


  )
}
