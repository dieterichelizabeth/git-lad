import React from "react";

function IssueCards({ issues }) {
  if (!issues[0]) {
    return <p className="noIssues">This Repository has no issues!</p>;
  }

  return (
    <div className="issues-cards-container">
      {" "}
      {issues &&
        issues.map((issue, index) => (
          <div className="issueCards" key={index}>
            <div className="repoInfo">
              <a href={issue.html_url} className="issueName">
                {issue.title}
              </a>

              <br></br>
              <p className="issue-card-date">Created by: {issue.user.login}</p>
              <p className="repoDescription">{issue.created_at}</p>
            </div>
            {issue.pull_request ? (
              <button className="pullRequest-card-button">
                <a
                  href={issue.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Pull Request
                </a>
              </button>
            ) : (
              <button className="issue-card-button">
                <a
                  href={issue.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Issue
                </a>
              </button>
            )}
          </div>
        ))}
    </div>
  );
}

export default IssueCards;
