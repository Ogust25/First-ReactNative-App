import { StyleSheet } from 'react-native'

const homeStyle = StyleSheet.create({
  body: {
    padding: 20,
  },
  btn: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 25,
  },
  boxTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  linkTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
})

export default homeStyle
