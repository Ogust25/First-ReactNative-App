import { StyleSheet } from 'react-native'

const CardStyle = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: '100%',
  },
})

export default CardStyle
