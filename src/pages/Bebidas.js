import React, { useContext } from 'react';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';
import Header from '../components/Header';
import CardReceita from '../components/CardReceita';
import Context from '../context/Context';

function Bebidas() {
  const { data: { drinks } } = useContext(Context);

  function showDrinks() {
    const MAX_DRINKS = 12;
    return (
      <section>
        <Header componentName="Bebidas" />
        <CategoryFilter url="https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list" />
        { drinks.map(({ strDrink, strDrinkThumb, idDrink }, index) => (
          index < MAX_DRINKS
          && <CardReceita
            key={ index }
            name={ strDrink }
            img={ strDrinkThumb }
            index={ index }
            id={ idDrink }
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
