import React, { useContext } from 'react';
import CardReceita from '../components/CardReceita';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';

function Comidas() {
  const { data: { meals } } = useContext(Context);

  function showReceitas() {
    const MAX_MEALS = 12;
    return (
      <section>
        <Header componentName="Comidas" />
        <CategoryFilter url="https://www.themealdb.com/api/json/v1/1/list.php?c=list" />
        { meals.map(({ strMeal, strMealThumb, idMeal }, index) => (
          index < MAX_MEALS
          && <CardReceita
            key={ index }
            name={ strMeal }
            img={ strMealThumb }
            index={ index }
            id={ idMeal }
          />
        )) }
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
      { meals !== null ? showReceitas() : notFound() }
    </section>
  );
}

export default Comidas;
