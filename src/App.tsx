import React from 'react';

import SingIn from './pages/SingIn';
//import SingUp from './pages/SingUp';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';


const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SingIn />
      </AuthProvider>

      <ToastContainer />

      <GlobalStyle />
    </>
  );
}

export default App;
