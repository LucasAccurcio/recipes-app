import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section>
      <h1>Not Found</h1>
      <Link to="/comidas">
        <button className="btn btn-secondary" type="button">
          Home
        </button>
      </Link>
    </section>
  );
}

export default NotFound;
