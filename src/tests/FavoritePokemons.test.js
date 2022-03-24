import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import { FavoritePokemons } from '../components';
import claudio from './claudio';

const THREE = 3;

function getMoreDetailsButton() {
  const moreDetailsButton = screen.getByRole('link', { name: /more details/i });
  return moreDetailsButton;
}

function getFavoriteCheckbox() {
  const favoriteButton = screen.getByLabelText('Pokémon favoritado?');
  return favoriteButton;
}

function getTypeButton(param) {
  const typeButton = screen.getByRole('button', { name: param });
  return typeButton;
}

describe('Teste do componente "FavoritePokemons.js"', () => {
  it('Testa se é exibido na tela a mensagem No favorite pokemon found'
  + ', se a pessoa não tiver pokémons favoritos', () => {
    claudio(<FavoritePokemons />);
    const titleFavPokemons = screen.getByRole('heading',
      { name: /favorite pokémons/i });
    const noFavPokemons = screen.getByText('No favorite pokemon found');

    expect(titleFavPokemons).toBeDefined();
    expect(noFavPokemons).toBeDefined();
  });

  it('Testa se é exibido todos os cards de pokémons favoritados', () => {
    // Gabriel Pesch me ajudou a encontrar o erro nas chamadas dos botões 'more detail' e
    // no checkbox 'Pokemon Favoritado?'. Então, fiz as funções para serem chamadas
    // repetidamente no desenvolvimento do teste.
    claudio(<App />);
    const homeButton = screen.getByRole('link', { name: /home/i });
    const favPageButton = screen.getByRole('link', { name: /favorite pokémons/i });

    userEvent.click(getMoreDetailsButton());
    userEvent.click(getFavoriteCheckbox());

    userEvent.click(homeButton);

    userEvent.click(getTypeButton('Fire'));

    userEvent.click(getMoreDetailsButton());
    userEvent.click(getFavoriteCheckbox());

    userEvent.click(homeButton);

    userEvent.click(getTypeButton('Dragon'));

    userEvent.click(getMoreDetailsButton());
    userEvent.click(getFavoriteCheckbox());

    userEvent.click(favPageButton);

    const favPokemons = screen.getAllByRole('img', { name: /is marked as favorite/i });

    expect(favPokemons.length).toEqual(THREE);
  });
});
