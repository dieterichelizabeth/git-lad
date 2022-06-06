import React from "react";

function SearchResults({ results }) {
  console.log(results);
  return (
    <div>
      {results &&
        results.map((repo) => (
          <div className="repoCards">
            <div className="repoInfo">
              <p className="repoName">{repo.full_name}</p>
              <p className="repoVisibility">{repo.visibility}</p>
              <br></br>
              <p className="repoDescription">{repo.description}</p>
            </div>
            <p className="repoIssues">{repo.open_issues} Issue(s)</p>
          </div>
        ))}
    </div>
  );
}

export default SearchResults;
