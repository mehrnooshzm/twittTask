// src/context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import Cookies from "js-cookie";

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = Cookies.get("token");
    if (savedToken) setTokenState(savedToken);
  }, []);

  const setToken = (token: string | null) => {
    if (token) {
      Cookies.set("token", token, { expires: 7, path: "/" });
    } else {
      Cookies.remove("token");
    }
    setTokenState(token);
  };

  const logout = () => {
    Cookies.remove("token");
    setTokenState(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
