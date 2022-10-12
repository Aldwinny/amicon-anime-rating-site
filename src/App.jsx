import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./shared/Header";
import Home from "./pages/Home";
import AnimeInfo from "./pages/AnimeInfo";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const navigate = useNavigate();

  const animeInfoOnClick = (target) => {
    target !== null ? navigate("/info") : navigate("/info/" + target);
  };

  const setDarkModeCallback = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Header isDark={darkMode} darkModeCallback={setDarkModeCallback} />
      <Routes>
        <Route
          path="/"
          element={<Home callbacks={{ AnimeInfo: animeInfoOnClick }} />}
        />
        <Route path="/info" element={<AnimeInfo />} />
      </Routes>
    </>
  );
}

export default App;
