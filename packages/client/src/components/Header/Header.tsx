import React from "react";
import Switch from "react-switch";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import "./Header.scss";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="header">
      <div className={darkMode ? "logo dark-color" : "logo light-color"}>
        MVST.
      </div>
      <div className="mode">
        <BsFillSunFill className={darkMode ? "dark-color" : "light-color"} />
        <Switch
          onChange={() => {}}
          checked={true}
          onColor="#373838"
          offColor="#373838"
          checkedIcon={false}
          uncheckedIcon={false}
          width={40}
          height={20}
        />
        <BsFillMoonFill className={darkMode ? "dark-color" : "light-color"} />
      </div>
    </div>
  );
}
