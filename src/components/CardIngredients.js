import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

function CardIngredients(props) {
  const { name, img, index } = props;

  return (
    <section>
      <Card data-testid={ `${index}-ingredient-card` } className="recomendation">
        <Card.Img
          data-testid={ `${index}-card-img` }
          src={ img }
        />
        <Card.Body>
          <Card.Title data-testid={ `${index}-card-name` }>
            { name }
          </Card.Title>
        </Card.Body>
      </Card>
    </section>
  );
}

CardIngredients.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardIngredients;
