import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ComidaContainer from '../components/ComidaContainer';
import fetchAPI from '../services/fetchAPI';
import '../App.css';

function Receitas() {
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [comida, setComida] = useState([]);
  const [loading, setLoading] = useState(false);
  function fetchComida(data) {
    fetchAPI(data)
      .then((response) => setComida(response.meals[0]));
    setLoading(true);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchComida(url), []);
  return (
    <section className="recipe-container">
      {!loading ? <p>loading</p> : <ComidaContainer comida={ comida } />}
    </section>
  );
}

export default Receitas;
