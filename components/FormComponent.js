import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View>
      <Text style={styles.text}>Olá, {name}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.text}>Você tem {idade} anos!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
      />

      <Text style={styles.text}>Seu email é {email}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu sobrenome"
        value={email}
        onChangeText={setEmail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: "#222",
    marginVertical: 10,
    textAlign: "center",
  },
});

export default FormComponent;
