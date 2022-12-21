import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Octicons'

const Register_1 = () => {

 const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
     <LinearGradient
        // Background Linear Gradient
        colors={['white', '#31c5f4']}
        style={styles.background}
      />
      <View style={styles.backButton}>
      <TouchableOpacity
        onPress={()=>{navigation.replace('Login_1')}}>
          <Icon name='chevron-left' size={24} color="grey" />
      </TouchableOpacity>
      </View>
      <Image style={styles.logo}
        source={require("../assets/logo.png")}
      />
      <Text style={styles.text}>Register Account As:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
         onPress={()=>{navigation.replace('RegisterCrew')}}
          style={[styles.button]}
          >
          <Text style={styles.buttonText}>Yacht Crew Member</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{navigation.replace('RegisterManagement')}}
          style={[styles.button, styles.buttonOutline]}
          >
          <Text style={styles.buttonOutlineText}>Yacht Crew Management</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default Register_1

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
    marginBottom:20
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
    textAlign:'right',
    top:-140,
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
    flexDirection:'row',
    marginTop:20,
    },
  button:{
    backgroundColor:'grey',
    width:120,
    height:150,
    padding: 15,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    margin:5,
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
    fontSize: 13,
    textAlign:'center'
    },
  buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize: 13,
    textAlign:'center'
    },
    text:{
      color:'darkslategrey',
      fontWeight:'800',
      fontSize: 14,
      textAlign:'center'
      },



})
