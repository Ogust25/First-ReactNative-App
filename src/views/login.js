import { useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import loginStyle from '../assets/styles/loginStyle'
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
    <View style={loginStyle.body}>
      <View style={loginStyle.container}>
        <Text style={loginStyle.title}>Login</Text>
        <TextInput
          style={loginStyle.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={loginStyle.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={loginStyle.btn} onPress={handleLogin}>
          <Text style={loginStyle.textBtn}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={loginStyle.btnRegister} onPress={goRegister}>
          <Text style={loginStyle.textBtn}>
            Don't have an acount ? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Login
