import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase/compat";
import { collection, doc, querySnapshot, where } from "firebase/firestore";
import firestore from "firebase/firestore";

const CrewHome = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    firebase
      .firestore()
      .collection("crewmembers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          let data = snapshot.data();
          if (
            data.email.toLowerCase() == auth.currentUser.email.toLowerCase()
          ) {
            setName(data.name);
            setEmail(data.email)
            setPhone(data.phone)
          }
        });
      });
  }, []);

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login_2");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["white", "#31c5f4"]}
        style={styles.background}
      />
       <Text style={styles.header}>Crewmember Information</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Phone: {phone}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CrewHome;

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
  header: {
    fontWeight: "700",
    fontSize: 16,
    flexDirection: "column",
    marginBottom:10,
  },
  text:{
    margin:10,
  }
});
