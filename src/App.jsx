import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./shared/Header";
import Home from "./pages/Home";
import AnimeInfo from "./pages/AnimeInfo";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const navigate = useNavigate();

  const animeInfoOnClick = (event, target) => {
    let testArray = [
      document.querySelector(".carousel-title>div"),
      document.querySelector(".chips"),
    ];

    let el = event.target;

    if (
      el == testArray[0] ||
      el == testArray[1] ||
      testArray[1].contains(el) ||
      testArray[0].contains(el)
    ) {
      return;
    }

    target !== null ? navigate("/info") : navigate("/info/" + target);
  };

  const setDarkModeCallback = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Header isDark={darkMode} darkModeCallback={setDarkModeCallback} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home callbacks={{ AnimeInfo: animeInfoOnClick }} />}
          />
          <Route path="/info" element={<AnimeInfo />} />
          <Route path="/u/genres" element={<ErrorPage />} />
          <Route path="/u/history" element={<ErrorPage />} />
          <Route path="/u/collections" element={<ErrorPage />} />
          <Route path="/u/favorites" element={<ErrorPage />} />
          <Route path="/u/rated" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
