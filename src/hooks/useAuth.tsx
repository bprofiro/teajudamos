import { useContext } from 'react';

import { AuthContext } from '~/contexts/auth';

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
