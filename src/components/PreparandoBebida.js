import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Modal from './Modal';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import FavoriteDrinksButton from './FavoriteDrinksButton';
import fetchAPI from '../services/fetchAPI';

function PreparandoBebida() {
  const { drinks, setDrinks, setInitialLocalStorage } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const THREE_SECONDS = 3000;

  const { location: { pathname } } = useHistory();
  const idPage = pathname.split('/')[2];
  const URL_DRINKS = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idPage}`;

  function loadRecipeStatus() {
    const getLocalStorageData = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocalStorageData !== undefined) {
      const itensDone = getLocalStorageData.cocktails[idPage];
      if (itensDone !== undefined) {
        itensDone.forEach((e) => {
          const inputCheck = document.getElementsByClassName(e)[0];
          if (inputCheck !== undefined) {
            inputCheck.style.textDecoration = 'line-through';
            inputCheck.firstChild.checked = true;
          }
        });
      }
    }
  }

  function fetchDrinks(endpoint) {
    setInitialLocalStorage();
    fetchAPI(endpoint)
      .then((response) => setDrinks(response.drinks[0]));
    setLoading(true);
  }

  function riskLabel(e, item) {
    const { target: { checked } } = e;
    const getLocalStorageData = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const itensDone = getLocalStorageData.cocktails[idPage];
    if (checked) {
      let newItensDone = [];
      document
        .getElementsByClassName(item)[0]
        .style.textDecoration = 'line-through';
      if (itensDone === undefined) {
        newItensDone = [item];
      } else {
        newItensDone = [...itensDone, item];
      }
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...getLocalStorageData,
        cocktails: {
          [idPage]: newItensDone,
        },
      }));
    } else {
      document
        .getElementsByClassName(item)[0]
        .style.textDecoration = 'none';
      const newItensDone = itensDone.filter((element) => element !== item);
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...getLocalStorageData,
        cocktails: {
          [idPage]: newItensDone,
        },
      }));
    }
  }

  function getIngredientes(list) {
    const ingredientes = [];
    const NUMBER_OF_INGREDIENTS = 15;
    for (let index = 1; index <= NUMBER_OF_INGREDIENTS; index += 1) {
      const ingred = list[`strIngredient${index}`];
      const quantidade = list[`strMeasure${index}`];
      if (ingred !== '' && quantidade !== '') {
        ingredientes.push(`${quantidade} - ${ingred}`);
      }
    }
    return ingredientes;
  }

  useEffect(() => {
    fetchDrinks(URL_DRINKS);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ALMOST_ONE_SEC = 545;
    setTimeout(() => {
      loadRecipeStatus();
    }, ALMOST_ONE_SEC);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <section>
      <div>
        <Modal modal={ modal } />
        <img
          data-testid="recipe-photo"
          className="image-recipe"
          src={ drinks.strDrinkThumb }
          alt="receita"
        />
        <div className="title-container">
          <div className="text-container">
            <h2 className="margin-txt" data-testid="recipe-title">{drinks.strDrink}</h2>
            <h4
              className="category margin-txt"
              data-testid="recipe-category"
            >
              {drinks.strAlcoholic}
            </h4>
          </div>
          <button
            type="button"
            onClick={ () => {
              window.navigator.clipboard.writeText(window.location.href);
              setModal(true);
              setTimeout(() => {
                setModal(false);
              }, THREE_SECONDS);
            } }
          >
            <img
              data-testid="share-btn"
              className="icon"
              src={ shareIcon }
              alt="share icon"
            />
          </button>
          <FavoriteDrinksButton />
        </div>
        <div className="ingredient-container">
          <h5>Ingredientes</h5>
          <div className="ingredients">
            { loading && getIngredientes(drinks).map((item, index) => (
              item !== 'null - null'
            && (
              <label
                key={ index }
                htmlFor={ item }
                className={ item }
                data-testid={ `${index}-ingredient-step` }
                style={ { textDecoration: 'none' } }
              >
                <input
                  id={ item }
                  name={ item }
                  type="checkbox"
                  onClick={ (e) => riskLabel(e, item) }
                />
                { item }
              </label>
            )
            )) }
          </div>
        </div>
        <div className="instructions">
          <p data-testid="instructions">{drinks.strInstructions}</p>
        </div>
        <div className="start-btn-container">
          <button
            className="start-btn"
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finalizar Receita
          </button>
        </div>
      </div>
    </section>
  );
}

export default PreparandoBebida;
