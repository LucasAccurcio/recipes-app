import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardIngredients from '../components/CardIngredients';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchAPI from '../services/fetchAPI';

function Ingredientes() {
  const [ingredientsMeals, setIngredientesMeals] = useState();
  const [ingredientsDrinks, setIngredientsDrinks] = useState();
  const { location: { pathname } } = useHistory();
  const URL_INGREDIENTS_MEALS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const URL_INGREDIENTS_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const validation = ingredientsDrinks || ingredientsMeals;

  async function getIngredients() {
    if (pathname.includes('/explorar/comidas')) {
      const data = await fetchAPI(URL_INGREDIENTS_MEALS);
      setIngredientesMeals(data.meals);
    }
    if (pathname.includes('/explorar/bebidas')) {
      const data = await fetchAPI(URL_INGREDIENTS_DRINKS);
      setIngredientsDrinks(data.drinks);
    }
  }

  useEffect(() => {
    getIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showIngredients() {
    const MAX_MEALS = 12;
    if (pathname.includes('/explorar/comidas')) {
      return (
        <section>
          { ingredientsMeals.map(({ strIngredient }, index) => (
            index < MAX_MEALS
            && <CardIngredients
              key={ index }
              name={ strIngredient }
              index={ index }
              img={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
            />
          )) }
        </section>
      );
    }
    if (pathname.includes('/explorar/bebidas')) {
      return (
        <section>
          { ingredientsDrinks.map(({ strIngredient1 }, index) => (
            index < MAX_MEALS
            && <CardIngredients
              key={ index }
              name={ strIngredient1 }
              index={ index }
              img={
                `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`
              }
            />
          )) }
        </section>
      );
    }
  }

  return (
    <section>
      <Header componentName="Explorar Ingredientes" />
      { validation && showIngredients() }
      <Footer />
    </section>
  );
}

export default Ingredientes;
