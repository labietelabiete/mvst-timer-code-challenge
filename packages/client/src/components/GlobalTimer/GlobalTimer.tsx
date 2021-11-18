import { useState, useEffect } from "react";

import "./GlobalTimer.scss";

interface State {
  time: number;
  seconds: number;
  minutes: number;
}

interface props {
  time: number;
  darkMode: boolean;
}

export default function GlobalTimer(props: props) {
  const [state, setState] = useState<State>({
    time: props.time,
    seconds: props.time - Math.floor((props.time - 1) / 60) * 60 - 1,
    minutes: Math.floor((props.time - 1) / 60),
  });

  useEffect(() => {
    setTimeout(() => {
      if (state.time === 0) {
        return;
      }

      setState({
        time: state.time - 1,
        minutes: Math.floor((state.time - 1) / 60),
        seconds: state.time - Math.floor((state.time - 1) / 60) * 60 - 1,
      });
    }, 1000);
  }, [state.time]);
  return (
    <h2 className={props.darkMode ? "light-color" : "dark-color"}>{`${
      state.minutes
    }: ${state.seconds <= 10 ? `0${state.seconds}` : state.seconds}`}</h2>
  );
}
