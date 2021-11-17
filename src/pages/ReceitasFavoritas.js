import React from 'react';
import Header from '../components/Header';
// import CardReceitaFavorita from '../components/CardReceitaFavorita';

function ReceitasFavoritas() {
  // function getFavoriteStorage() {
  //   const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  //   if (favoriteRecipes.length === 0) {
  //     return global.alert('Não existem receitas favoritas');
  //   }
  //   return favoriteRecipes;
  // }

  return (
    <section>
      <Header componentName="Receitas Favoritas" />
      {/* <section>
        <button data-testid="filter-by-all-btn" type="button">All</button>
        <button data-testid="filter-by-food-btn" type="button">Food</button>
        <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      </section>
      { getFavoriteStorage().map(({ name, image, category, alcoholicOrNot }, index) => (
        <CardReceitaFavorita
          key={ index }
          name={ name }
          img={ image }
          alcoholic={ alcoholicOrNot }
          category={ category }
        />
      )) } */}
    </section>
  );
}

export default ReceitasFavoritas;
