import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Context from '../context/Context';
import fetchAPI from '../services/fetchAPI';

function BarraBuscar() {
  const [busca, setBusca] = useState();
  const { data, setData, recipeType, setRecipeType } = useContext(Context);
  const history = useHistory();
  const page = history.location.pathname.split('/')[1];

  useEffect(() => {
    if (page === 'bebidas' || recipeType === 'cocktail') {
      setRecipeType('cocktail');
    } else if (page === 'comidas' || recipeType === 'meal') {
      setRecipeType('meal');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChangeInput({ target }) {
    const { name, value } = target;
    setBusca({ ...busca, [name]: value });
  }

  function showAlert() {
    return (
      global.alert('Sua busca deve conter somente 1 (um) caracter')
    );
  }

  async function requestBuscaReceita({ text, type }) {
    const VALIDATION_LETRA = text.length > 1;
    const URL_INGREDIENTES = `https://www.the${recipeType}db.com/api/json/v1/1/filter.php?i=${text}`;
    const URL_NOME = `https://www.the${recipeType}db.com/api/json/v1/1/search.php?s=${text}`;
    const URL_PRIMEIRA_LETRA = `https://www.the${recipeType}db.com/api/json/v1/1/search.php?f=${text}`;
    console.log(URL_INGREDIENTES, URL_NOME, URL_PRIMEIRA_LETRA);
    switch (type) {
    case 'ingrediente':
      return setData(await fetchAPI(URL_INGREDIENTES));
    case 'nome':
      return setData(await fetchAPI(URL_NOME));
    case 'primeira letra':
      return (VALIDATION_LETRA ? showAlert() : setData(await fetchAPI(URL_PRIMEIRA_LETRA))
      );
    default:
      break;
    }
  }

  function redirectReceive(receita, type) {
    if (type === 'comidas' && receita.meals.length === 1) {
      history.push(`/comidas/${receita.meals[0].idMeal}`);
    } else if (type === 'bebidas' && receita.drinks.length === 1) {
      history.push(`/bebidas/${receita.drinks[0].idDrink}`);
    }
  }

  redirectReceive(data, page);

  return (
    <section>
      <div className="form-container">
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
          onClick={ () => requestBuscaReceita(busca) }
        >
          Buscar
        </button>
      </div>
    </section>
  );
}

export default BarraBuscar;
