import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient'


const RegisterCrew = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['white', '#31c5f4']}
        style={styles.background}
      />
      <Text style={styles.text}>New Crewmember</Text>
      <TouchableOpacity
      onPress={()=>{navigation.replace('Register_1')}}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterCrew

const styles = StyleSheet.create({
  container:{
    flex:'1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity:.75
  },
  button:{
    backgroundColor:'grey',
    width:'60%',
    padding: 15,
    borderRadius:10,
    alignItems:'center',
    marginTop:40
    },
  buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize: 16,
    },
  text:{
    fontWeight:'700',
    fontSize: 16,
    flexDirection:'column'
    }
})
