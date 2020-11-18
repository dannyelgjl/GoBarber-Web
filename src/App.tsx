import React from 'react';

import SingIn from './pages/SingIn';
//import SingUp from './pages/SingUp';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks'


const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SingIn />
      </AppProvider>

      <ToastContainer />

      <GlobalStyle />
    </>
  );
}

export default App;
