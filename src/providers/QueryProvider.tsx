import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {PropsWithChildren, Suspense} from 'react';

const queryClient = new QueryClient();

const QueryProvider = ({children}: PropsWithChildren) => {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};

export default QueryProvider;
