import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";
import SearchIssues from "./pages/SearchIssues";
import CommitHistory from "./pages/CommitHistory";

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
          <Route path="/commits" element={<CommitHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
