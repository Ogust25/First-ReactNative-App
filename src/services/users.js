import axios from 'axios'

export async function getUsers() {
  return axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
    // console.log(res.data)
    return res.data
  })
}
