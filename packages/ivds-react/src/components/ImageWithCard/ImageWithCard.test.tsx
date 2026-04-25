import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ImageWithCard } from './ImageWithCard';

describe('ImageWithCard', () => {
  it('renders image', () => {
    render(<ImageWithCard src="test.jpg" imgAlt="Photo" />);
    expect(screen.getByAltText('Photo')).toBeInTheDocument();
  });

  it('renders card content', () => {
    render(<ImageWithCard src="test.jpg">Card text</ImageWithCard>);
    expect(screen.getByText('Card text')).toBeInTheDocument();
  });

  it('applies split layout class', () => {
    const { container } = render(<ImageWithCard src="test.jpg" cardLayout="split">Content</ImageWithCard>);
    expect(container.querySelector('.ivds-image-with-card--split')).toBeInTheDocument();
  });

  it('applies right alignment class', () => {
    const { container } = render(<ImageWithCard src="test.jpg" cardAlignment="right">Content</ImageWithCard>);
    expect(container.querySelector('.ivds-image-with-card--right')).toBeInTheDocument();
  });

  it('applies full-width class', () => {
    const { container } = render(<ImageWithCard src="test.jpg" fullWidth>Content</ImageWithCard>);
    expect(container.querySelector('.ivds-image-with-card--full-width')).toBeInTheDocument();
  });
});
