import React from "react";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "de926abe0f35af91c8149b6305ofa34t";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="col DailyForecast">
      <div className="row">
        <div className="col">
          <img src={props.icon} alt="{props.iconDescription}"></img>
        </div>
        <div className="col DailyForecast-specs">
          <div className="DailyForecast-day">Day 1</div>
          <div className="DailyForecast-temperature">
            <span className="DailyForecast-temperature-max">32º</span>
            <span className="DailyForecast-temperature-min"> | 21º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
