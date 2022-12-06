import { useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import LoginStyle from '../assets/styles/LoginStyle'
import { storeData, getData } from '../utils/localStorage'
import { checkEmail, checkPassword } from '../utils/regex'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const token = getData('isConnected').then((res) => {
      if (res && res === 'true') {
        navigation.navigate('Home')
      }
    })
  })

  function handleLogin() {
    if (checkEmail(email) === true && checkPassword(password) === true) {
      storeData('isConnected', 'true').then((res) => {
        navigation.navigate('Home')
      })
    } else {
      storeData('isConnected', 'false')
    }
  }

  function goRegister() {
    navigation.navigate('Register')
  }

  return (
    <View style={LoginStyle.body}>
      <View style={LoginStyle.container}>
        <Text style={LoginStyle.title}>Login</Text>
        <TextInput
          style={LoginStyle.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={LoginStyle.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={LoginStyle.btn} onPress={handleLogin}>
          <Text style={LoginStyle.textBtn}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={LoginStyle.btnRegister} onPress={goRegister}>
          <Text style={LoginStyle.textBtn}>
            Don't have an acount ? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Login
