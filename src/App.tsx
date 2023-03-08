import {MainLayout} from 'components/mainLayout';
import QueryProvider from 'providers/QueryProvider';
import React from 'react';

import {Routes} from './routes';

function App(): JSX.Element {
  return (
    <QueryProvider>
      <MainLayout>
        <Routes />
      </MainLayout>
    </QueryProvider>
  );
}

export default App;
