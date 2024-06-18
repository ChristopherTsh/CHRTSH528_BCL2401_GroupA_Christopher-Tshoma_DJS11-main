import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import ApiLayout from "./components/Api/ApiLayout";
// import Footer from './components/Footer';
// import Home from './Home';
import Sidebar from "./Sidebar/Sidebar";
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<ApiLayout />} />
            {/* <Route path="/sidebar" element={<Sidebar />} /> */}
            {/* <Route path='/ApiLayout.jsx' element={<ApiLayout />} /> */}
            {/* <Route path='footer' element={<Footer />} /> */}

            {/* <Route index element={<Api />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
