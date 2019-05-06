import React from "react";
import ReactDOM from "react-dom";
import WeatherInfo from "./WeatherInfo.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <button>Get the weather Info</button>
      <WeatherInfo info={{}} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
