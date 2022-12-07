import { StyleSheet } from 'react-native'

const movieStyle = StyleSheet.create({
  body: {
    padding: 20,
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
  inputSearch: {
    fontSize: 18,
    borderColor: '#bdbdbd',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  btnSearch: {
    fontSize: 18,
    borderColor: '#bdbdbd',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding: 14,
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
})

export default movieStyle
