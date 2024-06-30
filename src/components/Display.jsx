import React from 'react'
import { useWeather } from '../context/Weather'

function Display() {
  const {location} = useWeather()
  return (
    <div className='mt-3 flex flex-col items-center'>
      <img width={100} src={location && location.current.condition.icon} alt="" />
      <h2 className='text-lg'>Temp: {location && location.current.temp_c} C</h2>
      <h3 className='text-lg'>City: {location && location.location.name},{location && location.location.region }</h3>
      <h3 className='text-lg'>TimeZone: {location && location.location.tz_id}</h3>
    </div>
  )
}

export default Display