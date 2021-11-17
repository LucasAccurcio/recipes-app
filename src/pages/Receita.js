import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router';
import ComidaContainer from '../components/ComidaContainer';
import CardDrinksDetails from '../components/CardDrinksDetails';
import fetchAPI from '../services/fetchAPI';
import '../App.css';
import Context from '../context/Context';

function Receitas() {
  const { location: { pathname } } = useHistory();
  const { id } = useParams();
  const URL_MEALS = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const URL_DRINKS = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { setComida, setDrinks } = useContext(Context);
  // const [comida, setComida] = useState([]); // passei essa linha para o Provider
  // const [drinks, setDrinks] = useState([]); // passei essa linha para o Provider
  const [loading, setLoading] = useState(false);

  function fetchComida(data) {
    fetchAPI(data)
      .then((response) => setComida(response.meals[0]));
    setLoading(true);
  }

  function fetchDrinks(endpoint) {
    fetchAPI(endpoint)
      .then((response) => setDrinks(response.drinks[0]));
    setLoading(true);
  }

  useEffect(() => {
    if (pathname.includes('comidas')) {
      fetchComida(URL_MEALS);
    } else {
      fetchDrinks(URL_DRINKS);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showRecipes(path) {
    if (path.includes('/comidas')) {
      return (<ComidaContainer />);
    }
    return (<CardDrinksDetails />);
  }

  return (
    <section className="recipe-container">
      {!loading ? <p>loading</p> : showRecipes(pathname) }
    </section>
  );
}

export default Receitas;
