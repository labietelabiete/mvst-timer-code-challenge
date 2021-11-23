import { useState, useEffect } from "react";

import { BsPlay, BsStop } from "react-icons/bs";

import { getTimer, updateTimer } from "../../api/timer-api";

import { secondsToString } from "../../utils/secondsToString";

import "./Timer.scss";

export default function Timer({ darkMode }: { darkMode: boolean }) {
  const initialValue: number = 0;
  const [isOn, setIsOn] = useState<boolean>(false);
  const [globalTimerValue, setGlobalTimerValue] = useState<number>(0);
  const [localTotalSeconds, setLocalTotalSeconds] =
    useState<number>(initialValue);

  const getGlobalValue = async () => {
    try {
      const { data } = await getTimer();
      setGlobalTimerValue(data.data[0].totalTime);
    } catch (error) {
      console.log(error);
    }
  };
  const updateGlobalValue = async (totalSeconds: number) => {
    try {
      await updateTimer(totalSeconds);
      const { data } = await getTimer();
      setGlobalTimerValue(data.data[0].totalTime);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGlobalValue();
  }, []);

  useEffect(() => {
    const localTimeOut = setInterval(() => {
      setLocalTotalSeconds((prevState) => {
        return prevState + 1;
      });
    }, 1000);
    if (!isOn) {
      clearInterval(localTimeOut);
      if (localTotalSeconds !== 0) {
        updateGlobalValue(localTotalSeconds);
        setLocalTotalSeconds(initialValue);
      }
    }
    return () => {
      clearInterval(localTimeOut);
    };
  }, [isOn]);

  const handleIsOn = () => {
    setIsOn((prevState) => {
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
        {secondsToString(globalTimerValue)}{" "}
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
          {secondsToString(localTotalSeconds)}
        </div>
      </button>
    </div>
  );
}
