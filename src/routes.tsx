
import { RouteObject } from 'react-router-dom';

import { Home } from './pages/Home';
import { Pokemon } from './pages/Pokemon';
import { Pokemons } from './pages/Pokemons';
import { NotFound } from './pages/NotFound';


export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:name',
    element: <Pokemon />,
  },
  {
    path: '/pokemons',
    element: <Pokemons />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
];
