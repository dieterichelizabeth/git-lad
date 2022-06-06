import React from "react";

function Disclaimer() {
  return (
    <p className="disclaimer">
      These results are provided by Github REST API and will currently display
      up to 30 items per default setting. If you would like to clone the repo
      and change these setting yourself{" "}
      <a
        href="https://docs.github.com/en/rest/overview/resources-in-the-rest-api#pagination"
        rel="noopener noreferrer"
        target="_blank"
      >
        see this resource for more information
      </a>
    </p>
  );
}

export default Disclaimer;
