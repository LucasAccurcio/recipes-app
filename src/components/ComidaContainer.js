import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function ComidaContainer(props) {
  const { comida } = props;
  const favorite = whiteHeartIcon;
  console.log(comida);
  return (
    <div>
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
        <button type="button">
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
        {/* data-testid={ `${index}-ingredient-name-and-measure` }  */}
        <h5>Ingredientes</h5>
        <div className="ingredients">
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" />
            Ingredientes
          </label>
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" />
            Ingredientes
          </label>
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" />
            Ingredientes
          </label>
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
      />
      <div>
        {/* data-testid="${index}-recomendation-card" */}
        Recomendações
      </div>
      <div className="start-btn-container">
        <button
          className="start-btn"
          type="button"
          data-testid="start-recipe-btn"
        >
          Começar Receita
        </button>
      </div>
    </div>
  );
}

ComidaContainer.propTypes = {
  comida: PropTypes.objectOf().isRequired,
};

export default ComidaContainer;
