import "./App.css";
import React, { useState } from "react";
import GeneratePlanets from "./components/generate-planet/GeneratePlanets";
import Planet from "./components/planet/Planet";
import Banner from "./components/banner/Banner";
import Download from "./components/download/Download";

function App() {
  const [planets, setPlanets] = useState("");

  return (
    <div className="App">
      <Banner></Banner>
      <h1 className="App__header">
        <strong>Generate Planet Components</strong>
      </h1>
      <GeneratePlanets setPlanets={setPlanets}></GeneratePlanets>
      <Planet planets={planets} setPlanets={setPlanets}></Planet>
      <Download></Download>
    </div>
  );
}

export default App;
