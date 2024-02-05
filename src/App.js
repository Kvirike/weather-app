import {useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import WeatherCard from './components/WeatherCard.js'
import Bubbles from './components/Bubbles.js'
import Header from './components/Header.js';
import ErrMsg from './components/Error.js';


function App() {

const[weather, updtWeather] = useState([]);
const[inputVal, updtInputVal] = useState('');
const [isVisible, setIsVisible] = useState(false);
const [errorMessage, setErrorMessage] = useState(null);

const BASE_URL = 'http://api.weatherapi.com/v1/current.json?'
const keyOfUrl = '3fd8d32043454517a74101708242701'
var noScroll = require('no-scroll');

noScroll.on();

const submitChange = async (event) => {
  event.preventDefault();

  if (inputVal.trim() === '') {
    return;
  }

  try {
    async function bringApi(city) {
      const data = await fetch(`${BASE_URL}key=${keyOfUrl}&q=${city}&aqi=no`);
      if (!data.ok) {
        throw new Error(`Failed to fetch data. Status: ${data.status}`);
      }

      const result = await data.json();
      updtWeather([result]);
      setIsVisible(true);
      setErrorMessage('');
    }

    await bringApi(inputVal);
  } catch (error) {
    setErrorMessage('City not found');
  }
};



const handleChange = (event) => {
  updtInputVal(event.target.value);
  setIsVisible(false);
};

  return (
    <div className="App">
      <Header/>
      <div className='formDiv'>
        <form
          className="form" 
          onSubmit={submitChange}
          >
            <input
            className='inp'
            placeholder='Type In The City'
            name='searchInput'
            type='text'
            value={inputVal}
            onChange={handleChange}
            >
            </input>
            <button 
              className="btns" 
              id="inputGroup-sizing-default"
              >Search
              </button>
        </form>
      </div>
    {errorMessage ? <ErrMsg /> : null}
    {weather.map((elem, key) => {
      const { location, current } = elem;
      return (
        <WeatherCard
          location={location}
          current={current}
          key={key}
          isVisible={isVisible}
        />
      );
    })}
  <Bubbles/>
    </div>
  );
}

export default App;