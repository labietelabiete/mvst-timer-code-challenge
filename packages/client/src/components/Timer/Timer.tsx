import { useState, useEffect } from "react";

import { BsPlay, BsStop } from "react-icons/bs";

import { getTimer, updateTimer } from "../../api/timer-api";

import { secondsToString } from "../../utils/secondsToString";

import "./Timer.scss";

export default function Timer({ darkMode }: { darkMode: boolean }) {
  const initialValue: number = 0;
  const [isOn, setIsOn] = useState<boolean>(false);
  const [globalTimerValue, setGlobalTimerValue] = useState<string>();
  const [localTimerValue, setLocalTimerValue] = useState<string>(
    secondsToString(initialValue)
  );
  const [localTotalSeconds, setLocalTotalSeconds] =
    useState<number>(initialValue);

  const getGlobalValue = async () => {
    try {
      const { data } = await getTimer();
      console.log(data.data[0].totalTime, "Entro en get");
      setGlobalTimerValue(secondsToString(data.data[0].totalTime));
    } catch (error) {
      console.log(error);
    }
  };
  const updateGlobalValue = async (totalSeconds: number) => {
    try {
      console.log(totalSeconds, "Entro en update");
      await updateTimer(totalSeconds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGlobalValue();
  }, []);

  useEffect(() => {
    if (isOn) {
      setTimeout(() => {
        setLocalTotalSeconds((prevState) => {
          return prevState + 1;
        });
      }, 1000);
      setLocalTimerValue(secondsToString(localTotalSeconds));
    } else {
      setLocalTotalSeconds(initialValue);
      setLocalTimerValue(secondsToString(localTotalSeconds));
    }
  }, [isOn, localTotalSeconds]);

  const handleIsOn = () => {
    setIsOn((prevState) => {
      if (prevState) {
        updateGlobalValue(localTotalSeconds);
        getGlobalValue();
      }
      return !prevState;
    });
  };

  return (
    <div className="timer-wrap">
      <div
        className={
          darkMode ? "global-timer light-color" : "global-timer dark-color"
        }
      >
        {globalTimerValue}{" "}
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

        <div
          className={
            darkMode ? "timer-value dark-color" : "timer-value light-color"
          }
        >
          {localTimerValue}
        </div>
      </button>
    </div>
  );
}
