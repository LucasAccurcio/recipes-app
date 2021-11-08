import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Filtrar() {
  const history = useHistory();
  const { location: { pathname } } = history;
  console.log(pathname);
  let atualComponent = 'Explorar';
  if (pathname === ('/explorar/comidas')) {
    atualComponent = 'Explorar Comidas';
  } else if (pathname === ('/explorar/bebidas')) {
    atualComponent = 'Explorar Bebidas';
  }

  return (
    <section>
      <Header componentName={ atualComponent } />
      <h1>Filtrar</h1>
      <Footer />
    </section>
  );
}

export default Filtrar;
