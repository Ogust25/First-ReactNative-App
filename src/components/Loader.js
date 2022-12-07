import { View, ActivityIndicator } from 'react-native-web'
import LoaderStyle from '../assets/styles/LoaderStyle'

export const Loader = () => {
  return (
    <View style={LoaderStyle.center}>
      <ActivityIndicator size="large" />
    </View>
  )
}
