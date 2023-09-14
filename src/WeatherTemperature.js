import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1 className="main-temperature">
          {Math.round(props.celsius)}
          <span className="units">
            ºC |{" "}
            <a href="/" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h1 className="main-temperature">
          {Math.round(fahrenheit())}
          <span className="units">
            <a href="/" onClick={showCelsius}>
              ºC{" "}
            </a>
            | ºF
          </span>
        </h1>
      </div>
    );
  }
}
