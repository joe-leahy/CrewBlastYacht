import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button} from 'react-native'
import Checkbox from 'expo-checkbox'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Octicons';

const Login_2 = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 const navigation = useNavigation();

  useEffect(() =>{
   const unsubscribe = auth.onAuthStateChanged(user => {
      if(user.displayName === 'Crew'){
        navigation.replace('CrewHome')
      }
      else{navigation.replace('ManagementHome')}
    })
    return unsubscribe
  },[])

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(`Logged in with: ${user.email}`)
      if(user.displayName === 'Crew'){
        navigation.replace('CrewHome')
      }
      else{navigation.replace('ManagementHome')}
  })
    .catch(error => alert(error.message))
}

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
     <LinearGradient
        // Background Linear Gradient
        colors={['white', '#31c5f4']}
        style={styles.background}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={()=>{navigation.replace('Login_1')}}>
          <Icon name='chevron-left' size={24} color="grey" />
      </TouchableOpacity>
      <Image style={styles.logo}
        source={require("../assets/logo.png")}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          value = { email }
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          value = { password }
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default Login_2

const styles = StyleSheet.create({
  container:{
    flex:'1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 280,
    height: 200,
    zIndex:100,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity:.5
  },
  backButton:{
    position:'fixed',
    top:-120,
   left:-140,
  },
  inputContainer:{
      marginTop:40,
      width:'80%',
    },
  input:{
    backgroundColor:'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop:5,
    },
  buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
    },
  button:{
    backgroundColor:'grey',
    width:'100%',
    padding: 15,
    borderRadius:10,
    alignItems:'center',
    },
  buttonOutline:{
    backgroundColor:'white',
    marginTop: 5,
    borderColor:'grey',
    borderWidth:2,
    },
  buttonOutlineText:{
    color:'grey',
    fontWeight:'700',
    fontSize: 16,

    },
  buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize: 16,
    }



})
