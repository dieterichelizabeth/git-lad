import React from "react";

function IssueCards() {
  return (
    <div className="issues-cards-container">
      {" "}
      {/* card #1 */}
      <div className="issueCards">
        <div className="repoInfo">
          <a href={`/search/issues/`} className="issueName">
            "Implement user-based mutations"
          </a>

          <br></br>
          <p className="issue-card-date">Created by: dieterichelizabeth</p>
          <p className="repoDescription">2022-05-09</p>
        </div>
        <button className="issue-card-button">Issue</button>
      </div>
      {/* card #2 */}
      <div className="issueCards">
        <div className="repoInfo">
          <a href={`/search/issues/`} className="issueName">
            "Implement user-based mutations"
          </a>

          <br></br>
          <p className="issue-card-date">Created by: dieterichelizabeth</p>
          <p className="repoDescription">2022-05-09</p>
        </div>
        <button className="pullRequest-card-button">Pull Request</button>
      </div>
    </div>
  );
}

export default IssueCards;
