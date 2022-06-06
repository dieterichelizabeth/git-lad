import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import IssueCards from "../components/IssueCards";

function SearchIssues() {
  const [repoInfo, setRepoInfo] = useState("");
  const [repoIssues, setRepoIssues] = useState("");

  let searchTerms = window.location.href.split("/");
  let repoName = `${searchTerms[5]}/${searchTerms[6]}`;

  useEffect(() => {
    handleRepoSearch(repoName);
    handleIssueSearch(repoName);
  }, []);

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

      <Footer />
    </>
  );
}

export default SearchIssues;
