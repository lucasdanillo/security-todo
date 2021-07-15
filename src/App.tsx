import React from 'react';
import Routes from './routes';
import { AuthContext } from './context/AuthContext';

function App() {
  return (
    <AuthContext>
      <Routes />
    </AuthContext>
  );
}

export default App;
