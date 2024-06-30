import React, { useEffect, useState } from 'react'
import { useWeather } from '../context/Weather'
function Weather() {
  const [val , setVal ] = useState('')
  const { location, setLocation} = useWeather()
  const GetApi = async ()=>{
    if(val!==""){
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=1084c8bb7e874d10bc085518243006&q=${val}&aqi=yes`, {method:"GET"})
      const format = await res.json()
      setLocation(format)
    }else{
      console.log(val)
    }
     
  }
  // useEffect(() => {
  //   GetApi().then((res)=>setLocation(res))
  //   return () => {
      
  //   };
  // }, []);
  console.log(location)
  return (
    <div className='mb-3'>
      <h1 className='mb-4 text-2xl uppercase font-semibold'>weather app</h1>
      <div className='flex justify-center'>
        <input className='text-xl border-2 border-cyan-950 py-1 px-2' type="text" placeholder='Enter your location' value={val} onChange={(e)=>setVal(e.target.value)} />
        <button className='bg-gray-700 text-yellow-50 py-2 px-2 font-semibold text-center' onClick={GetApi}>Get a location</button>
      </div>
    </div>

  )
}

export default Weather