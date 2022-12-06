import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import RegisterStyle from '../assets/styles/RegisterStyle'
import { checkEmail, checkPassword } from '../utils/regex'

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    const token = getData('isConnected').then((res) => {
      if (res && res === 'true') {
        navigation.navigate('Home')
      }
    })
  })

  function handleRegister() {
    if (
      checkEmail(email) === true &&
      checkPassword(password) === true &&
      password === confirmPassword
    ) {
      alert('register ok')
    } else {
      alert('register rejected')
    }
  }

  function goLogin() {
    navigation.navigate('Login')
  }

  return (
    <View style={RegisterStyle.body}>
      <View style={RegisterStyle.container}>
        <Text style={RegisterStyle.title}>Register</Text>

        <TextInput
          style={RegisterStyle.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={RegisterStyle.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={RegisterStyle.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={RegisterStyle.btn} onPress={handleRegister}>
          <Text style={RegisterStyle.textBtn}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={RegisterStyle.btnLogin} onPress={goLogin}>
          <Text style={RegisterStyle.textBtn}>Have an acount ? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Register
