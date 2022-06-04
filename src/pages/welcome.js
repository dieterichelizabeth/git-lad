import React from "react";
import logo from "../icons8-github.svg";
import WelcomHeader from "../components/WelcomeHeader";
import WelcomeFooter from "../components/WelcomeFooter";

function Welcome() {
  return (
    <div className="welcome">
      <WelcomHeader />
      <header className="App-header App">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="margin0">
          Search for Repositories Issues or Commit History
        </p>
        <button className="purpleToPink">Get Started</button>
      </header>
      <WelcomeFooter />
    </div>
  );
}

export default Welcome;
