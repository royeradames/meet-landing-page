import React from "react";

import logo from "./assets/logo.svg";
import leftImg from "./assets/desktop/image-hero-left.png";
import rightImg from "./assets/desktop/image-hero-right.png";
function App() {
  return (
    <main className="main">
      <header className="header">
        <img src={logo} alt="Meet logo" />
        <img src={leftImg} alt="" className="header__left-img" />
        <img src={rightImg} alt="" className="header__left-img" />
        <div className="header__call-to-action">
          <h1 className="header__call-to-action-title">
            Group Chat for Everyone
          </h1>
          <p className="header__call-to-action-message">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <button className="btn1 download">Download</button>
          <button className="button2 what-is-it">What is it?</button>
        </div>
      </header>
    </main>
  );
}

export default App;
