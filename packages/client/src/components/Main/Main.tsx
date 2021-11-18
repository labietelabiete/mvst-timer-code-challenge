import { useState } from "react";
import LocalTimer from "../LocalTimer";
import GlobalTimer from "../GlobalTimer";

import { BsPlay, BsStop } from "react-icons/bs";

import "./Main.scss";

export default function Main({ darkMode }: { darkMode: boolean }) {
  const [isOn, setIsOn] = useState(false);

  const handleIsOn = () => {
    // setIsOn(!isOn);
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
        <GlobalTimer time={50} darkMode={darkMode} />
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

          <LocalTimer
            initialValue={{ hours: 0, minutes: 0, seconds: 0 }}
            // initialValue={0}
            darkMode={darkMode}
            isOn={isOn}
          />
        </button>
      </div>
    </div>
  );
}
