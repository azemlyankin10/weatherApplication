import { useEffect, useState } from 'react'
import { StatusBar, Alert } from 'react-native'
import { Loading } from './components/Loading'
import { MainPage } from './components/MainPage'
import axios from 'axios'
import * as Location from 'expo-location'

const API_KEY = 'd6a215050757b3f12c6414eead157863'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState(null)

  const getWeather = async() => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied')
      return
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({})
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)

    setWeather({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      weatherDesc: data.weather[0].description,
      weather: data.weather[0].main,
      feels: data.main.feels_like,
      wind: data.wind.speed
    })
    setIsLoading(false)
  }

  useEffect(() => {
    getWeather()
  }, [])
  
  return (
    <>
      <StatusBar barStyle='light-content' />
      {
        isLoading 
          ? <Loading/>
          : <MainPage 
              currentTemperature={weather.temp}
              city={weather.city}
              HightTemperature={weather.temp_max}
              LowTemperature={weather.temp_min}
              country={weather.country}
              weather={weather.weather}
              weatherDesc={weather.weatherDesc}
              feels={weather.feels}
              wind={weather.wind}
          />
      }
    </>
  )
}

export default App



