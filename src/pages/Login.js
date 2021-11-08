import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [validar, setValidar] = useState(true);
  const history = useHistory();

  const fazerLogin = () => {
    const user = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('mealsToken', 1);
    history.push('/comidas');
  };

  const validarEmail = (txt) => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(txt);
  };

  const validarSenha = (pass) => {
    const minimo = 6;
    return pass.length > minimo;
  };

  useEffect(() => {
    const validarLogin = validarEmail(email) && validarSenha(senha);
    if (validarLogin) setValidar(false);
    else setValidar(true);
  }, [email, senha]);

  return (
    <section className="login-container">
      <form className="form-container">
        <h1 className="titulo">Receitas da Trybe</h1>
        <div className="input-content">
          <label htmlFor="email">
            <input
              value={ email }
              name="email"
              type="text"
              data-testid="email-input"
              id="email"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
          <label htmlFor="senha">
            <input
              value={ senha }
              name="senha"
              type="password"
              data-testid="password-input"
              id="senha"
              onChange={ (e) => setSenha(e.target.value) }
            />
          </label>
          <input
            type="submit"
            data-testid="login-submit-btn"
            value="Login"
            disabled={ validar }
            onClick={ fazerLogin }
          />
        </div>
      </form>
    </section>
  );
}

export default Login;
