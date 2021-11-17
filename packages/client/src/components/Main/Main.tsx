import React from "react";
import Timer from "../../components/Timer";

import "./Main.scss";

export default function Main({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={darkMode ? "main dark-background" : "main light-background"}>
      <div className="timer-wrap">
        <Timer time={50} darkMode={darkMode} />
        <Timer time={50} darkMode={darkMode} />
      </div>
    </div>
  );
}
