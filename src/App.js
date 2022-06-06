import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";
import SearchIssues from "./pages/SearchIssues";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/search/issues/:username/:repoName"
            element={<SearchIssues />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
