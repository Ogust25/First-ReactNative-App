import { StyleSheet } from 'react-native'

const loginStyle = StyleSheet.create({
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  container: {
    padding: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5733',
    height: '70%',
    width: '80%',
    borderRadius: 20,
  },
  title: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    textAlign: 'justify',
    fontSize: 18,
    borderColor: '#bdbdbd',
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: '#ff7d61',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 30, 
    marginTop: 10,
  },
  btnRegister: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
  }
})

export default loginStyle
