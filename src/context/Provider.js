import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [data, setData] = useState({
    meals: [],
  });
  const [comida, setComida] = useState([]);
  const context = {
    data,
    setData,
    comida,
    setComida,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
