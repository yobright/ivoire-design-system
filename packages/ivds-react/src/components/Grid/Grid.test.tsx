import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid } from './Grid';

describe('Grid', () => {
  it('renders children with default grid styles', () => {
    render(
      <Grid data-testid="grid">
        <span>One</span>
      </Grid>,
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle('display: grid');
    expect(grid).toHaveStyle('box-sizing: border-box');
  });

  it('applies grid template and spacing props', () => {
    render(
      <Grid
        data-testid="grid"
        templateColumns="repeat(2, 1fr)"
        templateRows="auto auto"
        gap="4"
        rowGap="2"
        columnGap="3"
        justifyItems="center"
      >
        <span>One</span>
      </Grid>,
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle('grid-template-columns: repeat(2, 1fr)');
    expect(grid).toHaveStyle('grid-template-rows: auto auto');
    expect(grid).toHaveStyle('gap: var(--spacing-4)');
    expect(grid).toHaveStyle('row-gap: var(--spacing-2)');
    expect(grid).toHaveStyle('column-gap: var(--spacing-3)');
    expect(grid).toHaveStyle('justify-items: center');
  });

  it('supports inline and custom element', () => {
    render(
      <Grid as="section" inline data-testid="grid">
        Content
      </Grid>,
    );

    const grid = screen.getByTestId('grid');
    expect(grid.tagName).toBe('SECTION');
    expect(grid).toHaveStyle('display: inline-grid');
  });
});
