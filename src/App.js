import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/SofiaEn9/react-weather-app"
            target="_blank"
            rel="noreferer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/sofia-enriquez-p/"
            traget="_blank"
            rel="noreferer"
          >
            Sofía Enríquez
          </a>
        </footer>
      </div>
    </div>
  );
}
