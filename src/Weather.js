import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h3>Chihuahua</h3>
          <h4>Tuesday 11:01pm</h4>
          <img
            href="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather description"
          ></img>
          <h1>
            26 <span className="units">ºC</span>
          </h1>
          <ul className="main-forecast-specs">
            <li id="weather-description">Few Clouds</li>
            <li>Humidity: 41%</li>
            <li>Wind Speed: 5 km/h</li>
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
