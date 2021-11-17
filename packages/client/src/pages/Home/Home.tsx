import { useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";

import "./Home.scss";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="home">
      <Header handleThemeMode={handleThemeMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
