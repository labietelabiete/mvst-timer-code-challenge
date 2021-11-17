import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Header darkMode={false} />
      <Main darkMode={false} />
    </div>
  );
}
