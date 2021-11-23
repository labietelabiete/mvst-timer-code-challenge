import Timer from "../Timer";

import "./Main.scss";

export default function Main({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      className={darkMode ? "main dark-background" : "main light-background"}
    >
      <Timer darkMode={darkMode} />
    </div>
  );
}
