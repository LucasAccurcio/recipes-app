import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import fetchAPI from '../services/fetchAPI';

const INITIAL_STATE = [{ strCategory: 'All' }];

export default function CategoryFilter({ url }) {
  const [category, setCategory] = useState(INITIAL_STATE);
  const getCategory = async () => {
    const categoryFilter = await fetchAPI(url);
    const MAX_CATEGORY = 5;
    const page = url.split('www.')[1].split('.com')[0];
    if (page === 'themealdb') {
      setCategory([...category, ...categoryFilter.meals
        .filter((_, index) => index < MAX_CATEGORY)]);
      return null;
    }
    setCategory([...category, ...categoryFilter.drinks
      .filter((_, index) => index < MAX_CATEGORY)]);
  };

  useEffect(() => {
    getCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      { category && category
        .map((cat, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${cat.strCategory}-category-filter` }
          >
            { cat.strCategory }
          </button>
        )) }
    </nav>
  );
}

CategoryFilter.propTypes = {
  url: PropTypes.string.isRequired,
};
