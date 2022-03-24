import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
// import pokemons from '../data';
// import Pokedex from '../components/Pokedex';
import claudio from './claudio';

describe('Teste do componente "Pokedex.js"', () => {
  it('Testa se página contém um heading h2 com o texto Encountered pokémons', () => {
    claudio(<App />);

    const title = screen.getByRole('heading', { name: /encountered pokémons/i });

    expect(title).toBeDefined();
  });

  /* it('Testa ', () => {

  });

  it('Testa se é mostrado apenas um Pokémon por vez', () => {

  });

  it('Testa ', () => {

  });

  it('Testa ', () => {

  }); */
});
