import { useState, useEffect } from "react";

import { secondsToString } from "../../utils/secondsToString";

import "./Timer.scss";

type Props = {
  initialValue: number;
  darkMode: boolean;
  isOn: boolean;
};

export default function Timer({ initialValue, darkMode, isOn }: Props) {
  const [totalSeconds, setTotalSeconds] = useState(initialValue);
  const [stringTime, setStringTime] = useState(secondsToString(initialValue));

  useEffect(() => {
    if (isOn) {
      setTimeout(() => {
        setTotalSeconds((prevState) => {
          return prevState + 1;
        });
      }, 1000);
      setStringTime(secondsToString(totalSeconds));
    } else {
      setTotalSeconds(initialValue);
      setStringTime(secondsToString(totalSeconds));
    }
  }, [isOn, totalSeconds, initialValue]);

  return (
    <div
      className={
        darkMode ? "timer-value dark-color" : "timer-value light-color"
      }
    >
      {stringTime}
    </div>
  );
}
