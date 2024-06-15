import React from 'react'
import {BrowerRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Api from './components/Api/Api';

export default function App(){

  return(
    <BrowerRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Api />} />
      
      
      
    </Route>
    </Routes>
    </BrowerRouter>


  )
}
