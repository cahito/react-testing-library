import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import claudio from './claudio';
import App from '../App';

const SRC_URL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
const SRC_ICON = '/star-icon.svg';

const goToDetailsLink = () => {
  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
  userEvent.click(moreDetailsLink);
};

describe('Teste do componente "Pokemon.js"', () => {
  it('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    claudio(<App />);
    const pokemonName = screen.getByText('Pikachu');
    const pokemonType = screen.getAllByText('Electric');
    const pokemonWeight = screen.getByText('Average weight: 6.0 kg');
    const pokemonImage = screen.getByRole('img', { name: /Pikachu sprite/i });

    expect(pokemonName).toBeDefined();
    expect(pokemonType.length).toBe(2);
    expect(pokemonWeight).toBeDefined();
    expect(pokemonImage).toHaveAttribute('src', SRC_URL);
  });

  it('Testa se o card do Pokémon indicado na Pokédex contém um'
  + 'link de navegação para exibir detalhes deste Pokémon', () => {
    claudio(<App />);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });

    expect(moreDetailsLink).toBeDefined();
  });

  it('Testa se ao clicar no link de navegação do Pokémon, é feito o '
  + 'redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    claudio(<App />);
    goToDetailsLink();

    const pokemonDetails = screen.getByRole('heading', { name: /pikachu details/i });

    expect(pokemonDetails).toBeDefined();
  });

  it('Testa também se a URL exibida no navegador muda para /pokemon/'
  + '<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
    const { history } = claudio(<App />);
    goToDetailsLink();

    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('Testa se existe um ícone de estrela nos Pokémons favoritados', () => {
    claudio(<App />);
    goToDetailsLink();

    const favButton = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
    userEvent.click(favButton);

    const starIcon = screen.getByRole('img', { name: /is marked as favorite/i });

    expect(starIcon).toBeDefined();
    expect(starIcon).toHaveAttribute('src', SRC_ICON);
  });
});
