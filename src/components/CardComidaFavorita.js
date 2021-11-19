import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function CardComidaFavorita(props) {
  const { meal: { image, name, category, area, id }, index } = props;
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const THREE_SECONDS = 3000;

  function desfavoritar(idMeal) {
    const getLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newStorage = getLocalStorage.filter((recipe) => recipe.id !== idMeal);
    console.log(newStorage);
    localStorage.setItem('favoriteRecipes', JSON.stringify([...newStorage]));
    history.push('/receitas-favoritas');
  }

  return (
    <section>
      <Modal modal={ modal } />
      <Link to={ `/comidas/${id}` }>
        <Card style={ { width: '10rem' } }>
          <Card.Img data-testid={ `${index}-horizontal-image` } src={ image } />
          <Card.Body>
            <Card.Title data-testid={ `${index}-horizontal-name` }>
              { name }
            </Card.Title>
            <Card.Text data-testid={ `${index}-horizontal-top-text` }>
              { `${area} - ${category}` }
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <section>
        <button
          type="button"
          onClick={ () => {
            window.navigator.clipboard.writeText(`http://localhost:3000/comidas/${id}`);
            setModal(true);
            setTimeout(() => {
              setModal(false);
            }, THREE_SECONDS);
          } }
        >
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            className="icon"
            src={ shareIcon }
            alt="share icon"
          />
        </button>
        <button
          type="button"
          onClick={ () => desfavoritar(id) }
        >
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            className="icon"
            src={ blackHeartIcon }
            alt="favorite"
          />
        </button>
      </section>
    </section>
  );
}

CardComidaFavorita.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardComidaFavorita;
