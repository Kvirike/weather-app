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
      <form onSubmit={submitChange}>
        <input
          style={{border:"1px solid blue", borderRadius:"10px"}}
          className='searchInp'
          placeholder='Type in'
          name='searchInput'
          type='text'
          value={inputVal}
          onChange={handleChange}
        >
        </input>
        <button
          className='btn'
          style={{backgroundColor:'#174bae', borderRadius:"35px", color:"white"}}
        >Search</button>
      </form>
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