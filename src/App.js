
import './Weather.css';
import './Index.css';
import './App.css'
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="London"/>
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


