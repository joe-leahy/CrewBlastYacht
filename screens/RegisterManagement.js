import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase/compat";
import "firebase/firestore";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

const RegisterManagement = () => {
  const navigation = useNavigation();
  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("ManagementHome");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    if (password == password2) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const docRef = addDoc(collection(db, "management"), {
            uid: auth().currentUser.uid,
            name,
            email,
            phone,
          });
          console.log("Document added with ID: ", docRef.id);
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Passwords don't match!");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <LinearGradient colors={["white", "#31c5f4"]} style={styles.background} />
      <Text style={styles.text}>New Crew Managament Profile</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Repeat Password"
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Register_1");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterManagement;

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
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
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
