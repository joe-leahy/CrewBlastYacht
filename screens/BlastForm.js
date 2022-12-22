import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase/compat";
import "firebase/firestore";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

const BlastForm = () => {

  const [to, setTo] = useState("")
  const [vi, setVi] = useState("")
  const [position, setPosition] = useState("")
  const [date, setDate] = useState("")
  const [phone, setPhone] = useState("")
  const [body, setBody] = useState("")


  const navigation = useNavigation();

  const createAlert = () =>
    Alert.alert(
      "Blast Sent!",
      "Thanks for using CrewBlast Yachting!",
        {
          text: "Okl",
          onPress: () => navigation.replace("ManagementHome"),
          style: "cancel"
        }
    );

  const handleBlast = () => {
    setBody(`Crew Needed! ${vi} is looking for a ${position} starting on ${date}. Please contact ${phone} for more information!`)
    addDoc(collection(db, "messages"), {
      to,
      body
    });
    createAlert();
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <LinearGradient colors={["white", "#31c5f4"]} style={styles.background} />
      <Text style={styles.text}>Blast Request Form</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="To"
          value={to}
          onChangeText={(text) => setTo(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Vessel Information"
          value={vi}
          onChangeText={(text) => setVi(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Position"
          value={position}
          onChangeText={(text) => setPosition(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Date"
          value={date}
          onChangeText={(text) => setDate(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Contact Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          onPress={handleBlast}
          style={styles.blastButton}
        >
          <Text style={styles.buttonText}>Submit!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("ManagementHome");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default BlastForm

const styles = StyleSheet.create({
  container: {
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    opacity: 0.75,
  },
  button: {
    backgroundColor: "grey",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  blastButton: {
    backgroundColor: "#31c5f4",
    width: "80%",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'

  },
  buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  text: {
    fontWeight: "700",
    fontSize: 16,
    flexDirection: "column",
  },
  inputContainer: {
    marginTop: 40,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  });
