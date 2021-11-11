import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function CardReceita(props) {
  const { name, img, index, id } = props;
  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <Link to={ { pathname: `${pathname}/${id}`, state: { id } } }>
      <Card
        data-testid={ `${index}-recipe-card` }
        style={ { margin: '5px', width: '10rem' } }
      >
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
  id: PropTypes.string.isRequired,
};

export default CardReceita;
