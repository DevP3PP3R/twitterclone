import React from 'react';
import {useState} from 'react';
import AppRouter from './Router';
import {authService} from '../fbase';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser? true : false);
    
  return (
    <AppRouter isLoggedIn={isLoggedIn} />
  );
}

export default App;
