import React, { useState, useEffect } from "react";
// import SearchResults from "../components/SearchResults";
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
  }, []);

  //   let apiUrl =
  //     "https://api.github.com/repos/" + repoName + "/issues?direction=asc";

  //   fetch(apiUrl)
  //     .then(function (res) {
  //       if (res.ok) {
  //         res.json().then((json) => {
  //           console.log(json);
  //         });
  //       } else {
  //         alert("Error: GitHub User Not Found");
  //       }
  //     })

  //     .catch(function (error) {
  //       alert("Unable to connect to GitHub");
  //     });

  const handleRepoSearch = async (repoName) => {
    let apiUrl = "https://api.github.com/repos/" + repoName;

    fetch(apiUrl)
      .then(function (res) {
        if (res.ok) {
          res.json().then((json) => {
            console.log(json);
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
      <button href={"/search"} className="back-button">
        Back to Search
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
            {repoInfo.created_at ? (
              <p className="issues-dates">
                Published at: {repoInfo.created_at}
              </p>
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
