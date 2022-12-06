import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import registerStyle from '../assets/styles/registerStyle'
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
    <View style={registerStyle.body}>
      <View style={registerStyle.container}>
        <Text style={registerStyle.title}>Register</Text>

        <TextInput
          style={registerStyle.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={registerStyle.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={registerStyle.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={registerStyle.btn} onPress={handleRegister}>
          <Text style={registerStyle.textBtn}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={registerStyle.btnLogin} onPress={goLogin}>
          <Text style={registerStyle.textBtn}>Have an acount ? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Register
