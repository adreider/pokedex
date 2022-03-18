import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import PokemonDatail from './components/PokemonDatail';

interface RoutesProps {

}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <>
      <Switch>
        <Route path="/pokemon/:name">
          <PokemonDatail />
        </Route>

        <Route path="/">
          <Pokedex />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;