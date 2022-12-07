import axios from 'axios'
import { API_URL, API_TOKEN } from '@env'

export async function fetchMovies(movie) {
  const url = `${API_URL}/?apikey=${API_TOKEN}&s=${movie}`

  return axios.get(url).then((res) => {
    //console.log(res.data)
    return res.data
  })
}
