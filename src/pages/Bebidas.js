import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardReceita from '../components/CardReceita';
import Context from '../context/Context';

function Bebidas() {
  const { data: { drinks } } = useContext(Context);

  function showDrinks() {
    const MAX_DRINKS = 12;
    return (
      <section>
        <Header />
        { drinks.map(({ strDrink, strDrinkThumb }, index) => (
          index < MAX_DRINKS
          && <CardReceita
            key={ index }
            name={ strDrink }
            img={ strDrinkThumb }
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
      { drinks !== null ? showDrinks() : notFound() }
    </section>
  );
}

export default Bebidas;
