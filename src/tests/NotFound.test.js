import { screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../components/NotFound';
import claudio from '../services/claudio';

const SRC_URL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

describe('Teste do componente "NotFound.js"', () => {
  it('Testa se a página contém um heading h2 com o texto'
  + ' "Page requested not found 😭"', () => {
    claudio(<NotFound />);
    const notFoundTitle = screen.getByRole('heading', { name: /page requested not/i });

    expect(notFoundTitle).toBeDefined();
  });

  it('Testa se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    claudio(<NotFound />);
    const gifNotFound = screen.getByRole('img', { name: /pikachu crying/i });

    expect(gifNotFound).toHaveAttribute('src', SRC_URL);
  });
});
