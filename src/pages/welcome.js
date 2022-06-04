import React from "react";
import logo from "../icons8-github.svg";

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <p>GitLad</p>
        <p className="margin0 icon-credit">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/icon/52539/github"
          >
            GitHub
          </a>{" "}
          icon by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            Icons8
          </a>
        </p>

        <img src={logo} className="App-logo" alt="logo" />

        <p className="margin0">
          Search for Repositories Issues or Commit History
        </p>
        <button
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="purpleToPink"
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default Welcome;
