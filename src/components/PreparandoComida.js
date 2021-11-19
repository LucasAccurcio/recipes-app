import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Modal from './Modal';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import Button from './Button';
import fetchAPI from '../services/fetchAPI';

function PreparandoComida() {
  const { comida, setComida, setInitialLocalStorage } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const THREE_SECONDS = 3000;

  const { location: { pathname } } = useHistory();
  const idPage = pathname.split('/')[2];
  const URL_MEALS = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idPage}`;

  function fetchComida(data) {
    fetchAPI(data)
      .then((response) => setComida(response.meals[0]));
    setLoading(true);
    setInitialLocalStorage();
  }

  function riskLabel(e, item) {
    const { target: { checked } } = e;
    const getLocalStorageData = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const itensDone = getLocalStorageData.meals[idPage];
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
        meals: {
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
        meals: {
          [idPage]: newItensDone,
        },
      }));
    }
  }

  useEffect(() => {
    fetchComida(URL_MEALS);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getIngredientes() {
    const ingredientes = [];
    const NUMBER_OF_INGREDIENTS = 15;
    for (let index = 1; index <= NUMBER_OF_INGREDIENTS; index += 1) {
      const ingred = comida[`strIngredient${index}`];
      const quantidade = comida[`strMeasure${index}`];
      if (ingred !== '' && quantidade !== '') {
        ingredientes.push(`${quantidade} - ${ingred}`);
      }
    }
    return ingredientes;
  }

  return (
    <section>
      <div>
        <Modal modal={ modal } />
        <img
          data-testid="recipe-photo"
          className="image-recipe"
          src={ comida.strMealThumb }
          alt="receita"
        />
        <div className="title-container">
          <div className="text-container">
            <h2 className="margin-txt" data-testid="recipe-title">{comida.strMeal}</h2>
            <h4
              className="category margin-txt"
              data-testid="recipe-category"
            >
              {comida.strCategory}
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
          <Button />
        </div>
        <div className="ingredient-container">
          <h5>Ingredientes</h5>
          <div className="ingredients">
            { loading && getIngredientes().map((item, index) => (
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
          <p data-testid="instructions">{comida.strInstructions}</p>
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

export default PreparandoComida;
