import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Perfil() {
  const [email, setEmail] = useState();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setEmail(JSON.parse(localStorage.getItem('user')).email);
    }
  }, []);

  const redirectToLogin = () => {
    history.push('/');
  };
  
  const redirectToDo = () => {
    history.push('/receitas-feitas');
  };
  
  const redirectToFavorite = () => {
    history.push('/receitas-favoritas');
    localStorage.clear;
  };

  return (
    <section>
      <span data-testid="profile-email" > {email} </span>
      <button data-testid="profile-done-btn"  type="button" onClick={ redirectToLogin }> Receitas Feitas </button>
      <button data-testid="profile-favorite-btn"  type="button" onClick={ redirectToDo }> receitas Favoritas </button>
      <button data-testid="profile-logout-btn" type="button" onClick={ redirectToFavorite }> Sair </button>
    </section>
  );
}

Perfil.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Perfil;
