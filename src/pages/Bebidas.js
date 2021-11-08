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
        { drinks.map(({ strDrink, strDrinkThumb }, index) => (
          index < MAX_DRINKS
          && <CardReceita
            key={ index }
            name={ strDrink }
            img={ strDrinkThumb }
            index={ index }
          />
        )) }
      </section>
    );
  }

  return (
    <section>
      <Header />
      <h1>Bebidas</h1>
      { drinks ? showDrinks() : 'Not Found' }
      <Footer />
    </section>
  );
}

export default Bebidas;
