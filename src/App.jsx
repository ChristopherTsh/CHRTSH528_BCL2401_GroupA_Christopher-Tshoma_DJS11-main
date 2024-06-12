import React from 'react'
import {BrowerRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';

export default function App(){

  return(
    <BrowerRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      
      
      
    </Route>
    </Routes>
    </BrowerRouter>


  )
}
