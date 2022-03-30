import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import claudio from './claudio';
import App from '../App';

const PIKACHU_TEXT = 'This intelligent Pokémon roasts hard berries '
+ 'with electricity to make them tender enough to eat.';
const TWO = 2;
const SRC_ONE = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
const SRC_TWO = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
const PIKACHU_LOCATION = 'Pikachu location';

const goToDetailsLink = () => {
  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
  userEvent.click(moreDetailsLink);
};

const favToggle = (param) => {
  userEvent.click(param);
};

describe('Teste do componente "PokemonDetails.js"', () => {
  it('Testa se as informações detalhadas do Pokémon selecionado são mostradas'
  + ' na tela', () => {
    claudio(<App />);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);

    const pokemonName = screen.getByRole('heading', { name: /pikachu details/i });
    const summaryHead = screen.getByRole('heading', { name: /summary/i });
    const pokemonText = screen.getByText(PIKACHU_TEXT);

    expect(pokemonName).toBeInTheDocument();
    expect(moreDetailsLink).not.toBeInTheDocument();
    expect(summaryHead).toBeInTheDocument();
    expect(pokemonText).toBeInTheDocument();
  });

  it('Testa se existe na página uma seção com os mapas contendo as localizações'
  + ' do pokémon', () => {
    claudio(<App />);
    goToDetailsLink();

    const mapHeading = screen.getByRole('heading', { name: /game locations of/i });
    const pokemonLocations = screen.getAllByRole('img', { name: /location/i });
    const locationOne = screen.getByText('Kanto Viridian Forest');
    const locationTwo = screen.getByText('Kanto Power Plant');

    expect(mapHeading).toBeInTheDocument();
    expect(pokemonLocations.length).toBe(TWO);
    expect(locationOne).toBeInTheDocument();
    expect(locationTwo).toBeInTheDocument();
    expect(pokemonLocations[0]).toBeInTheDocument();
    expect(pokemonLocations[0]).toHaveAttribute('src', SRC_ONE);
    expect(pokemonLocations[0]).toHaveAttribute('alt', PIKACHU_LOCATION);
    expect(pokemonLocations[1]).toBeInTheDocument();
    expect(pokemonLocations[1]).toHaveAttribute('src', SRC_TWO);
    expect(pokemonLocations[1]).toHaveAttribute('alt', PIKACHU_LOCATION);
  });

  it('Testa ', () => {
    claudio(<App />);
    goToDetailsLink();

    const favCheckbox = screen.getByRole('checkbox', { name: /pokémon favoritado/i });

    expect(favCheckbox).toBeInTheDocument();

    favToggle(favCheckbox);

    const favIcon = screen.getByRole('img', { name: /is marked as favorite/i });

    expect(favIcon).toBeInTheDocument();

    favToggle(favCheckbox);

    expect(favIcon).not.toBeInTheDocument();
  });
});
