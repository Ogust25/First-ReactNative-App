import { View, Text, ScrollView } from 'react-native-web'
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
        console.log(res);
      }
    })
  }, [])
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res)
    })
  }, [])

  return (
    <View style={HomeStyle.body}>
      <Text style={HomeStyle.title}>Home</Text>
      <ScrollView style={HomeStyle.container}>
        {users &&
          users.map((user) => {
            return <Card key={user.id} title={user.title} image={monkey} />
          })}
      </ScrollView>
    </View>
  )
}
