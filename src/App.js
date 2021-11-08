import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import Provider from './context/Provider';
import './styles/Login.css';

function App() {
  return (
    <Provider>
      <main>
        <Routes />
      </main>
    </Provider>
  );
}

export default App;
