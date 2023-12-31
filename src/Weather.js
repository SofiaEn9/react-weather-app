import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Background from "./Background";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "de926abe0f35af91c8149b6305ofa34t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <Background bg={weatherData.description} />
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  onChange={handleCityInput}
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
