import React from 'react'
import WeatherCard from './WeatherCard'

function Weatherfetch({data}) {
  return (
    <div className='max-w-screen-lg'>
        <h2 className='text-center text-white font-bold'>Weather Forecast</h2>
        <div className='grid grid-cols-3 gap-3'>
        {
          (data.length != 0) ? (data.slice(0,6).map((elem) => 
            <WeatherCard weatherdata ={elem} /> 
            )) : <div></div>
        }
        </div>
    </div>
  )
}

export default Weatherfetch