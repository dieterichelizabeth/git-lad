import React from "react";

function SearchPage() {
  return (
    <div>
      <div className="search-container">
        <div className="search-type-div">
          <p className="search-heading">Search for Repositories by User</p>
          <form id="user-form">
            <input
              name="username"
              id="username"
              type="text"
              autofocus="true"
              placeholder="Ex. Octocat"
              className="form-input"
            />
            <button type="submit" class="search-btn">
              Search
            </button>
          </form>
        </div>
        <div className="search-type-div">
          <p className="search-heading">Search for Repositories by Topic</p>
          <div className="language-buttons">
            <button className="lng-btn">HTML</button>
            <button className="lng-btn">CSS</button>
            <button className="lng-btn">JavaScript</button>
            <button className="lng-btn">React.js</button>
            <button className="lng-btn">MongoDb</button>
            <button className="lng-btn">Python</button>
          </div>
        </div>
        <div className="search-type-div">
          <p className="search-heading">Search for Repositories by Name</p>
          <form id="repo-form">
            <input
              name="reponame"
              id="reponame"
              type="text"
              autofocus="true"
              placeholder="Ex. blueberry-pie"
              className="form-input"
            />
            <button type="submit" class="search-btn">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
