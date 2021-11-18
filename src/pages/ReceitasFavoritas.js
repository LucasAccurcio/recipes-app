import React, { useState } from 'react';
import Header from '../components/Header';
import CardComidaFavorita from '../components/CardComidaFavorita';
import CardBebidaFavorita from '../components/CardBebidaFavorita';

function ReceitasFavoritas() {
  const [filter, setFilter] = useState({
    recipe: [],
    isFilter: false,
  });
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  function setFilterMeal() {
    const filterComidas = favoriteRecipes.filter(({ type }) => type === 'comida');
    setFilter({
      recipe: filterComidas,
      isFilter: true,
    });
  }

  function setFilterDrink() {
    const filterComidas = favoriteRecipes.filter(({ type }) => type === 'bebida');
    setFilter({
      recipe: filterComidas,
      isFilter: true,
    });
  }

  function setFilterAll() {
    setFilter({
      recipe: [],
      isFilter: false,
    });
  }

  function showRecipeFavorite() {
    return (
      <section className="card-container">
        {!filter.isFilter && favoriteRecipes.map((recipe, index) => (
          (recipe.type === 'comida'
            ? <CardComidaFavorita key={ index } meal={ recipe } index={ index } />
            : <CardBebidaFavorita key={ index } drink={ recipe } index={ index } />)
        )) }
      </section>
    );
  }

  function showRecipeFilter() {
    const { recipe } = filter;
    return (
      <section className="card-container">
        {recipe.map((meal, index) => (
          (recipe.type === 'comida'
            ? <CardComidaFavorita key={ index } meal={ meal } index={ index } />
            : <CardBebidaFavorita key={ index } drink={ meal } index={ index } />)
        )) }
      </section>
    );
  }

  return (
    <section>
      <Header componentName="Receitas Favoritas" />
      <section>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ setFilterAll }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ setFilterMeal }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ setFilterDrink }
        >
          Drinks
        </button>
      </section>
      { filter.isFilter && showRecipeFilter() }
      { showRecipeFavorite() }
    </section>
  );
}

export default ReceitasFavoritas;
