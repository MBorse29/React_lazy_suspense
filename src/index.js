import React, { useState, lazy, Suspense } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./styles.css";

const LazyWeatherInfo = lazy(() =>
  import("./WeatherInfo.jsx" /* webpackChunkname: 'info' */)
);

function App() {
  const [info, setInfo] = useState([]);
  return (
    <div className="App">
      <button
        onClick={() => {
          axios
            .get(`https://api.oceandrivers.com:443/v1.0/getWebCams/`)
            .then(res => {
              const info = res.data;
              setInfo(info);
            });
        }}
      >
        Get the weather Info
      </button>
      {!!info.length && (
        <Suspense fallback={() => <div>Fallback Component</div>}>
          <LazyWeatherInfo info={info} />
        </Suspense>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
