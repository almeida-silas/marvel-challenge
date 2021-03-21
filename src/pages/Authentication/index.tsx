import React, { useState } from 'react';

import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useAuth } from '../../hooks/auth';

const Authentication: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = () => {
    if (!name.trim() && !email.trim()) {
      return console.log('deu ruim');
    }

    signIn({ name, email });
  };

  return (
    <View>
      <TextInput mode="outlined" label="Nome Completo" onChangeText={setName} />
      <TextInput mode="outlined" label="Email" onChangeText={setEmail} />

      <Button onPress={handleSignIn} icon="login">
        Entrar
      </Button>
    </View>
  );
};
export default Authentication;
