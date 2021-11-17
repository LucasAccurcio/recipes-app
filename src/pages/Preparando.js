import React from 'react';
// import { useHistory } from 'react-router';
// import PreparandoComida from '../components/PreparandoComida';

function Preparando() {
  // const history = useHistory();
  // const { location: { pathname } } = history;

  // if (pathname.includes('/comidas')) {
  return (
    <section>
      <h1>Preparando</h1>
      <div className="ingredients">
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" />
          Ingredientes
        </label>
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" />
          Ingredientes
        </label>
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" />
          Ingredientes
        </label>
      </div>
      {/* <PreparandoComida /> */}
    </section>
  );
  // }
}

export default Preparando;
