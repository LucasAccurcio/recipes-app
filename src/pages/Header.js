import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const history = useHistory();
  const { location: { pathname } } = history;

  const redirectToProfile = () => {
    history.push('/perfil');
  };

  const setStateSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  if (pathname === '/comidas'
  || pathname === '/bebidas'
  || pathname === '/explorar/comidas/area'
  ) {
    return (
      <header className="header-content">
        <button data-testid="profile-top-btn" type="button" onClick={ redirectToProfile }>
          <img src={ profileIcon } alt="Perfil" />
        </button>
        <span data-testid="page-title">Componente a ser renderizado</span>
        <button data-testid="search-top-btn" type="button" onClick={ setStateSearchBar }>
          <img src={ searchIcon } alt="Busca" />
        </button>
        { showSearchBar
          && (
            <section>
              <div>
                <input
                  data-testid="search-input"
                  type="text"
                  placeholder="Buscar Receita"
                />
              </div>
              <label htmlFor="ingredient-radio">
                <input
                  type="radio"
                  data-testid="ingredient-search-radio"
                  id="ingredient-radio"
                  name="search"
                  value="ingrediente"
                />
                Ingrediente
              </label>
              <label htmlFor="name-radio">
                <input
                  type="radio"
                  data-testid="name-search-radio"
                  id="name-radio"
                  name="search"
                  value="nome"
                />
                Nome
              </label>
              <label htmlFor="first-letter-radio">
                <input
                  type="radio"
                  data-testid="first-letter-search-radio"
                  id="first-letter-radio"
                  name="search"
                  value="primeira letra"
                />
                Primeira letra
              </label>
              <div>
                <button type="button" data-testid="exec-search-btn">Buscar</button>
              </div>
            </section>
          ) }
      </header>
    );
  }
  // ESSE IF PRECISA SER TESTADO (ACHEI QUE ESSA IMPLEMENTAÇÃO PODERIA FICAR MAIS FÁCIL DO
  // QUE COLOCAR TODAS AS OUTRAS ROTAS NAS CONDIÇÕES)
  if (pathname !== '/comidas'
  && pathname !== '/bebidas'
  && pathname !== '/explorar/comidas/area'
  ) {
    return (
      <header>
        <button data-testid="profile-top-btn" type="button" onClick={ redirectToProfile }>
          <img src={ profileIcon } alt="Perfil" />
        </button>
        <span data-testid="page-title">Componente a ser renderizado</span>
      </header>
    );
  }
}
