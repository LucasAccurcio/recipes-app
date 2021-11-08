import React, { useContext } from 'react';
import BarraBuscar from '../components/BarraBuscar';
import CardReceita from '../components/CardReceita';
import Context from '../context/Context';

function Comidas() {
  const { data: { meals } } = useContext(Context);

  function showReceitas() {
    return (
      <section>
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
      <BarraBuscar />
      { meals ? showReceitas() : 'Not Found' }
    </section>
  );
}

export default Comidas;
