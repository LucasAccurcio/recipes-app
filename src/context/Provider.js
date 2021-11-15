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
