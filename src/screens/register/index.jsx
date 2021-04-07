import React from "react";

import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Text } from "react-native-elements";

import styles from "../styles";

const Register = () => {
  return (
    <View style={styles.container}>
      <Input 
        label="Nome Completo" 
        placeholder="Nome completo" 
        leftIcon={<Icon name="user" size={20} color="black"/> }
        containerStyle={styles.input}
      />
      <Input 
        label="Email" 
        placeholder="Email" 
        leftIcon={<Icon name="envelope" size={20} color="black"/> }
        containerStyle={styles.input}
      />
      <Input 
        label="Senha" 
        placeholder="*******" 
        leftIcon={<Icon name="key" size={20} color="black"/> }
        secureTextEntry={true}
        containerStyle={styles.input}
      />
      <Input 
        label="Confirmar senha" 
        placeholder="*******" 
        leftIcon={<Icon name="key" size={20} color="black"/> }
        secureTextEntry={true}
        containerStyle={styles.input}
      />

      <Button title="Registrar" containerStyle={styles.button} />
    </View>
  );
};

export default Register;
