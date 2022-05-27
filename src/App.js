import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home/Home";
import Reviews from "./pages/Reviews/Reviews";
import Search from "./pages/Search/Search";

// Components
import Header from "./components/Header/Header";

function App() {
  const [isTokenPresent, setIsTokenPresent] = useState(
    Cookies.get("token") ? true : false
  );

  return (
    <Router>
      <Header
        isTokenPresent={isTokenPresent}
        setIsTokenPresent={setIsTokenPresent}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
