import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bebidas from '../pages/Bebidas';
import Comidas from '../pages/Comidas';
import Explorar from '../pages/Explorar';
import Filtrar from '../pages/Filtrar';
import Ingredientes from '../pages/Ingredientes';
import Login from '../pages/Login';
import Origem from '../pages/Origem';
import Perfil from '../pages/Perfil';
import Preparando from '../pages/Preparando';
import Receita from '../pages/Receita';
import ReceitaFeita from '../pages/ReceitaFeita';
import ReceitasFavoritas from '../pages/ReceitasFavoritas';

function Routes() {
  return (
    <Switch>
      <Route path="/comidas/:id-da-receita/in-progress" component={ Preparando } />
      <Route path="/bebidas/:id-da-receita/in-progress" component={ Preparando } />
      <Route path="/comidas/:id-da-receita" component={ Receita } />
      <Route path="/bebidas/:id-da-receita" component={ Receita } />
      <Route path="/comidas" component={ Comidas } />
      <Route path="/bebidas" component={ Bebidas } />
      <Route path="/explorar/bebidas/ingredientes" component={ Ingredientes } />
      <Route path="/explorar/comidas/ingredientes" component={ Ingredientes } />
      <Route path="/explorar/comidas/area" component={ Origem } />
      <Route path="/explorar/comidas" component={ Filtrar } />
      <Route path="/explorar/bebidas" component={ Filtrar } />
      <Route path="/explorar" component={ Explorar } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
      <Route path="/receitas-feitas" component={ ReceitaFeita } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;