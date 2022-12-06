import { View, Text, Image } from 'react-native-web'
import CardStyle from '../assets/styles/CardStyle'

export const Card = (props) => {
  return (
    <View style={CardStyle.container}>
      <Image source={props.image} style={CardStyle.img}></Image>
      <Text>{props.title}</Text>
    </View>
  )
}
