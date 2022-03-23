import { screen } from '@testing-library/react';
import React from 'react';
import { About } from '../components';
import claudio from '../services/claudio';

describe('Teste do componente "About.js"', () => {
  it('Testa se a página contém as informações sobre a Pokédex', () => {
    claudio(<About />);
    const textOneAbout = screen.getByText(`/application encyclopedia/i`);
    const textTwoAbout = screen.getByText(`/filter type details/i`);

    expect(textOneAbout).toBeInTheDocument();
    expect(textTwoAbout).toBeInTheDocument();
  });

  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    claudio(<About />);
    const aboutTitle = screen.getByRole('heading', { name: /about pokédex/i });

    expect(aboutTitle).toBeDefined();
  });

  /* it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {

  });

  it('Testa se a página contém uma determinada imagem de uma Pokédex', () => {

  }); */
});
