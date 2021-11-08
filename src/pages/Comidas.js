import React, { useContext } from 'react';
import CardReceita from '../components/CardReceita';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';

function Comidas() {
  const { data: { meals } } = useContext(Context);

  function showComidas() {
    const MAX_MEALS = 12;
    return (
      <section>
        { meals.map(({ strMeal, strMealThumb }, index) => (
          index < MAX_MEALS
          && <CardReceita
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
      <Header />
      <h1>Comidas</h1>
      { meals ? showComidas() : 'Not Found' }
      <Footer />
    </section>
  );
}

export default Comidas;
