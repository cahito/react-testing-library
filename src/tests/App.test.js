import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import claudio from '../services/claudio';

describe('Teste do componente "App.js"', () => {
  it('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    claudio(<App />);
    const links = screen.getAllByRole('navigation');

    expect(links).toBeDefined();
  });

  it('Testa se a aplicação é redirecionada para a página inicial'
  + ', na URL / ao clicar no link Home da barra de navegação', () => {
    const { history } = claudio(<App />);
    const homeLinkEl = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLinkEl);

    expect(history.location.pathname).toBe('/');
  });

  it('Testa se a aplicação é redirecionada para a página de About'
  + ', na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = claudio(<App />);
    const aboutLinkEl = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLinkEl);

    expect(history.location.pathname).toBe('/about');
  });

  it('Testa se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL '
  + '/favorites, ao clicar no link Favorite Pokémons da barra de navegação', () => {
    const { history } = claudio(<App />);
    const favLinkEl = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favLinkEl);

    expect(history.location.pathname).toBe('/favorites');
  });

  it('Testa se a aplicação é redirecionada para a página Not Found ao entrar'
  + ' em uma URL desconhecida', () => {
    const { history } = claudio(<App />);

    history.push('/xablau');
    const notFoundEl = screen.getByRole(
      'heading',
      { name: /Page requested not found Crying emoji/i },
    );
    expect(notFoundEl).toBeDefined();
  });
});
