import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7 main-forecast">
          <h1>{props.data.city}</h1>
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
          <img src={props.data.iconUrl} alt={props.data.description}></img>
          <h1 className="main-temperature">
            {Math.round(props.data.temperature)}{" "}
            <span className="units">ºC</span>
          </h1>
          <ul className="main-forecast-specs">
            <li id="weather-description">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-5">
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}
