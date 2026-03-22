import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer, FooterBottom, FooterBrand, FooterSection, FooterSocial } from './Footer';

describe('Footer', () => {
  it('renders footer with grid columns', () => {
    const { container } = render(
      <Footer columns={3} data-testid="footer">
        <FooterBrand>Brand</FooterBrand>
      </Footer>,
    );

    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('ivds-footer');

    const grid = container.querySelector('.ivds-footer__grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveStyle('grid-template-columns: repeat(3, 1fr)');
  });

  it('applies light variant and max width', () => {
    render(
      <Footer light maxWidth="1280px" data-testid="footer">
        Content
      </Footer>,
    );

    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('ivds-footer--light');
    expect(footer).toHaveStyle('--container-max-width: 1280px');
  });

  it('renders section title, social and bottom blocks', () => {
    render(
      <Footer>
        <FooterSection title="News">
          <li>
            <a href="/politics">Politics</a>
          </li>
        </FooterSection>
        <FooterSocial>Social links</FooterSocial>
        <FooterBottom>Legal</FooterBottom>
      </Footer>,
    );

    expect(screen.getByText('News')).toHaveClass('ivds-footer__section-title');
    expect(screen.getByRole('link', { name: 'Politics' })).toBeInTheDocument();
    expect(screen.getByText('Social links')).toHaveClass('ivds-footer__social');
    expect(screen.getByText('Legal')).toHaveClass('ivds-footer__bottom');
  });
});
