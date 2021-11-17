import React from 'react';
import Header from '../components/Header';
import CardComidaFavorita from '../components/CardComidaFavorita';
import CardBebidaFavorita from '../components/CardBebidaFavorita';

function ReceitasFavoritas() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  function showRecipeFavorite() {
    return (
      <section>
        {favoriteRecipes && favoriteRecipes.map((recipe, index) => (
          (recipe.type === 'comida'
            ? <CardComidaFavorita key={ index } meal={ recipe } index={ index } />
            : <CardBebidaFavorita key={ index } drink={ recipe } index={ index } />)
        )) }
      </section>
    );
  }

  return (
    <section>
      <Header componentName="Receitas Favoritas" />
      <section>
        <button data-testid="filter-by-all-btn" type="button">All</button>
        <button data-testid="filter-by-food-btn" type="button">Food</button>
        <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      </section>
      { showRecipeFavorite() }
    </section>
  );
}

export default ReceitasFavoritas;
