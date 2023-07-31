import React, { useState, useEffect } from 'react';
import './css/city.css';
import guadalajara from './guadalajara.jpg'
import axios from 'axios';
import { 
  motion as m, 
} from "framer-motion";

 const url = `https://api.openweathermap.org/data/2.5/weather?q=guadalajara&units=imperial&appid=db8b232b0417c091537aee16cac31b4d`
 
function Guadalajara() {
  const [data, setData] = useState({});


//get city weather information
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data)
    }).catch(err =>{
      console.log(err)
    });
  },[])

  console.log(data)

  return (
    <m.div className='card'
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
      <p className='city'>City in Mexico</p>

      <div className='images'>
        <img src={guadalajara} alt="guadalajara" />
      </div>

      <div className='weather'>
        <div>
        {data.main ? <p className='temp'>{data.main.temp.toFixed(0)}°F</p> : null }
        </div>

        <div>
          {data.weather ? <p className='cloud'>{data.weather[0].main}</p> : null}
        </div>
        
        <div>
        {data.main ? <p className='feel'>Feels like {data.main.feels_like}°</p> : null}
        </div>

        <div>
          {data.wind ? <p className='wind'>Wind Speed {data.wind.speed} km/h</p> : null}
        </div>
       
        <div>
        {data.main ? <p className='hum'>Humidity {data.main.humidity}%</p> : null}
        </div>

        <div>
        {data.coord ? <p className='lon'>Longitude {data.coord.lon}</p> : null} 
        </div>
      
        <div>
        {data.coord ? <p className='lat'>Latitude {data.coord.lat}</p> : null}
        </div>
      </div>
    </m.div>
  )
}

export default Guadalajara;

// db8b232b0417c091537aee16cac31b4d