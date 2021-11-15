import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import Modal from './Modal';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import RecomendationCard from './RecomendationCard';

function ComidaContainer(props) {
  const history = useHistory();
  const { comida } = props;
  const favorite = whiteHeartIcon;
  const [modal, setModal] = useState(false);
  const THREE_SECONDS = 3000;

  function getIngredientes(list) {
    const ingredientes = [];
    const NUMBER_OF_INGREDIENTS = 20;
    for (let index = 1; index <= NUMBER_OF_INGREDIENTS; index += 1) {
      const ingred = list[`strIngredient${index}`];
      const quantidade = list[`strMeasure${index}`];
      if (ingred !== '' && quantidade !== '') {
        ingredientes.push(`${quantidade} - ${ingred}`);
      }
    }
    return ingredientes;
  }

  function startRecipe(id) {
    history.push(`/comidas/${id}/in-progress`);
  }

  function renderTextButton(idToRender) {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { meals } = inProgressRecipes;
    if (Object.keys(meals)[0] === idToRender) return true;
    return false;
  }

  return (
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
        <button type="button">
          <img
            data-testid="favorite-btn"
            className="icon"
            src={ favorite }
            alt="favorite"
          />
        </button>
      </div>
      <div className="ingredient-container">
        <h5>Ingredientes</h5>
        <div className="ingredients">
          { getIngredientes(comida).map((item, index) => (
            item !== 'null - null'
            && (
              <p
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {item}
              </p>
            )
          )) }
        </div>
      </div>
      <div className="instructions">
        <p data-testid="instructions">{comida.strInstructions}</p>
      </div>
      <iframe
        data-testid="video"
        src={ comida.strYoutube }
        title={ comida.strMeal }
        width="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
        allowFullScreen
      />
      <RecomendationCard />
      <div className="start-btn-container">
        <button
          className="start-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => startRecipe(comida.idMeal) }
        >
          { renderTextButton(comida.idMeal) ? 'Continuar Receita' : 'Iniciar Receita' }
        </button>
      </div>
    </div>
  );
}

ComidaContainer.propTypes = {
  comida: PropTypes.objectOf().isRequired,
};

export default ComidaContainer;
