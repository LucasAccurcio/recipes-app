import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import fetchAPI from '../services/fetchAPI';

function BuscarOrigem() {
  const { setRecipeArea } = useContext(Context);
  const [origem, setOrigem] = useState();
  const [area, setArea] = useState();

  useEffect(() => {
    async function getAreas() {
      const URL_AREA = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const data = await fetchAPI(URL_AREA);
      setOrigem(data);
    }
    getAreas();
  }, []);

  useEffect(() => {
    async function getComidasArea(origin) {
      const URL_COMIDA_AREA = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${origin}`;
      const listMeals = await fetchAPI(URL_COMIDA_AREA);
      setRecipeArea(listMeals);
    }
    getComidasArea(area);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [area]);

  function handleChangeSelect({ target }) {
    const { value } = target;
    setArea(value);
  }

  function showDropDown() {
    return (
      <select
        name="area"
        data-testid="explore-by-area-dropdown"
        onChange={ handleChangeSelect }
      >
        { origem.meals.map(({ strArea }, index) => (
          <option data-testid={ `${strArea}-option` } key={ index } value={ strArea }>
            {strArea}
          </option>
        )) }
      </select>
    );
  }

  return (
    <section>
      { origem && showDropDown() }
    </section>
  );
}

export default BuscarOrigem;
