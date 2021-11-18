import { useState, useEffect } from "react";

import "./LocalTimer.scss";

// interface State {
//   time: number;
//   seconds: number;
//   minutes: number;
// }

interface Props {
  // initialValue: { hours: number; minutes: number; seconds: number };
  initialValue: number;
  darkMode: boolean;
  isOn: boolean;
}

export default function LocalTimer({ initialValue, darkMode, isOn }: Props) {
  const [localTime, setLocalTime] = useState(initialValue);

  useEffect(() => {
    if (isOn) {
      setTimeout(() => {
        //   setLocalTime((prevState) => {
        //     let updateTime = prevState;
        //     if (updateTime.seconds < 60) {
        //       updateTime.seconds++;
        //     } else {
        //       updateTime.seconds = 0;
        //       updateTime.minutes++;
        //     }
        //     if (updateTime.minutes >= 60) {
        //       updateTime.hours++;
        //       updateTime.minutes = 0;
        //     }
        //     console.log(updateTime);
        //     return updateTime;
        //   });
        // }, 1000);
        /////////////////////////////////
        let updatedLocalTime = localTime;
        updatedLocalTime++;
        setLocalTime(updatedLocalTime);
      }, 1000);
    } else {
      setLocalTime(initialValue);
    }
    console.log(localTime);
  }, [isOn, localTime]);

  return (
    <div className={darkMode ? "dark-color" : "light-color"}>
      {/* {localTime.hours}:{localTime.minutes}:{localTime.seconds} */}
      {localTime}
    </div>
  );
}
