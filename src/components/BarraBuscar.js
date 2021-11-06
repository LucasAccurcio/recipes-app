import React, { useState } from 'react';
import { useHistory } from 'react-router';
import fetchAPI from '../services/fetchAPI';

function BarraBuscar() {
  const [busca, setBusca] = useState();
  const [request, setRequest] = useState();
  const history = useHistory();
  const page = history.location.pathname.split('/')[1];

  console.log(request);

  function handleChangeInput({ target }) {
    const { name, value } = target;
    setBusca({ ...busca, [name]: value });
  }

  function showAlert() {
    return (
      global.alert('Sua busca deve conter somente 1 (um) caracter')
    );
  }

  async function requestBuscaComida({ text, type }) {
    const VALIDATION_LETRA = text.length > 1;
    const URL_INGREDIENTES = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`;
    const URL_NOME = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
    const URL_PRIMEIRA_LETRA = `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`;
    switch (type) {
    case 'ingrediente':
      return setRequest(await fetchAPI(URL_INGREDIENTES));
    case 'nome':
      return setRequest(await fetchAPI(URL_NOME));
    case 'primeira letra':
      return (
        VALIDATION_LETRA ? showAlert() : setRequest(await fetchAPI(URL_PRIMEIRA_LETRA))
      );
    default:
      return 'Nenhuma comida encontrada';
    }
  }

  async function requestBuscaBebida({ text, type }) {
    const VALIDATION_LETRA = text.length > 1;
    const URL_INGREDIENTES = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text}`;
    const URL_NOME = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
    const URL_PRIMEIRA_LETRA = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${text}`;
    switch (type) {
    case 'ingrediente':
      return setRequest(await fetchAPI(URL_INGREDIENTES));
    case 'nome':
      return setRequest(await fetchAPI(URL_NOME));
    case 'primeira letra':
      return (
        VALIDATION_LETRA ? showAlert() : setRequest(await fetchAPI(URL_PRIMEIRA_LETRA))
      );
    default:
      return 'Nenhuma comida encontrada';
    }
  }

  function clickBusca(typePage) {
    if (typePage === 'comidas') {
      requestBuscaComida(busca);
    } else if (typePage === 'bebidas') {
      requestBuscaBebida(busca);
    }
  }

  return (
    <section>
      <div>
        <input
          name="text"
          data-testid="search-input"
          type="text"
          placeholder="Buscar Receita"
          onChange={ handleChangeInput }
        />
      </div>
      <label htmlFor="ingredient-radio">
        <input
          name="type"
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-radio"
          value="ingrediente"
          onChange={ handleChangeInput }
        />
        Ingrediente
      </label>
      <label htmlFor="name-radio">
        <input
          name="type"
          type="radio"
          data-testid="name-search-radio"
          id="name-radio"
          value="nome"
          onChange={ handleChangeInput }
        />
        Nome
      </label>
      <label htmlFor="first-letter-radio">
        <input
          name="type"
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-radio"
          value="primeira letra"
          onChange={ handleChangeInput }
        />
        Primeira letra
      </label>
      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => clickBusca(page) }
        >
          Buscar
        </button>
      </div>
    </section>
  );
}

export default BarraBuscar;
