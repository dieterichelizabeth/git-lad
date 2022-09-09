import React from "react";

function IntroText() {
  return (
    <div className="info-text">
      <p>Welcome to git-lad! Here you can search for repositories by</p>
      <ul className="info-text-list">
        <li>👾username</li>
        <li>🛸language</li>
        <li>💫repository name</li>
      </ul>

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
        bar to view open issues!
      </p>
    </div>
  );
}

export default IntroText;
