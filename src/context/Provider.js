import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../services/fetchAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState({
    meals: [],
    drinks: [],
  });

  const [recipeIngredients, setRecipeIngredients] = useState({
    meals: [],
    drinks: [],
  });

  const [recipeType, setRecipeType] = useState();

  const setInitialLocalStorage = () => {
    if (localStorage.getItem('doneRecipes') === null) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    if (localStorage.getItem('inProgressRecipes') === null) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {
          178319: [],
        },
        meals: {
          52771: [],
        },
      }));
    }
  };

  const getDataFromAPI = async () => {
    const mealsList = await fetchAPI('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const drinksList = await fetchAPI('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    setData({
      meals: mealsList.meals,
      drinks: drinksList.drinks,
    });
  };

  const context = {
    data,
    setData,
    recipeType,
    setRecipeType,
    getDataFromAPI,
    recipeIngredients,
    setRecipeIngredients,
  };

  useEffect(() => {
    getDataFromAPI();
    setInitialLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
