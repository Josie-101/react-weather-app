
import './Weather.css';
import './App.css';
import Weather from "./Weather.js";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This app was coded by Jo B and is open sourced on{" "}
          <a
            href="https://github.com/Josie-101/react-weather-app"
            target="blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}


