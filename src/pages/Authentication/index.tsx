import React, { useState } from 'react';

import { Alert, View } from 'react-native';
import { TextInput, Button, Paragraph } from 'react-native-paper';

import { useAuth } from '../../hooks/auth';
import validateEmail from '../../utils/validateEmail';

import styles from './styles';

const Authentication: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = () => {
    if (!name.trim() || !email.trim()) {
      return Alert.alert(
        'Campos em branco!',
        'Por favor preencha todos os campos.',
      );
    }

    if (!name.match(/[A-Z][a-z]* [A-Z][a-z]*/)) {
      return Alert.alert('Digite seu nome completo!');
    }

    if (!validateEmail(email)) {
      return Alert.alert('Email inválido!');
    }

    signIn({ name, email });
  };

  return (
    <View style={styles.container}>
      <Paragraph style={styles.title}>
        Olá! Que bom te ver.{'\n'}Informe seu nome e email para que possamos
        saber quem está utilizando o nosso app
      </Paragraph>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Nome Completo"
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput mode="outlined" label="Email" onChangeText={setEmail} />
      </View>

      <View style={[styles.inputContainer, styles.button]}>
        <Button mode="contained" onPress={handleSignIn} icon="login">
          Entrar
        </Button>
      </View>

      <Paragraph style={styles.infomation}>
        Dados fornecidos pela Marvel. © 2021 MARVEL
      </Paragraph>
    </View>
  );
};
export default Authentication;
