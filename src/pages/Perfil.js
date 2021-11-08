import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Perfil() {
  const [email, setEmail] = useState();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setEmail(JSON.parse(localStorage.getItem('user')).email);
    }
  }, []);

  const redirectToLogin = () => {
    history.push('/');
    localStorage.clear();
  };

  const redirectToDo = () => {
    history.push('/receitas-feitas');
  };

  const redirectToFavorite = () => {
    history.push('/receitas-favoritas');
  };

  return (
    <section>
      <Header />
      <span data-testid="profile-email">{email}</span>
      <button
        data-testid="profile-done-btn"
        type="button"
        onClick={ redirectToDo }
      >
        Receitas Feitas
      </button>
      <button
        data-testid="profile-favorite-btn"
        type="button"
        onClick={ redirectToFavorite }
      >
        Receitas Favoritas
      </button>
      <button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ redirectToLogin }
      >
        Sair
      </button>
      <Footer />
    </section>
  );
}

Perfil.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Perfil;
