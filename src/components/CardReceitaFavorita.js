import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from './Button';
import Modal from './Modal';
import shareIcon from '../images/shareIcon.svg';

function CardReceitaFavorita(props) {
  const { name, img, category, index } = props;
  const [modal, setModal] = useState(false);
  const THREE_SECONDS = 3000;

  return (
    <section>
      <Modal modal={ modal } />
      <Card style={ { width: '18rem' } }>
        <Card.Img data-testid={ `${index}-horizontal-image` } src={ img } />
        <Card.Body>
          <Card.Title data-testid={ `${index}-horizontal-top-text` }>
            { category }
          </Card.Title>
          <Card.Title data-testid={ `${index}-horizontal-name` }>
            { name }
          </Card.Title>
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
              data-testid="share-btn"
              className="icon"
              src={ shareIcon }
              alt="share icon"
            />
          </button>
          <Button />
        </Card.Body>
      </Card>
    </section>
  );
}

CardReceitaFavorita.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardReceitaFavorita;
