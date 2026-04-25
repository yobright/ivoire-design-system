import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders title and text', () => {
    render(<Hero title="Welcome" text="Description" />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('renders with background image', () => {
    const { container } = render(<Hero title="Title" imageSrc="test.jpg" />);
    expect(container.querySelector('.ivds-hero__image')).toBeInTheDocument();
    expect(container.querySelector('.ivds-hero__overlay')).toBeInTheDocument();
  });

  it('renders no-image variant without image', () => {
    const { container } = render(<Hero title="No Image" />);
    expect(container.querySelector('.ivds-hero--no-image')).toBeInTheDocument();
    expect(container.querySelector('.ivds-hero__image')).not.toBeInTheDocument();
  });

  it('renders centered content', () => {
    const { container } = render(<Hero title="Centered" centeredContent />);
    expect(container.querySelector('.ivds-hero--centered')).toBeInTheDocument();
  });

  it('renders actions slot', () => {
    render(<Hero title="Title" actions={<button type="button">CTA</button>} />);
    expect(screen.getByRole('button', { name: 'CTA' })).toBeInTheDocument();
  });
});
