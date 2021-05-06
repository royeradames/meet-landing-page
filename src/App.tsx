import React from "react";

// styles
import "./styles/main.scss";

//assets imports
import logo from "./assets/logo.svg";
import leftImg from "./assets/desktop/image-hero-left.png";
import rightImg from "./assets/desktop/image-hero-right.png";

import womanChatting from "./assets/desktop/image-women-videochatting.jpg";
import womenInVideoCall from "./assets/desktop/image-woman-in-videocall.jpg";
import menInMeeting from "./assets/desktop/image-men-in-meeting.jpg";
import menTexting from "./assets/desktop/image-man-texting.jpg";

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Meet logo" />
        <img src={leftImg} alt="" className="header__left-img" />
        <img src={rightImg} alt="" className="header__left-img" />
        <div className="header__call-to-action">
          <h1 className="h1 header__call-to-action-title">
            Group Chat for Everyone
          </h1>
          <p className="body header__call-to-action-message">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <button className="btn btn1 ">
            Download <span className="btn1--version">v1.3</span>
          </button>
          <button className="btn btn2">What is it?</button>
        </div>
      </header>
      <main className="main">
        <img
          src={womenInVideoCall}
          alt="Women in video call"
          className="main__women-video-call"
        />
        <img
          src={womanChatting}
          alt="Three woman chatting on the phone"
          className="main__woman-chatting"
        />
        <img
          src={menInMeeting}
          alt="Men in a meeting"
          className="main__men-meeting"
        />
        <img
          src={menTexting}
          alt="Men texting"
          className="main__men-texting/image-man-texting.anChatting"
        />
        <div className="main__message">
          <h3 className="overline main__message-overline">
            Built for modern use
          </h3>
          <h2 className="h2 main__message-title">
            Smarter meetings, all in one place
          </h2>
          <p className="body main__message-content">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </main>
      <footer className="footer">
        <h2 className="h2 footer_title">Experience more together</h2>
        <p className="body footer_message">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button className="btn btn2 ">
          Download <span className="btn2--version">v1.3</span>
        </button>
      </footer>
    </>
  );
}

export default App;
