import React, { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";

function Home() {
  // do not set a value of the currentPage variable on load
  const [currentPage, SetCurrentPage] = useState(null);

  // Nav Links
  const navLinks = [
    { name: "Search For Repository", href: "#search" },
    { name: "View Commit History", href: "#commits" },
  ];

  const navHandler = (name) => SetCurrentPage(name);

  return (
    <div>
      <header>
        <a
          href="https://github.com/dieterichelizabeth/GitLad"
          target="_blank"
          rel="noopener noreferrer"
          className="github-header"
        >
          Gitlad
        </a>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => {
              navHandler(link.name);
            }}
            className={
              currentPage === link.name ? "link-active" : "link-inactive"
            }
          >
            {link.name}
          </a>
        ))}
      </header>
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default Home;
