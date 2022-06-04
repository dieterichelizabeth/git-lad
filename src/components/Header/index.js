import React from "react";

function Header() {
  return (
    <header>
      <a
        href="https://github.com/dieterichelizabeth/GitLad"
        target="_blank"
        rel="noopener noreferrer"
        className="github-header"
      >
        Gitlad
      </a>
      <a href="/" className="link-inactive">
        Search For Repository
      </a>
      <a href="/" className="link-inactive">
        View Commit History
      </a>
    </header>
  );
}

export default Header;
