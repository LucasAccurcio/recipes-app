import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import fetchAPI from '../services/fetchAPI';

function BuscarOrigem() {
  const { data, setData, getDataFromAPI } = useContext(Context);
  const [origem, setOrigem] = useState();
  const [area, setArea] = useState();

  useEffect(() => {
    async function getAreas() {
      const URL_AREA = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const areas = await fetchAPI(URL_AREA);
      setOrigem(areas);
    }
    getAreas();
  }, []);

  useEffect(() => {
    async function getComidasArea(origin) {
      if (origin === 'All') {
        await getDataFromAPI();
      } else {
        const URL_COMIDA_AREA = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${origin}`;
        const listMeals = await fetchAPI(URL_COMIDA_AREA);
        setData({
          ...data,
          meals: listMeals.meals,
        });
      }
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
        <option data-testid="All-option" value="All">All</option>
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
