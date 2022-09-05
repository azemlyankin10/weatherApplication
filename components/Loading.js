import { Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native"
import bg from '../assets/loading.jpeg'


export const Loading = () => (
  <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
    <ActivityIndicator size="large" color='white'/>
    <Text style={styles.text}>Loading...</Text>
  </ImageBackground>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 15,
    color: 'white',
  }
})
