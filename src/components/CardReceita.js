import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function CardReceita(props) {
  const { name, img, index, id } = props;
  const { location: { pathname } } = useHistory();
  const sizePath = 4;
  const rota = pathname.split('/');

  return (
    <Link
      to={ {
        pathname: `${rota.length === sizePath ? '/comidas' : pathname}/${id}`,
        state: { id },
      } }
    >
      <Card data-testid={ `${index}-recipe-card` } className="recomendation">
        <Card.Img
          data-testid={ `${index}-card-img` }
          variant="top"
          src={ img }
        />
        <Card.Body>
          <div data-testid={ `${index}-recomendation-title` }>
            <Card.Title data-testid={ `${index}-card-name` }>
              { name }
            </Card.Title>
          </div>
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
