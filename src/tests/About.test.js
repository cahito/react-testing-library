import { screen } from '@testing-library/react';
import React from 'react';
import { About } from '../components';
import claudio from './claudio';

const TWO = 2;
const SRC_URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

describe('Teste do componente "About.js"', () => {
  it('Testa se a página contém as informações sobre a Pokédex', () => {
    claudio(<About />);
    const textOneAbout = screen.getByText(/application simulates a pokédex/i);
    const textTwoAbout = screen.getByText(/see more details for each/i);

    expect(textOneAbout).toBeInTheDocument();
    expect(textTwoAbout).toBeInTheDocument();
  });

  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    claudio(<About />);
    const aboutTitle = screen.getByRole('heading', { name: /about pokédex/i });

    expect(aboutTitle).toBeDefined();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    claudio(<About />);
    const paragraphs = screen.getAllByText(/Pokémons/);

    expect(paragraphs.length).toBe(TWO);
  });

  it('Testa se a página contém uma determinada imagem de uma Pokédex', () => {
    claudio(<About />);
    const image = screen.getByAltText(/Pokédex/);

    // .toHaveAttribute veio da sugestão do VSCode e do gitHub do RTL em
    // https://github.com/testing-library/react-testing-library/issues/43
    expect(image).toHaveAttribute('src', SRC_URL);
  });
});
