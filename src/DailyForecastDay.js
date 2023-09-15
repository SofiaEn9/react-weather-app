import React from "react";
import "./DailyForecast.css";

export default function DailyForecastDay1(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[day];
  }

  return (
    <div className="DailyForecastDay">
      <div className="row">
        <div className="col">
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.description}
          ></img>
        </div>
        <div className="col specs">
          <div className="day">{day()}</div>
          <div className="temperature">
            <span className="temperature-max">{maxTemperature()}</span>
            <span className="temperature-min"> | {minTemperature()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
