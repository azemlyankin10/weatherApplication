import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { InfoBlock } from "./InfoBlock"

export const MainPage = ({ 
  currentTemperature, 
  city, 
  country,
  HightTemperature, 
  LowTemperature,
  weatherDesc,
  weather,
  feels,
  wind
}) => (
  <LinearGradient
    colors={weatherOptions[weather].gradient}
    style={styles.container}
  >
    <View style={styles.containerTop}>
      <MaterialCommunityIcons name={weatherOptions[weather].iconName} size={96} color="white"/> 
      <Text style={styles.bigText}>{Math.round(currentTemperature)}°</Text>
      <Text style={styles.middleText}>{city}</Text>
      <Text style={styles.smallText}>H: {Math.round(HightTemperature)}° / L: {Math.round(LowTemperature)}°</Text>
    </View>

    <View style={styles.containerBottom}>
      <InfoBlock bgColor={weatherOptions[weather].gradient[0]} iconName='weather-hail' text={`${weather}(${weatherDesc})`} />
      <InfoBlock bgColor={weatherOptions[weather].gradient[0]} iconName='weather-hurricane' text={`Feels like ${feels}°`} />
      <InfoBlock bgColor={weatherOptions[weather].gradient[0]} iconName='weather-windy' text={`${wind} m/c`} />
      <InfoBlock bgColor={weatherOptions[weather].gradient[0]} iconName='city' text={`${city}(${country})`} />
    </View>

  </LinearGradient>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBottom: {
    flex: 1,
    marginHorizontal: 30
  },
  bigText: {
    color: 'white',
    fontSize: 38,
  },
  middleText: {
    color: 'white',
    fontSize: 26,
    lineHeight: 42
  },
  smallText: {
    color: 'white',
    fontSize: 16
  }
})

export const weatherOptions = {
  Thunderstorm: {
      iconName: 'weather-lightning',
      gradient: ['#141E30', '#243B55'],
  },
  Drizzle: {
      iconName: 'weather-rainy',
      gradient: ['#3a7bd5', '#3a6073'],
  },
  Rain: {
      iconName: 'weather-pouring',
      gradient: ['#000046','#1CB5E0'],
  },
  Snow: {
      iconName: 'snowflake',
      gradient: ['#83a4d4', '#b6fbff'],
  },
  Dust: {
      iconName: 'weather-windy-variant',
      gradient: ['#B79891', '#94716B'],
  },
  Smoke: {
      iconName: 'weather-windy',
      gradient: ['#56CCF2', '#2F80ED'],
  },
  Haze: {
      iconName: 'weather-hazy',
      gradient: ['#3E5151', '#DECBA4'],
  },
  Mist: {
      iconName: 'weather-fog',
      gradient: ['#606c88', '#3f4c6b'],
  },
  Clear: {
      iconName: 'weather-sunny',
      gradient: ['#56CCF2', '#2F80ED'],
  },
  Clouds: {
      iconName: 'weather-cloudy',
      gradient: ['#757F9A', '#D7DDE8'],
  },
}