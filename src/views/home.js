import { View, Text } from 'react-native-web'
import { useEffect } from 'react'
import HomeStyle from '../assets/styles/HomeStyle'
import { getData } from '../utils/localStorage'
import { Card } from '../components/Card'

export const Home = ({ navigation }) => {
  useEffect(() => {
    const token = getData('isConnected').then((res) => {
      if (res && res === 'false') {
        navigation.navigate('Login')
      }
    })
  })

  return (
    <View style={HomeStyle.body}>
      <Text style={HomeStyle.title}>Home</Text>
      <View style={HomeStyle.container}>
        <Card />
      </View>
    </View>
  )
}
