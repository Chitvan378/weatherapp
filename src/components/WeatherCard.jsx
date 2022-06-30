import React from 'react'
function WeatherCard({weatherdata}) {
  let date = weatherdata.dt;
  let day = new Date(date*1000);
  day = day.toDateString();
  return (
        <div>
            {
            (typeof weatherdata.main != 'undefined') ? 
              (
                <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white text-center p-5 my-3">
                <h3>{day}</h3>
                <div className="card-image flex justify-evenly align-center">
                    <img src = {`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`} alt="icon"/>
                    <h1 className='font-bold'>{weatherdata.main.temp}<sup>0</sup>C</h1>
                </div>
                <div>
                    <p className='text-sm'>Description: {weatherdata.weather[0].description}</p>
                    <p className='text-sm'>Humidity: {weatherdata.main.humidity}</p>
                </div>
              </div>
              ) : (<div></div>)}
        </div>
  )
}

export default WeatherCard
// 