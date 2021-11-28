import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '~/contexts/auth';
import { theme } from '~/styles/theme';

import { IdProvider } from '@radix-ui/react-id';

const providers = [
  { component: ThemeProvider, props: { theme } },
  { component: AuthProvider },
  { component: IdProvider },
];

type Provider = {
  component: React.JSXElementConstructor<React.PropsWithChildren<any>>;
  props?: any;
};

type ComposeProvidersProps = {
  providers: Provider[];
  children: JSX.Element;
};

const ComposeProviders = ({
  providers = [],
  children,
}: ComposeProvidersProps) => {
  return providers.reduceRight((acc, { component: Provider, props = {} }) => {
    return <Provider {...props}>{acc}</Provider>;
  }, children);
};

export const Providers = ({ children }) => (
  <ComposeProviders providers={providers}>{children}</ComposeProviders>
);
