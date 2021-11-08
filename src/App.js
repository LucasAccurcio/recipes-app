import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import Provider from './context/Provider';
import './styles/Login.css';

function App() {
  return (
    <Provider>
      <main className="login-container">
        <div className="form-container">
          <Routes />
        </div>
      </main>
    </Provider>
  );
}

export default App;
