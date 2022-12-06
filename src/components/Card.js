import { View, Text, Image } from 'react-native-web'
import monkey from '../assets/images/monkey.jpg'
import CardStyle from '../assets/styles/CardStyle'

export const Card = () => {
  return (
    <View style={CardStyle.container}>
      <Image source={monkey} style={CardStyle.img}></Image>
      <Text>Monkey Card</Text>
    </View>
  )
}
