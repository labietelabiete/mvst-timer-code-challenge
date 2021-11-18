import { useState } from "react";
import Timer from "../Timer";

import { BsPlay, BsStop } from "react-icons/bs";

import "./Main.scss";

export default function Main({ darkMode }: { darkMode: boolean }) {
  const [isOn, setIsOn] = useState(false);
  const globalValue: string = "00:01:34";

  const handleIsOn = () => {
    setIsOn((prevState) => {
      if (prevState) {
        console.log("Getting off");
      } else {
        console.log("Getting on");
      }
      return !prevState;
    });
  };

  return (
    <div
      className={darkMode ? "main dark-background" : "main light-background"}
    >
      <div className="timer-wrap">
        <div
          className={
            darkMode ? "global-timer light-color" : "global-timer dark-color"
          }
        >
          {globalValue}{" "}
        </div>
        <button
          onClick={handleIsOn}
          className={
            darkMode
              ? "timer-button light-background dark-color"
              : "timer-button dark-background light-color"
          }
        >
          {isOn ? (
            <BsStop
              className={
                darkMode ? "timer-icon dark-color" : "timer-icon light-color"
              }
            />
          ) : (
            <BsPlay
              className={
                darkMode ? "timer-icon dark-color" : "timer-icon light-color"
              }
            />
          )}

          <Timer initialValue={0} darkMode={darkMode} isOn={isOn} />
        </button>
      </div>
    </div>
  );
}
