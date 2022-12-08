import { View, Text, TouchableOpacity, TextInput } from 'react-native-web'
import { useEffect, useState } from 'react'
import { getData } from '../utils/localStorage'
import MovieStyle from '../assets/styles/MovieStyle'
import { Card } from '../components/Card'
import { fetchMovies } from '../services/movie'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { Loader } from '../components/loader'

export const Movie = ({ navigation }) => {
  const [research, setResearch] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = getData('isConnected').then((res) => {
      if (res && res === 'false') {
        navigation.navigate('Login')
        console.log(res)
      }
    })
  })

  function goHome() {
    navigation.navigate('Home')
  }

  function getMovies() {
    setLoading(true)
    fetchMovies(research).then((res) => {
      setMovies(res.Search)
      setLoading(false)
    })
  }

  return (
    <View style={MovieStyle.body}>
      <View style={MovieStyle.boxTitle}>
        <Text style={MovieStyle.linkTitle}>WIP</Text>
        <Text style={MovieStyle.title}>MOVIE</Text>
        <TouchableOpacity onPress={goHome}>
          <Text style={MovieStyle.linkTitle}>HOME</Text>
        </TouchableOpacity>
      </View>
      <View style={MovieStyle.boxTitle}>
        <TextInput
          style={MovieStyle.inputSearch}
          placeholder="Search a movie"
          onChangeText={setResearch}
          value={research}
        ></TextInput>
        <TouchableOpacity onPress={getMovies} style={MovieStyle.btnSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View style={MovieStyle.container}>
          {movies &&
            movies.map((movie) => {
              return (
                <Card
                  key={movie.imdbID}
                  title={movie.Title}
                  image={movie.Poster}
                />
              )
            })}
        </View>
      )}
    </View>
  )
}
