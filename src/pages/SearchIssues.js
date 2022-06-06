import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import IssueCards from "../components/IssueCards";

function SearchIssues() {
  // Use State to define the Single Repository for display
  // Once RepoIssues is updated with json from Github's API, that information is passed to the IssueCards component
  const [repoInfo, setRepoInfo] = useState("");
  const [repoIssues, setRepoIssues] = useState("");

  // Get the full repository name from the window location
  // This link was created in the SearchResults component line 10 from the fetch on the Search Page
  // expected example: /octocat/git-consortium
  let searchTerms = window.location.href.split("/");
  let repoName = `${searchTerms[5]}/${searchTerms[6]}`;

  // Use Effect to fetch the repository's information, as well as it's issues ONCE
  useEffect(() => {
    handleRepoSearch(repoName);
    handleIssueSearch(repoName);
  }, []);

  // Fetch the Issues for the repository from Github's API
  // If the fetch is okay, update the repoIssues State
  const handleIssueSearch = async (repoName) => {
    let apiUrl =
      "https://api.github.com/repos/" + repoName + "/issues?direction=asc";

    fetch(apiUrl)
      .then(function (res) {
        if (res.ok) {
          res.json().then((json) => {
            setRepoIssues(json);
          });
        } else {
          alert("Error: GitHub User Not Found");
        }
      })

      .catch(function (error) {
        alert("Unable to connect to GitHub");
      });
  };

  // Fetch the repository information from Github's API
  // If the fetch is okay, update the repoInfo State
  const handleRepoSearch = async (repoName) => {
    let apiUrl = "https://api.github.com/repos/" + repoName;

    fetch(apiUrl)
      .then(function (res) {
        if (res.ok) {
          res.json().then((json) => {
            setRepoInfo(json);
          });
        } else {
          alert("Error: GitHub User Not Found");
        }
      })

      .catch(function (error) {
        alert("Unable to connect to GitHub");
      });
  };

  return (
    <>
      <Nav />
      <button className="back-button">
        <a href={"/search"}>Back to Search</a>
      </button>

      {repoInfo ? (
        <>
          <div className="issues-info-container">
            <h1 className="issues-heading">
              Now Showing Issues For:{" "}
              <span>
                <a
                  href={repoInfo.svn_url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="issues-repository-name"
                >
                  {repoInfo.full_name}
                </a>
              </span>
            </h1>
            <p className="issues-description">{repoInfo.description}</p>
            <p className="issues-dates">Created at: {repoInfo.created_at}</p>
            {repoInfo.pushed_at ? (
              <p className="issues-dates">Published at: {repoInfo.pushed_at}</p>
            ) : (
              <></>
            )}
          </div>

          <p className="issue-number">{repoInfo.open_issues} Issue(s)</p>
          <hr></hr>
        </>
      ) : (
        <p>Loading...</p>
      )}

      {repoIssues ? <IssueCards issues={repoIssues} /> : <p>Loading...</p>}
    </>
  );
}

export default SearchIssues;
