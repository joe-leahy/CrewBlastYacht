import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import Login_2 from './Login_2'
import Register_1 from './Register_1'

const Login_1 = () => {

 const navigation = useNavigation();

  const handleLogin = () => {
    navigation.replace('Login_2')
}
const handleSignUp = () => {
  navigation.replace('Register_1')
}

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
     <LinearGradient
        // Background Linear Gradient
        colors={['white', '#31c5f4']}
        style={styles.background}
      />
      <Image style={styles.logo}
        source={require("../assets/logo.png")}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
          >
          <Text style={styles.buttonOutlineText}>Register New Account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default Login_1

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
