import React from 'react';
import Header from '../components/Header';
import CardComidaFavorita from '../components/CardComidaFavorita';
import CardBebidaFavorita from '../components/CardBebidaFavorita';

function ReceitasFavoritas() {
  function getFavorite() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteRecipes.length === 0) {
      return global.alert('Não existem receitas favoritas');
    }
    return favoriteRecipes;
  }

  function showRecipeFavorite() {
    return (
      <section>
        { getFavorite().map((recipe, index) => (
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
