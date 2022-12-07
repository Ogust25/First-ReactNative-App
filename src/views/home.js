import { View, Text, ScrollView, TouchableOpacity } from 'react-native-web'
import { useEffect, useState } from 'react'
import HomeStyle from '../assets/styles/HomeStyle'
import { getData } from '../utils/localStorage'
import { Card } from '../components/Card'
import { getUsers } from '../services/users'

import monkey from '../assets/images/monkey.jpg'

export const Home = ({ navigation }) => {
  const [users, setUsers] = useState()

  useEffect(() => {
    const token = getData('isConnected').then((res) => {
      if (res && res === 'false') {
        navigation.navigate('Login')
        console.log(res)
      }
    })
  }, [])
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res)
    })
  }, [])

  function goMovie() {
    navigation.navigate('Movie')
  }

  return (
    <View style={HomeStyle.body}>
      <View style={HomeStyle.boxTitle}>
        <TouchableOpacity onPress={goMovie}>
          <Text style={HomeStyle.linkTitle}>MOVIE</Text>
        </TouchableOpacity>
        <Text style={HomeStyle.title}>HOME</Text>
        <Text style={HomeStyle.linkTitle}>WIP</Text>
      </View>
      <View style={HomeStyle.container}>
        {users &&
          users.map((user) => {
            return <Card key={user.id} title={user.username} image={monkey} />
          })}
      </View>
    </View>
  )
}
