import { useState, useEffect } from "react";

import "./LocalTimer.scss";

// interface State {
//   time: number;
//   seconds: number;
//   minutes: number;
// }

type Props = {
  initialValue: { hours: number; minutes: number; seconds: number };
  // initialValue: number;
  darkMode: boolean;
  isOn: boolean;
};

export default function LocalTimer({ initialValue, darkMode, isOn }: Props) {
  const [localTime, setLocalTime] = useState(initialValue);

  useEffect(() => {
    if (isOn) {
      setTimeout(() => {
        let updatedLocalTime = localTime;
        if (updatedLocalTime.seconds < 60) {
          updatedLocalTime.seconds++;
        } else {
          updatedLocalTime.seconds = 0;
          updatedLocalTime.minutes++;
        }
        if (updatedLocalTime.minutes >= 60) {
          updatedLocalTime.hours++;
          updatedLocalTime.minutes = 0;
        }
        console.log(updatedLocalTime, "updateLocalTime");
        setLocalTime(updatedLocalTime);
        /////////////////////////////////
        // let updatedLocalTime = localTime;
        // updatedLocalTime++;
        // setLocalTime(updatedLocalTime);
      }, 1000);
    } else {
      setLocalTime(initialValue);
    }
    console.log(localTime, "localTime");
  }, [isOn, localTime, initialValue]);

  return (
    <div className={darkMode ? "dark-color" : "light-color"}>
      {localTime.hours}:{localTime.minutes}:{localTime.seconds}
      {/* {localTime} */}
    </div>
  );
}
