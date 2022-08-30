import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./shared/Header";
import Home from "./pages/Home";
import AnimeInfo from "./pages/AnimeInfo";

function App() {
  return (
    <Router className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<AnimeInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
