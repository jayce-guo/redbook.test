import { createContext, useContext, useEffect, useState } from 'react';
import { loginAPI, registerAPI, getCurrentUser } from '@/api/auth';

type User = {
  id: string;
  username: string;
  avatar: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loginWithWechat: (code: string) => Promise<void>;
  loginWithSMS: (phone: string, code: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  loginWithWechat: async () => {},
  loginWithSMS: async () => {}
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        setUser(null);
      }
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const userData = await loginAPI(email, password);
    setUser(userData);
  };

  const register = async (username: string, email: string, password: string) => {
    const userData = await registerAPI(username, email, password);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const loginWithWechat = async (code: string) => {
    const response = await axios.post('/api/auth/wechat', { code });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
  };

  const loginWithSMS = async (phone: string, code: string) => {
    const response = await axios.post('/api/auth/sms-login', { phone, code });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login,
      register,
      logout,
      loginWithWechat,
      loginWithSMS
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
