import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const App: React.FC = () => {
  return (
    <div>
      <h1>Auth0 Login Example</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
};

export default App;