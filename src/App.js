import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home/Home";
import Reviews from "./pages/Reviews/Reviews";
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Favorites
const initFavorites = (key) => {
  const favorites = localStorage.getItem(key);
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

function App() {
  const [isTokenPresent, setIsTokenPresent] = useState(
    Cookies.get("token") ? true : false
  );

  const [favorites, setFavorites] = useState(initFavorites("favorites"));

  // Add an item to favorites
  const addToFavorites = (itemId) => {
    const newFavorites = [...favorites];
    newFavorites.push(itemId);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  // Remove an item from favorites
  const removeFromFavorites = (favoriteId) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite !== favoriteId
    );
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <Router>
      <Header
        isTokenPresent={isTokenPresent}
        setIsTokenPresent={setIsTokenPresent}
        favorites={favorites}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="/reviews"
          element={
            <Reviews
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
