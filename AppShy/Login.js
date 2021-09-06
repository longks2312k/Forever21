import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const TextInANest = (navigation) => {

  const [phone, setPhone] = useState([])
  
  const changeText = (val) => setPhone(val)

  const onVerifyPhone = () => {
    alert(phone)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Profile</Text>
      <TextInput
        placeholder="Phone Number"
        secureTextEntry={false}
        onChangeText={changeText}
        style={{ height: 50, width: '90%', fontSize: 16, borderColor: 'gray', borderWidth: 1, marginLeft: 5, fontFamily: 'Times New Roman', borderRadius: 10, marginBottom: 20 }}
      />
      <Text style={styles.ques}>Forgot Password?</Text>
      <TouchableOpacity onPress={onVerifyPhone} style={styles.btnsignin}>
        <View >
          <Text style={{ fontSize: 16 }}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnjoin}>
        <View >
          <Text style={{ fontSize: 16 }}>Join Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20
  },
  textip: {
    height: 50,
    width: '90%',
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    marginLeft: 10
  },
  login: {
    margin: 50,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 155
  },
  lb: {
    fontSize: 16,
    marginLeft: 10
  },
  ques: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
  btnsignin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "yellow",
    padding: 10,
    height: 50,
    width: '90%',
    margin: 10,
  },
  btnjoin: {
    alignItems: "center",
    backgroundColor: "#d5e5e8",
    padding: 10,
    height: 50,
    width: '90%',
    margin: 10,
  }
});

export default TextInANest;

