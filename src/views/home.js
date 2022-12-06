import { View, Text } from 'react-native-web'
import { useEffect } from 'react'
import homeStyle from '../assets/styles/homeStyle'
import { getData } from '../utils/localStorage'

export const Home = ({ navigation }) => {
  useEffect(() => {
    const token = getData('isConnected').then((res) => {
      if (res && res === 'false') {
        navigation.navigate('Login')
      }
    })
  })

  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.title}>Home</Text>
    </View>
  )
}
