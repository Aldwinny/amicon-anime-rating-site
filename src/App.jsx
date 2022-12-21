import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./shared/Header";
import Home from "./pages/Home";
import AnimeInfo from "./pages/AnimeInfo";
import { useEffect, useState, useRef } from "react";
import ErrorPage from "./pages/ErrorPage";

import { PALETTE, setPalette } from "./shared/Palette";

function App() {
  let mode = useRef(null);

  // Resolve dark mode from localStorage (in order to persist across reloads & provide uniqueness to the user PC)
  if (mode.current === null) {
    let ls = localStorage.getItem("mode");

    mode.current =
      ls ??
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
        ? PALETTE.DARK
        : PALETTE.LIGHT);

    setPalette(mode.current);

    if (ls === null) {
      localStorage.setItem("mode", mode.current);
    }
  }

  useEffect(() => {
    console.log("Hello!");
  });

  const [darkMode, setDarkMode] = useState(mode.current);

  const setDarkModeCallback = () => {
    if (darkMode === PALETTE.LIGHT) {
      localStorage.setItem("mode", PALETTE.DARK);
      setPalette(PALETTE.DARK);
      setDarkMode(PALETTE.DARK);
    } else {
      localStorage.setItem("mode", PALETTE.LIGHT);
      setPalette(PALETTE.LIGHT);
      setDarkMode(PALETTE.LIGHT);
    }
  };

  const navigate = useNavigate();

  const animeInfoOnClick = (event, target) => {
    let testArray = [
      document.querySelector(".carousel-title>div"),
      document.querySelector(".chips"),
    ];

    let el = event.target;

    if (
      el === testArray[0] ||
      el === testArray[1] ||
      testArray[1].contains(el) ||
      testArray[0].contains(el)
    ) {
      return;
    }

    target !== null ? navigate("/info") : navigate("/info/" + target);
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
