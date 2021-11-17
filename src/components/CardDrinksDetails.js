import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Modal from './Modal';
import shareIcon from '../images/shareIcon.svg';
import RecomendationCard from './RecomendationCard';
import Context from '../context/Context';
import FavoriteDrinksButton from './FavoriteDrinksButton';

function CardDrinksDetails() {
  const { drinks } = useContext(Context);
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const THREE_SECONDS = 3000;

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

  function startRecipe(id) {
    history.push(`/bebidas/${id}/in-progress`);
  }

  function renderTextButton(idToRender) {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { cocktails } = inProgressRecipes;
    if (Object.keys(cocktails)[0] === idToRender) return true;
    return false;
  }

  return (
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
            {` (${drinks.strAlcoholic})`}
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
        {/* data-testid={ `${index}-ingredient-name-and-measure` }  */}
        <h5>Ingredientes</h5>
        <div className="ingredients">
          { getIngredientes(drinks).map((item, index) => (
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
        <p data-testid="instructions">{drinks.strInstructions}</p>
      </div>
      <RecomendationCard />
      <div className="start-btn-container">
        <button
          className="start-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => startRecipe(drinks.idDrink) }
        >
          { renderTextButton(drinks.idDrink) ? 'Continuar Receita' : 'Iniciar Receita' }
        </button>
      </div>
    </div>
  );
}

export default CardDrinksDetails;
