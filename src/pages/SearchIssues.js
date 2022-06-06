import React, { useState } from "react";
// import SearchResults from "../components/SearchResults";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import IssueCards from "../components/IssueCards";

function SearchIssues() {
  //   let searchTerms = window.location.href.split("/");
  //   let repoName = `${searchTerms[5]}/${searchTerms[6]}`;

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

  return (
    <>
      <Nav />
      <button className="back-button">Back to Search</button>
      <div className="issues-info-container">
        <h1 className="issues-heading">
          Now Showing Issues For:{" "}
          <span className="issues-repository-name">JFlo1981/Virtual-Zoo</span>
        </h1>
        <p className="issues-description">
          A weather dashboard where users can search by cityname for a 5 day
          forecast
        </p>
        <p className="issues-dates">Created at: 2022-05-09</p>
        <p className="issues-dates">Published at: 2022-05-09</p>
      </div>

      <p className="issue-number">832 Issues</p>
      <hr></hr>

      <IssueCards />

      <Footer />
    </>
  );
}

export default SearchIssues;
