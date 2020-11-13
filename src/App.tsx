import React from 'react';

import SingIn from './pages/SingIn';
//import SingUp from './pages/SingUp';

import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';


const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SingIn />
      </AuthProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
