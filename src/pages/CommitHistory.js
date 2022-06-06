import React from "react";
import Nav from "../components/Nav";
import logo from "../icons8-github.svg";

function CommitHistory() {
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
    <>
      <Nav />
      <header className="App-header App">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="margin0">...Coming soon....</p>
      </header>
    </>
  );
}

export default CommitHistory;
