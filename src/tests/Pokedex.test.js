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

  }); */

  it('Testa se é mostrado apenas um Pokémon por vez', () => {
    claudio(<App />);
    const images = screen.getAllByRole('img', { name: /sprite/i });

    expect(images.length).toBe(1);
  });

  /* it('Testa ', () => {

  });

  it('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    claudio(<App />);
    const buttonAll = screen.getAllByText('All');

    expect(buttonAll.length).toBe(1);
  }); */
});
