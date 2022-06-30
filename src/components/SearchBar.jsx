import React, { useState } from 'react'
import {IoSearchOutline, IoLocationOutline} from 'react-icons/io5'
import CurrentDate from './CurrentDate'
const APP = "2e4fe64872b66e2f0a9d631f70fe2a11";
function SearchBar() {
    const [lat, setlat] = useState();
    const [lon, setlon] = useState();
    const [loc, setloc] = useState();
    const [data, getdata] = useState([]);
    const fetchlocdata = async (loc) => {
        await fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${loc}&units=metric&appid=${APP}`)
        .then(res => res.json()).then(result => {
            getdata(result.list);
        })
    }
    const handleSearchClick = (fetchlocdata) => {
        if (loc !== "") {
            setloc(loc);
            fetchlocdata(loc);
        };
    };
    const handleLocationClick = async (fetchlocdata) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            setlat(position.coords.latitude);
            setlon(position.coords.longitude);
          });
          if((typeof lat != 'undefined')  &&  (typeof lon != 'undefined')){
            let response = await fetch(`http://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`)
            let result = await response.json();
            setloc(result.address.city)
            fetchlocdata(result.address.city);
          }
        }
    }
    return (
    <div>
        <div className='mt-8 flex justify-center max-w-screen '>
            <div className="searchoptions">
                <input type="text" className='py-1 pl-2 mr-5 focus:outline-none' value={loc} 
                onChange = {(e) => setloc(e.target.value)} placeholder='Jaipur'/>
                <button className="px-4 ml-5 text-white" id = "weatherdata" onClick={() => handleSearchClick(fetchlocdata)}>
                    <IoSearchOutline size={20}/>
                </button>
                <button className="px-4 text-white" id = "defaultLocation" onClick={() => handleLocationClick(fetchlocdata)}>
                    <IoLocationOutline size={20}/>
                </button>
            </div>
        </div>
        { (typeof loc != 'undefined' && data.length != 0) ? 
        <CurrentDate weather={data} location = {loc} />:
        <div></div>
        }
    </div>
  )
}

export default SearchBar;