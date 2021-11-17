import React from "react";
import Switch from "react-switch";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import "./Header.scss";

type Props = {
  handleThemeMode: any;
  darkMode: boolean;
};

export default function Header({ handleThemeMode, darkMode }: Props) {
  return (
    <div
      className={
        darkMode ? "header dark-background" : "header light-background"
      }
    >
      <div className={darkMode ? "logo light-color" : "logo dark-color"}>
        MVST.
      </div>
      <div className="mode">
        <BsFillSunFill className={darkMode ? "light-color" : "dark-color"} />
        <Switch
          onChange={handleThemeMode}
          checked={darkMode}
          onColor={darkMode ? "#c0c0c0" : "#373838"}
          offColor={darkMode ? "#c0c0c0" : "#373838"}
          checkedIcon={false}
          uncheckedIcon={false}
          width={40}
          height={20}
        />
        <BsFillMoonFill className={darkMode ? "light-color" : "dark-color"} />
      </div>
    </div>
  );
}
