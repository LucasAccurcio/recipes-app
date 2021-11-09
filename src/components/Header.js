import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import BarraBuscar from './BarraBuscar';

export default function Header({ componentName }) {
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
        <button type="button" onClick={ redirectToProfile }>
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Perfil" />
        </button>
        <span data-testid="page-title">{ componentName }</span>
        <button type="button" onClick={ setStateSearchBar }>
          <img data-testid="search-top-btn" src={ searchIcon } alt="Busca" />
        </button>
        { showSearchBar
          && (
            <BarraBuscar />
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
        <button type="button" onClick={ redirectToProfile }>
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Perfil" />
        </button>
        <span data-testid="page-title">{ componentName }</span>
      </header>
    );
  }
}
