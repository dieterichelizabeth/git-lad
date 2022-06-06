import React, { useState } from "react";
import SearchResults from "../SearchResults";

function SearchPage() {
  const [formState, setFormState] = useState("");
  const [searchedRepos, setSearchedRepos] = useState("");

  const handleSearchTearm = (formState) => {
    let username = formState;
    let apiUrl = "https://api.github.com/users/" + username + "/repos";

    fetch(apiUrl)
      .then(function (res) {
        if (res.ok) {
          res.json().then((json) => {
            setSearchedRepos(json);
            setFormState("");
          });
        } else {
          alert("Error: GitHub User Not Found");
        }
      })

      .catch(function (error) {
        alert("Unable to connect to GitHub");
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formState) {
      return false;
    }

    handleSearchTearm(formState);
  };

  const userSearch = (
    <div className="search-type-div">
      <p className="search-heading">Search for Repositories by User</p>
      <form id="user-form" onSubmit={handleFormSubmit}>
        <input
          name="username"
          id="username"
          type="text"
          value={formState}
          onChange={(e) => setFormState(e.target.value)}
          placeholder="Ex. Octocat"
          className="form-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );

  // const languageSearch = (
  //   <div className="search-type-div">
  //     <p className="search-heading">Search for Repositories by Topic</p>
  //     <div className="language-buttons">
  //       <button className="lng-btn">HTML</button>
  //       <button className="lng-btn">CSS</button>
  //       <button className="lng-btn">JavaScript</button>
  //       <button className="lng-btn">React.js</button>
  //       <button className="lng-btn">MongoDb</button>
  //       <button className="lng-btn">Python</button>
  //     </div>
  //   </div>
  // );

  // const repoSearch = (
  //   <div className="search-type-div">
  //     <p className="search-heading">Search for Repositories by Name</p>
  //     <form id="repo-form">
  //       <input
  //         name="reponame"
  //         id="reponame"
  //         type="text"
  //         autoFocus={true}
  //         placeholder="Ex. blueberry-pie"
  //         className="form-input"
  //       />
  //       <button type="submit" className="search-btn">
  //         Search
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="flex-display">
      <div className="search-container">{userSearch}</div>
      <div className="search-results">
        <p className="result-heading">Results for:</p>
        {searchedRepos ? (
          <SearchResults results={searchedRepos} />
        ) : (
          <div className="result-info">
            <p>
              Repositories will populate here, you can view the open issues
              count. Click on the repo name to see more information.
            </p>

            <p>
              Click on one of the languages to the left to get started! Or enter
              a username in the username search bar or repository name in the
              repo search bar.{" "}
            </p>

            <p>
              Repositories will populate here, you can view the open issues
              count. Click on the repo name to see more information and to go
              the repository itself on github!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
