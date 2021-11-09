import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Filtrar() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const isPageDrinks = pathname === '/explorar/bebidas';
  console.log(pathname);
  let atualComponent = 'Explorar';
  if (pathname === ('/explorar/comidas')) {
    atualComponent = 'Explorar Comidas';
  } else if (pathname === ('/explorar/bebidas')) {
    atualComponent = 'Explorar Bebidas';
  }

  function showButtonOrigin() {
    return (
      <button data-testid="explore-by-area" type="button">
        Por Local de Origem
      </button>
    );
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

        <button data-testid="explore-surprise" type="button">
          Me Surpreenda!
        </button>
      </section>
      <Footer />
    </section>
  );
}

export default Filtrar;
