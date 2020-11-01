import React from 'react';

import SingIn from './pages/SingIn';
//import SingUp from './pages/SingUp';

import AuthContext from './context/AuthContext';

import GlobalStyle from './styles/global';


const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Daniel' }}>
        <SingIn />
      </AuthContext.Provider>

      <GlobalStyle />
    </>
  );
}

export default App;
