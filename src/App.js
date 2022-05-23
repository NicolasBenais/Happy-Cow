import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home/Home";

// Components
// import Header from "./components/Header/Header";

function App() {
  // const [isTokenPresent, setIsTokenPresent] = useState(
  //   Cookies.get("TokenCookie") ? true : false
  // );

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
