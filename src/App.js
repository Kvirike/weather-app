import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card.js'
import WeatherCard from './components/WeatherCard.js'




function App() {

const[weather, updtWeather] = useState();
const[inputVal, updtInputVal] = useState('');
const[srch, updSrch]= useState([])

const BASE_URL = 'http://api.weatherapi.com/v1/current.json?'
const keyOfUrl = '3fd8d32043454517a74101708242701'

const submitChange = (event) => {
  event.preventDefault()
  
  updSrch((srch) => [inputVal, ...srch,]);

    async  function bringApi(city) {
       const data = await fetch(`${BASE_URL}key=${keyOfUrl}&q=${city}&aqi=no`)
       const result = await data.json()
       updtWeather(result)
       console.log(result);
       return result;
    }
     bringApi(inputVal)
}






const handleChange = (event) => {
  updtInputVal(event.target.value)
}


  return (
    <div className="App">
      <div className='header'>
        <form
          className="input-group mb-3" 
          onSubmit={submitChange}>
            <input
            className="form-control input-lg input-search" 
            placeholder='Type in'
            name='searchInput'
            type='text'
            value={inputVal}
            onChange={handleChange}
            >
            </input>
            <button 
              className="btn btn-primary" 
              id="inputGroup-sizing-default"
              >Search
              </button>
        </form>
      </div>
      {
        srch.map((elem, key) => {
          return <Card elem={elem} key={key}/>
        })
      }
      <WeatherCard/>
    </div>
    
  );
}

export default App;