import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./shared/Header";

function App() {
  return (
    <Router className="container">
      <Header />
      <Routes>
        <Route path="/" element={<p>Herllo</p>} />
      </Routes>
    </Router>
  );
}

export default App;
