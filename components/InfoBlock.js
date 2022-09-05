import { LinearGradient } from "expo-linear-gradient"
import { Text, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const InfoBlock = ({ bgColor, iconName, text }) => (
  <LinearGradient colors={[bgColor, 'transparent']} start={{ x: 0.5, y: 0.1 }} style={styles.infoContainer}>
    <MaterialCommunityIcons name={iconName} size={24} color="white" style={styles.infoIcon} />
    <Text style={styles.infoText}>{text}</Text>
  </LinearGradient>
)

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    maxHeight: 70,
    marginBottom: 15,
    opacity: .9
  },
  infoIcon: {
    marginRight: 15
  },
  infoText: {
    color: 'white',
    fontSize: 18
  }
})