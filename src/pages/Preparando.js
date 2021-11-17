import React from 'react';
import { useHistory } from 'react-router';
import PreparandoComida from '../components/PreparandoComida';

function Preparando() {
  const history = useHistory();
  const { location: { pathname } } = history;

  if (pathname.includes('/comidas')) {
    return (
      <PreparandoComida />
    );
  }
}

export default Preparando;
