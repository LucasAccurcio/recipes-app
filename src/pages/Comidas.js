import React, { useContext } from 'react';
import CardReceita from '../components/CardReceita';
import Footer from '../components/Footer';
import Header from '../components/Header';
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
      <Header />
      <h1>Comidas</h1>
      { meals ? showReceitas() : 'Not Found' }
      <Footer />
    </section>
  );
}

export default Comidas;
