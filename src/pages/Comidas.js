import React, { useContext } from 'react';
import CardReceita from '../components/CardReceita';
import Header from '../components/Header';
import Context from '../context/Context';

function Comidas() {
  const { data: { meals } } = useContext(Context);

  function showReceitas() {
    return (
      <section>
        <Header />
        { meals.map(({ strMeal, strMealThumb }, index) => (
          <CardReceita
            key={ index }
            name={ strMeal }
            img={ strMealThumb }
            index={ index }
          />
        )) }
      </section>
    );
  }

  return (
    <section>
      <h1>Comidas</h1>
      { meals ? showReceitas() : 'Not Found' }
    </section>
  );
}

export default Comidas;
