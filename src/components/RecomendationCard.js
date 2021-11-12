import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import fetchAPI from '../services/fetchAPI';
import CardReceita from './CardReceita';

export default function RecomendationCard() {
  const history = useHistory();
  const { location: { pathname } } = history;

  const [recomendation, setRecomendation] = useState([]);
  const MAX_RECOMENDATION = 6;

  const getRecomendation = async () => {
    if (pathname.includes('/comidas')) {
      const dataRecomendation = await fetchAPI('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      setRecomendation(dataRecomendation.drinks);
    } else {
      const dataRecomendation = await fetchAPI('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      setRecomendation(dataRecomendation.meals);
    }
  };

  useEffect(() => {
    getRecomendation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pathname.includes('/comidas')) {
    return (
      <section className="carousel">
        { recomendation && recomendation
          .map(({ strMeal, strMealThumb, idMeal }, index) => (
            index < MAX_RECOMENDATION
            && (
              <section
                key={ index }
                className="card-container"
                data-testid={ `${index}-recomendation-card` }
              >
                <CardReceita
                  key={ index }
                  name={ strMeal }
                  img={ strMealThumb }
                  index={ index }
                  id={ idMeal }
                />
              </section>)
          )) }
      </section>
    );
  }
  return (
    <section className="carousel">
      { recomendation && recomendation
        .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
          index < MAX_RECOMENDATION
            && (
              <section
                className="card-container"
                data-testid={ `${index}-recomendation-card` }
              >
                <CardReceita
                  key={ index }
                  name={ strDrink }
                  img={ strDrinkThumb }
                  index={ index }
                  id={ idDrink }
                />
              </section>)
        )) }
    </section>
  );
}
