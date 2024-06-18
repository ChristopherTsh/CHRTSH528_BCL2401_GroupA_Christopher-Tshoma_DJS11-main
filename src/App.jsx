import React,{ useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import ApiLayout from "./components/Api/ApiLayout";
import Sidebar from "./Sidebar/Sidebar";
import Favorite from "./components/Favorite/Favorite";
import './App.css'
import 'font-awesome/css/font-awesome.min.css';


export default function App() {

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (podcast) => {
    setFavorites((prevFavorites) => [...prevFavorites, podcast]);
  };

  const removeFromFavorites = (podcast) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== podcast.id)
    );
  };

  return (
    <Router>
      <div className="app">
        <Header />
         <Sidebar />
          <Routes>
            <Route path="/" element={<ApiLayout addToFavorites={addToFavorites}/>} />
            <Route path="/favorites"
            element={<Favorite favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
            {/* <Route path='/ApiLayout.jsx' element={<ApiLayout />} /> */}
            {/* <Route path='footer' element={<Footer />} /> */}

            {/* <Route index element={<Api />} /> */}
          </Routes>
        </div>
    </Router>
  );
}
