
import './Weather.css';
import './Index.css';
import './App.css';
import Weather from "./Weather.js";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="Paris"/>
      <footer>
        This app was coded by Jo B and is open sourced on {" "}
        <a
          href="https://github.com/Josie-101/react-weather-app"
          target="blank"
          norefferer
        >
          Github
        </a>
      </footer>
      </div>
    </div>
  
  );
}


