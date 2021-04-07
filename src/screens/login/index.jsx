import React from "react";

import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Text } from "react-native-elements";

import styles from "../styles";

const Login = ({navigation}) => {
  const handlerLogin = () => {
  }

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="email@email.com"
        leftIcon={<Icon name="envelope" size={20} color="black" />}
        containerStyle={styles.input}
      />
      <Input 
        label="Senha"
        placeholder="passwords"
        leftIcon={<Icon name="key" size={20} color="black"/>}
        secureTextEntry={true}
        containerStyle={styles.input}
      />
      <Button title="Entrar" containerStyle={styles.button} onPress={() => handlerLogin()} />

      <Text onPress={() => navigation.navigate('Register')} style={styles.link}>Registre-se</Text>

    </View>
  );
};

export default Login;
