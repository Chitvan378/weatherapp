import React from 'react'
import {DateTime} from 'luxon'
import TempratureDetails from './TempratureDetails';
function CurrentDate({weather, location}) {
    var dt = DateTime.now();
    const today ={
        date: dt.toLocaleString(DateTime.DATE_HUGE),
        time: dt.toLocaleString(DateTime.TIME_SIMPLE)
    }
    console.log(location);
  return (
    <div className="locationtime">
        <div className='text-white mt-10 w-full text-center'>
            <span>{today.date} | </span>
            <span>Local Time - {today.time}</span>
        </div>
        <div>
            <h1 className='text-2xl pt-5 text-center text-white'>
                {location}
            </h1>
        </div>
        <TempratureDetails data = {weather} />
    </div>
  )
}

export default CurrentDate;