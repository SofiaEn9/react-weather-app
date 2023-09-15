import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import axios from "axios";
import DailyForecastDay from "./DailyForecastDay";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="col DailyForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index}>
                <DailyForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "de926abe0f35af91c8149b6305ofa34t";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
