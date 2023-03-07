import {MainLayout} from 'components/mainLayout';
import React from 'react';
import {Routes} from 'routes';

function App(): JSX.Element {
  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  );
}

export default App;
