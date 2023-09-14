import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import DailyForecast from "./DailyForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-7 main-forecast">
          <h1>{props.data.city}</h1>
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
          <img src={props.data.iconUrl} alt={props.data.description}></img>
          <WeatherTemperature celsius={props.data.temperature} />
          <ul className="main-forecast-specs">
            <li id="weather-description">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col">
          <DailyForecast
            icon={props.data.iconUrl}
            iconDescription={props.data.description}
            coordinates={props.data.coordinates}
          />
        </div>
      </div>
    </div>
  );
}
