import React from "react";
import "./Player.css";
import Sidebar from "../sidebar/Sidebar";
import Body from "../body/Body";
import Footer from "../footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <div className="player__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
