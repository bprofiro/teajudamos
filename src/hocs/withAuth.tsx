import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';

type withAuthReturn = (props: any) => JSX.Element;

export const withAuth = (Component: withAuthReturn) => {
  const Wrapper = (props: any) => {
    const { user, isAuthLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthLoading && !user) router.push('/');
    }, [isAuthLoading, user, router]);

    if (isAuthLoading || !user) {
      return <h1>Loading...</h1>;
    }

    return <Component {...props} />;
  };

  return Wrapper;
};
