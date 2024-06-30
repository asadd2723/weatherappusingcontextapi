import { createContext, useContext, useState } from "react";

const WeatherContext = createContext()

export const useWeather = ()=>{
  return useContext(WeatherContext)
}

export const WeatherProvider = ({children})=>{
  const [location,setLocation]=useState(null)
  return(
    <WeatherContext.Provider value={{location,setLocation}}>
      {children}
    </WeatherContext.Provider>
  )
}

