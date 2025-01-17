import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';



interface AuthState {
  token: string;
  user: object;
}


interface SingInCredentials {
  email: string,
  password: string,
}

interface AuthContextData {
  user: object;
  singIn(credentials: SingInCredentials): Promise<void>;
  singOut(): void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState;
  });

  const singOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthState);
  }, []);

  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email, password
    });

    console.log(response.data);

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);

    //PARA CONVERTER UM OBJETO EM STRING = JSON.stringify
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
