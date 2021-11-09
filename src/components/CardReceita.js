import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardReceita(props) {
  const { name, img, index, idMeal } = props;

  return (
    <Link to={ { pathname: `/comidas/${idMeal}`, state: { idMeal } } }>
      <Card data-testid={ `${index}-recipe-card` } style={ { width: '10rem' } }>
        <Card.Img
          data-testid={ `${index}-card-img` }
          variant="top"
          src={ img }
        />
        <Card.Body>
          <Card.Title data-testid={ `${index}-card-name` }>
            { name }
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

CardReceita.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  idMeal: PropTypes.string.isRequired,
};

export default CardReceita;
