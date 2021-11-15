import React, { useContext } from 'react';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';
import Header from '../components/Header';
import CardReceita from '../components/CardReceita';
import Context from '../context/Context';

function Bebidas() {
  const { data: { drinks }, recipeIngredients } = useContext(Context);

  function selectRecipe() {
    if (recipeIngredients.drinks.length > 0) {
      return recipeIngredients.drinks;
    }
    return drinks;
  }

  function showDrinks() {
    const MAX_DRINKS = 12;
    return (
      <section>
        <Header componentName="Bebidas" />
        <CategoryFilter url="https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list" />
        <section className="card-container">
          { selectRecipe().map(({ strDrink, strDrinkThumb, idDrink }, index) => (
            index < MAX_DRINKS
          && <CardReceita
            key={ index }
            name={ strDrink }
            img={ strDrinkThumb }
            index={ index }
            id={ idDrink }
          />
          )) }
        </section>
        <Footer />
      </section>
    );
  }

  function notFound() {
    return (
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    );
  }

  return (
    <section>
      { drinks !== null ? showDrinks() : notFound() }
    </section>
  );
}

export default Bebidas;
