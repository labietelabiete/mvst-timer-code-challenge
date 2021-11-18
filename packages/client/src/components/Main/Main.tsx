import React from "react";
import LocalTimer from "../LocalTimer";
import GlobalTimer from "../GlobalTimer";

import "./Main.scss";

export default function Main({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      className={darkMode ? "main dark-background" : "main light-background"}
    >
      <div className="timer-wrap">
        <GlobalTimer time={50} darkMode={darkMode} />
        <button className="timer-button">
          <LocalTimer time={50} darkMode={darkMode} />
        </button>
      </div>
    </div>
  );
}
