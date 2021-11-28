import {
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import { storageKey } from '~/utils/storage-key';

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInRequest = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: UserProps;
  isAuthLoading: boolean;
  isAuthenticated: boolean;
  signIn: (params: SignInRequest) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(storageKey('user'));

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isAuthenticated = useMemo(() => !!user, [user]);

  const signIn = useCallback(async ({ email }: SignInRequest) => {
    setIsAuthLoading(true);
    const token = uuidv4();
    const user = { id: uuidv4(), name: email, email };

    localStorage.setItem(storageKey('token'), token);

    setUser(user);
    setIsAuthLoading(false);
  }, []);

  const signOut = useCallback(() => {
    setIsAuthLoading(true);

    localStorage.removeItem(storageKey('token'));

    setUser(null);
    setIsAuthLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, user: user, signOut, isAuthenticated, isAuthLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
