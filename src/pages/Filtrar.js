import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchAPI from '../services/fetchAPI';

function Filtrar() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const isPageDrinks = pathname === '/explorar/bebidas';
  // console.log(pathname);

  let atualComponent = 'Explorar';
  if (pathname === ('/explorar/comidas')) {
    atualComponent = 'Explorar Comidas';
  } else if (pathname === ('/explorar/bebidas')) {
    atualComponent = 'Explorar Bebidas';
  }

  function showButtonOrigin() {
    return (
      <Link to="/explorar/comidas/area">
        <button data-testid="explore-by-area" type="button">
          Por Local de Origem
        </button>
      </Link>
    );
  }

  async function getRecipeRadom() {
    const URL_COMIDA = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const URL_BEBIDA = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    if (isPageDrinks) {
      const bebida = await fetchAPI(URL_BEBIDA);
      history.push(`/bebidas/${bebida.drinks[0].idDrink}`);
    }
    if (!isPageDrinks) {
      const comida = await fetchAPI(URL_COMIDA);
      history.push(`/comidas/${comida.meals[0].idMeal}`);
    }
  }

  return (
    <section>
      <Header componentName={ atualComponent } />
      <h1>Filtrar</h1>
      <section>
        <Link to={ `${pathname}/ingredientes` }>
          <button data-testid="explore-by-ingredient" type="button">
            Por Ingredientes
          </button>
        </Link>

        { !isPageDrinks && showButtonOrigin() }

        <button data-testid="explore-surprise" type="button" onClick={ getRecipeRadom }>
          Me Surpreenda!
        </button>
      </section>
      <Footer />
    </section>
  );
}

export default Filtrar;
