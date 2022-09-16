import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import SearchPage from "./pages/Search";
import SearchIssues from "./pages/SearchIssues";

function App() {
  return (
    <>
      <Router basename="/git-lad">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/search/issues/:username/:repoName"
            element={<SearchIssues />}
          />

          <Route path="*" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
