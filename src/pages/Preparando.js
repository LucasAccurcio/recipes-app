import React from 'react';
import { useHistory } from 'react-router';
import PreparandoComida from '../components/PreparandoComida';
import PreparandoBebida from '../components/PreparandoBebida';

function Preparando() {
  const history = useHistory();
  const { location: { pathname } } = history;

  if (pathname.includes('/comidas')) {
    return (
      <PreparandoComida />
    );
  }
  return (
    <PreparandoBebida />
  );
}

export default Preparando;
