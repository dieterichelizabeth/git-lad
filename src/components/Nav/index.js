import React, { useState } from "react";

function Nav() {
  // do not set a value of the currentPage variable on load
  const [currentPage, SetCurrentPage] = useState(null);

  // Nav Links
  const navLinks = [
    { name: "Search For Repository", href: "/search" },
    { name: "View Commit History", href: "/commits" },
  ];

  const navHandler = (href) => SetCurrentPage(href);

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
              currentPage === link.href ? "link-active" : "link-inactive"
            }
          >
            {link.name}
          </a>
        ))}
      </header>
    </div>
  );
}

export default Nav;
