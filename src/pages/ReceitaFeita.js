import React from 'react';
import Header from '../components/Header';
// import CardReceitaFeita from '../components/CardReceitaFeita';

function ReceitaFeita() {
  return (
    <section>
      <Header componentName="Receitas Feitas" />
      <h1>Receita Feita</h1>
      {/* <section>
        <button data-testid="filter-by-all-btn" type="button">All</button>
        <button data-testid="filter-by-food-btn" type="button">Food</button>
        <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      </section>
      <section>
        { receitas.meals.map(({ strMeal, strMealThumb, strCategory }, index) => (
          <CardReceitaFeita
            key={ index }
            name={ strMeal }
            img={ strMealThumb }
            category={ strCategory }
            index={ index }
            data="16/11/2021"
            tags=" "
          />
        )) }
      </section> */}
    </section>
  );
}
export default ReceitaFeita;
