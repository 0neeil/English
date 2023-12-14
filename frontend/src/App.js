import React from 'react';
import NavBar from './components/NavBar'; 

import { BrowserRouter } from 'react-router-dom';
import AppRouters from './components/AppRouters';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouters/>
    </BrowserRouter>
  );
}

export default App;
