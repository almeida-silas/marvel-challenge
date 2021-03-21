import React from 'react';

import AppNavigator from './app.routes';
import AuthNavigator from './auth.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <AppNavigator /> : <AuthNavigator />;
};

export default Routes;
