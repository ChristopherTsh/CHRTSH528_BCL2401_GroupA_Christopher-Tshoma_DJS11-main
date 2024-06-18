import React,{ useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import ApiLayout from "./components/Api/ApiLayout";
import Sidebar from "./Sidebar/Sidebar";
import Favorite from "./components/Favorite/Favorite";
import PodcastDetails from "./components/Api/PodcastDetails";
import './App.css'
import 'font-awesome/css/font-awesome.min.css';


export default function App() {

  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const addToFavorites = (podcast) => {
    setFavorites((prevFavorites) => [...prevFavorites, podcast]);
  };

  const removeFromFavorites = (podcast) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== podcast.id)
    );
  };

  const handleSearch = (term) => {
    if (term === 'A-Z' || term === 'Z-A') {
      setSortOrder(term);
    } else {
      setSearchTerm(term);
    }
  };

  return (
    <Router>
      <div className="app">
        <Header  onSearch={handleSearch} />
         <Sidebar />
          <Routes>
            <Route path="/" element={<ApiLayout addToFavorites={addToFavorites} searchTerm={searchTerm} sortOrder={sortOrder}/>} />
            <Route path="/favorites"
            element={<Favorite favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
            <Route path='/podcast/:id' element={<PodcastDetails />} />
            {/* <Route path='footer' element={<Footer />} /> */}

            {/* <Route index element={<Api />} /> */}
          </Routes>
        </div>
    </Router>
  );
}
