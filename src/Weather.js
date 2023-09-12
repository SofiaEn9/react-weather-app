import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      icon: response.data.condition.icon,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-7 main-forecast">
            <h3>{weatherData.city}</h3>
            <h4>Tuesday 11:01pm</h4>
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            <h1>
              {Math.round(weatherData.temperature)}{" "}
              <span className="units">ºC</span>
            </h1>
            <ul className="main-forecast-specs">
              <li id="weather-description">{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {Math.round(weatherData.wind)} km/h</li>
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
  } else {
    const apiKey = "de926abe0f35af91c8149b6305ofa34t";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
