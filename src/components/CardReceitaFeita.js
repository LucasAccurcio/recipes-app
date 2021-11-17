import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Modal from './Modal';
import shareIcon from '../images/shareIcon.svg';

function CardReceitaFeita(props) {
  const { name, img, category, data, tags, index } = props;
  const THREE_SECONDS = 3000;
  const [modal, setModal] = useState(false);

  return (
    <section>
      <Modal modal={ modal } />
      <Card style={ { width: '10rem' } }>
        <Card.Img data-testid={ `${index}-horizontal-image` } src={ img } />
        <Card.Body>
          <Card.Title data-testid={ `${index}-horizontal-top-text` }>
            { category }
          </Card.Title>
          <Card.Title data-testid={ `${index}-horizontal-name` }>
            { name }
          </Card.Title>
          <Card.Text data-testid={ `${index}-horizontal-done-date` }>
            { `Feita em: ${data}` }
          </Card.Text>
          <Card.Text data-testid={ `${index}-${tags}-horizontal-tag` }>
            { tags }
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
              data-testid="share-btn"
              className="icon"
              src={ shareIcon }
              alt="share icon"
            />
          </button>
        </Card.Body>
      </Card>
    </section>
  );
}

CardReceitaFeita.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default CardReceitaFeita;
