import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Context from '../context/Context';

function FavoriteDrinksButton() {
  const { drinks } = useContext(Context);
  const [favorito, setFavorito] = useState({
    img: whiteHeartIcon,
    isFavorite: false,
  });
  const history = useHistory();
  const { location: { pathname } } = history;
  const idPage = (
    pathname.includes('comidas')
      ? pathname.split('/comidas/')[1]
      : pathname.split('/bebidas/')[1]
  );

  function renderButton() {
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    const getLocalStorageData = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getLocalStorageData.some(({ id }) => idPage === id)) {
      setFavorito({
        img: blackHeartIcon,
        isFavorite: true,
      });
    } else {
      setFavorito({
        img: whiteHeartIcon,
        isFavorite: false,
      });
    }
  }

  function favoritar() {
    const getLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favorito.isFavorite) {
      setFavorito({
        img: blackHeartIcon,
        isFavorite: true,
      });

      const setData = {
        id: drinks.idDrink,
        type: 'bebida',
        area: '',
        category: drinks.strCategory,
        alcoholicOrNot: drinks.strAlcoholic,
        name: drinks.strDrink,
        image: drinks.strDrinkThumb,
      };
      localStorage
        .setItem('favoriteRecipes', JSON.stringify([...getLocalStorage, setData]));
    } else {
      const newStorage = getLocalStorage.filter((recipe) => recipe.id !== drinks.idDrink);
      localStorage
        .setItem('favoriteRecipes', JSON.stringify(newStorage));
      setFavorito({
        img: whiteHeartIcon,
        isFavorite: false,
      });
    }
  }

  useEffect(() => {
    renderButton();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      type="button"
      onClick={ favoritar }
    >
      <img
        data-testid="favorite-btn"
        className="icon"
        src={ favorito.img }
        alt="favorite"
      />
    </button>
  );
}

export default FavoriteDrinksButton;
