import React, { useState } from "react";
import "./App.css";
import SearchIssues from "./components/SearchIssues";
import Nav from "./components/Nav";
import Disclaimer from "./components/Disclaimer";

function App() {
  // State for Username Input or Language Button clicks
  // searchTerm state controls what is displayed on the "results" portion of the page
  const [formState, setFormState] = useState("");
  const [searchedRepos, setSearchedRepos] = useState("");
  const [searchTerm, setsearchTerm] = useState("");
  const [repoName, setRepoName] = useState();
  const [href, setHref] = useState();
  const [showSearch, displaySearchPage] = useState(true);

  const componentHandler = (name) => {
    setHref("#repoInfo");
    setRepoName(name);
    displaySearchPage(false);
  };

  const DisplayRepoDetails = () => {
    console.log(repoName);
    if (href === "#repoInfo") {
      return <SearchIssues repoName={repoName} />;
    }
  };

  // Attempt fetch to Github Api, if okay- update searchedRepos and searchTerm State
  const handleSearchTerm = (formState) => {
    let username = formState;
    let apiUrl = "https://api.github.com/users/" + username + "/repos";

    fetch(apiUrl)
      .then(function (res) {
        if (res.ok) {
          res.json().then((json) => {
            setSearchedRepos(json);
            setsearchTerm(username);
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

  // Handle the Language Button Search
  const handleFeaturedSearch = (language) => {
    let apiUrl =
      "https://api.github.com/search/repositories?q=" +
      language +
      "+is:featured&sort=help-wanted-issues";

    fetch(apiUrl)
      .then(function (res) {
        if (res.ok) {
          res.json().then((json) => {
            setSearchedRepos(json.items);
            setsearchTerm(language);
          });
        } else {
          alert("Error: GitHub User Not Found");
        }
      })

      .catch(function (error) {
        alert("Unable to connect to GitHub");
      });
  };

  // Handle the Username Input Form Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formState) {
      return false;
    }

    handleSearchTerm(formState);
  };

  // When a language button is clicked, pass the language to HandleFeaturedSearch
  const handleButtonClick = (searchTerm) => {
    handleFeaturedSearch(searchTerm);
  };

  // User Search form
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

  // All the language buttons...
  // New language buttons can be added by duplicating the button and changing the innerHtml and handleButtonClick string to match
  const languageSearch = (
    <div className="search-type-div">
      <p className="search-heading">Search for Repositories by Topic</p>
      <div className="language-buttons">
        <button className="lng-btn" onClick={() => handleButtonClick("HTML")}>
          HTML
        </button>
        <button className="lng-btn" onClick={() => handleButtonClick("CSS")}>
          CSS
        </button>
        <button
          className="lng-btn"
          onClick={() => handleButtonClick("JavsScript")}
        >
          JavaScript
        </button>
        <button
          className="lng-btn"
          onClick={() => handleButtonClick("React.js")}
        >
          React.js
        </button>
        <button
          className="lng-btn"
          onClick={() => handleButtonClick("MongoDb")}
        >
          MongoDb
        </button>
        <button className="lng-btn" onClick={() => handleButtonClick("Python")}>
          Python
        </button>
      </div>
    </div>
  );

  const welcomeText = (
    <div className="result-info">
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
        Click on one of the languages to the left to get started! Or enter a
        username in the username search bar or repository name in the repo
        search bar.
      </p>

      <p>
        Repositories will populate here, you can view the open issues count.
        Click on the repo name to see more information and to go the repository
        itself on github!
      </p>
    </div>
  );

  return (
    <>
      <Nav />

      {showSearch ? (
        <div className="flex-display">
          <div className="search-container">
            {userSearch}
            {languageSearch}
          </div>

          <div className="search-results">
            <p className="result-heading">Results for: {searchTerm}</p>
            {searchedRepos ? (
              <>
                {searchedRepos &&
                  searchedRepos.map((repo) => (
                    <div className="repoCards" key={repo.full_name}>
                      <div className="repoInfo">
                        <a
                          href="#repoInfo"
                          className="repoName"
                          onClick={() => {
                            componentHandler(repo.full_name);
                          }}
                        >
                          {repo.full_name}
                        </a>
                        <p className="repoVisibility">{repo.visibility}</p>
                        <br></br>
                        <p className="repoDescription">{repo.description}</p>
                      </div>
                      <p
                        className={
                          repo.open_issues > 0 ? "repoIssues red" : "repoIssues"
                        }
                      >
                        {repo.open_issues} Issue(s)
                      </p>
                    </div>
                  ))}
                <Disclaimer />
              </>
            ) : (
              <>{welcomeText}</>
            )}
          </div>
        </div>
      ) : (
        <>{DisplayRepoDetails()}</>
      )}
    </>
  );
}

export default App;
