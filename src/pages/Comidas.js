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
        <Header />
        { meals.map(({ strMeal, strMealThumb }, index) => (
          <CardReceita
            key={ index }
            name={ strMeal }
            img={ strMealThumb }
            index={ index }
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
