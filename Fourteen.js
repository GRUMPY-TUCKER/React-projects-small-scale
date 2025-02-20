import React, { useEffect, useState } from 'react'

const Fourteen = () => {
    const [weather,setWeather] = useState(null);
    useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=03348ab4b90e5f651880dfbbd490d2cf`)
                .then((response) => response.json())
                .then((data)=> setWeather(data))
            })
        }
    },[])
  return (
    <div>
        {
            weather ? (
                <div>
                    <h2>Current Weather</h2>
                    <p>Temperature : {weather.main.temp}</p>
                    <p>Conditions : {weather.weather[0].description}</p>
                </div>
            ) : (
                <div>
                    LoADING......
                </div>
            )
        }
    </div>
  )
}

export default Fourteen