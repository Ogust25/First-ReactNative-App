import { StyleSheet } from 'react-native'

const CardStyle = StyleSheet.create({
  container: {
    width: "45%",
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7,
  },
  img: {
    width: '100%',
    height: 170,
    borderRadius: 5,
  },
  text: {
    padding: 5,
  }
})

export default CardStyle
