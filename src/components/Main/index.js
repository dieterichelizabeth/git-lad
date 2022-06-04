import React from "react";
import IntroText from "../IntroText";
import CommitHistory from "../Commits";
import SearchPage from "../Search";
function Main({ currentPage }) {
  const activePage = () => {
    if (currentPage === "View Commit History") {
      return <CommitHistory />;
    }
    if (currentPage === "Search For Repository") {
      return <SearchPage />;
    }
    if (currentPage === null) {
      return <IntroText />;
    }
  };

  return <main>{activePage()}</main>;
}

export default Main;
