import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
// import pokemons from '../data';
// import Pokedex from '../components/Pokedex';
import claudio from './claudio';

const SEVEN = 7;

describe('Teste do componente "Pokedex.js"', () => {
  it('Testa se página contém um heading h2 com o texto Encountered pokémons', () => {
    claudio(<App />);
    const title = screen.getByRole('heading', { name: /encountered pokémons/i });

    expect(title).toBeInTheDocument();
  });

  it('Testa se é exibido o próximo Pokémon da lista quando o botão "Próximo'
  + ' pokémon" é clicado', () => {
    claudio(<App />);
    let presentPokemonType = screen.getAllByText('Electric');
    expect(presentPokemonType.length).toBe(2);

    const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(nextButton);

    const nextPokemonName = screen.getByText('Charmander');
    presentPokemonType = screen.getAllByText('Electric');

    expect(nextPokemonName).toBeInTheDocument();
    expect(presentPokemonType.length).toBe(1);
  });

  it('Testa se é mostrado apenas um Pokémon por vez', () => {
    claudio(<App />);
    const images = screen.getAllByRole('img', { name: /sprite/i });

    expect(images.length).toBe(1);
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    claudio(<App />);
    const filterButtons = screen.getAllByTestId('pokemon-type-button');
    const psychicButton = screen.getByRole('button', { name: /psychic/i });
    const allButton = screen.getByRole('button', { name: /all/i });
    const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });

    expect(allButton).toBeDefined();
    userEvent.click(allButton);

    userEvent.click(psychicButton);
    expect(nextButton).not.toBeDisabled();
    expect(allButton).toBeInTheDocument();
    userEvent.click(allButton);

    userEvent.click(filterButtons[2]);
    expect(nextButton).toBeDisabled();
    expect(allButton).toBeInTheDocument();
    userEvent.click(allButton);

    expect(filterButtons.length).toBe(SEVEN);
  });

  it('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    claudio(<App />);
    const buttonAll = screen.getAllByText('All');

    expect(buttonAll.length).toBe(1);
    expect(buttonAll[0]).toBeInTheDocument();
  });
});
