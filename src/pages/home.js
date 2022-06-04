import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className="info-text">
        <p>Welcome to git-lad! Here you can search for repositories by</p>
        <ul className="info-text-list">
          <li>👾username</li>
          <li>🛸language</li>
          <li>💫repository name</li>
        </ul>
        <p>You can also view the commit history of a repository</p>
        <p>
          This project uses{" "}
          <span>
            <a
              href="https://docs.github.com/en/rest"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Github’s awesome Rest API!
            </a>
          </span>
        </p>
        <p>
          To get started, Click on the “Search for Repository” option in the nav
          bar to view open issues, or View Commit History to search for a repo
          and it’s commits!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
