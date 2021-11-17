import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Modal from './Modal';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function CardComidaFavorita(props) {
  const { meal: { image, name, category, area }, index } = props;
  const [modal, setModal] = useState(false);
  const THREE_SECONDS = 3000;

  return (
    <section>
      <Modal modal={ modal } />
      <Card style={ { width: '10rem' } }>
        <Card.Img data-testid={ `${index}-horizontal-image` } src={ image } />
        <Card.Body>
          <Card.Title data-testid={ `${index}-horizontal-name` }>
            { name }
          </Card.Title>
          <Card.Text data-testid={ `${index}-horizontal-top-text` }>
            { `${area} - ${category}` }
          </Card.Text>
          <button
            type="button"
            onClick={ () => {
              window.navigator.clipboard.writeText(window.location.href);
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
          >
            <img
              data-testid={ `${index}-horizontal-favorite-btn` }
              className="icon"
              src={ blackHeartIcon }
              alt="favorite"
            />
          </button>
        </Card.Body>
      </Card>
    </section>
  );
}

CardComidaFavorita.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardComidaFavorita;
