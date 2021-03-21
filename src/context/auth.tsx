import React, { createContext, useState, useEffect } from 'react';

import IAuth from './IAuth';

interface IAuthContextData {
  signed: boolean;
  name: string;
  email: string;
  signIn(user: IAuth): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [uname, setName] = useState('');
  const [uemail, setEmail] = useState('');

  const loadStoragedData = async () => {};

  const signIn = (authUser: IAuth) => {
    setEmail(authUser.email);
    setName(authUser.name);
  };

  function signOut() {
    /*AsyncStorage.clear(() => {
      setUser(null);
    });*/
  }

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
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
