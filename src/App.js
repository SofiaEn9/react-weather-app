import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chihuahua" />
        <footer>
          <a
            href="https://github.com/SofiaEn9/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/sofia-enriquez-p/"
            target="_blank"
            rel="noreferrer"
          >
            Sofía Enríquez
          </a>
        </footer>
      </div>
    </div>
  );
}
