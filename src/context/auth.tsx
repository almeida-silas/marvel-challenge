import React, { createContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import IAuth from './IAuth';

interface IAuthContextData {
  signed: boolean;
  name: string;
  email: string;
  signIn(user: IAuth): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [uname, setName] = useState('');
  const [uemail, setEmail] = useState('');

  const loadStoragedData = async () => {
    try {
      const name = await AsyncStorage.getItem('@name');
      const email = await AsyncStorage.getItem('@email');

      if (name && email) {
        setName(name);
        setEmail(email);
      }
    } catch (error) {}
  };

  const signIn = async (authUser: IAuth) => {
    setEmail(authUser.email);
    setName(authUser.name);

    try {
      await AsyncStorage.setItem('@name', authUser.name);
      await AsyncStorage.setItem('@email', authUser.email);
    } catch (error) {}
  };

  useEffect(() => {
    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: uemail ? true : false,
        email: uemail,
        name: uname,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
