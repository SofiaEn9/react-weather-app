import React from "react";
import "./Background.css";

export default function Background(props) {
  console.log(props);
  if (props.bg === "clear sky") {
    return <div className="Bg-clear-sky"></div>;
  } else if (props.bg === "few clouds") {
    return <div className="Bg-few-clouds"></div>;
  } else if (props.bg === "scattered clouds") {
    return <div className="Bg-clouds"></div>;
  } else if (props.bg === "overcast clouds") {
    return <div className="Bg-clouds"></div>;
  } else if (props.bg === "broken clouds") {
    return <div className="Bg-clouds"></div>;
  } else if (props.bg === "shower rain") {
    return <div className="Bg-rain"></div>;
  } else if (props.bg === "moderate rain") {
    return <div className="Bg-rain"></div>;
  } else if (props.bg === "rain") {
    return <div className="Bg-rain"></div>;
  } else if (props.bg === "thunderstorm") {
    return <div className="Bg-thunderstorm"></div>;
  } else if (props.bg === "snow") {
    return <div className="Bg-snow"></div>;
  } else if (props.bg === "mist") {
    return <div className="Bg-mist"></div>;
  } else if (props.bg === "haze") {
    return <div className="Bg-haze"></div>;
  } else {
    return null;
  }
}
