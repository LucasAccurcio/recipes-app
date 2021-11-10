import React, { useContext } from 'react';
import BuscarOrigem from '../components/BuscarOrigem';
import CardReceita from '../components/CardReceita';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';

function Origem() {
  const { recipeArea } = useContext(Context);
  const MAX_RECIPE = 12;

  console.log(recipeArea.meals);

  function showRecipes() {
    return (
      <section>
        { recipeArea.meals.map(({ strMeal, strMealThumb, idMeal }, index) => (
          index < MAX_RECIPE
        && <CardReceita
          key={ idMeal }
          name={ strMeal }
          img={ strMealThumb }
          id={ idMeal }
        />
        )) }
      </section>
    );
  }

  return (
    <section>
      <Header componentName="Explorar Origem" />
      <BuscarOrigem />
      { recipeArea.meals && showRecipes() }
      <Footer />
    </section>
  );
}

export default Origem;
