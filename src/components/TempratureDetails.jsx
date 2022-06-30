import React from 'react'
import Weatherfetch from './Weatherfetch'

function TempratureDetails({data}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{data[0].weather[0].description}</p>
        </div>
        <Weatherfetch data = {data} />
    </div>
  )
}

export default TempratureDetails