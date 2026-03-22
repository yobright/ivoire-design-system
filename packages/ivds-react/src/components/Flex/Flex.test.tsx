import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Flex } from './Flex';

describe('Flex', () => {
  it('renders children with default flex styles', () => {
    render(
      <Flex data-testid="flex">
        <span>One</span>
      </Flex>,
    );

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle('display: flex');
    expect(flex).toHaveStyle('flex-direction: row');
    expect(flex).toHaveStyle('box-sizing: border-box');
  });

  it('applies layout props and tokenized gap', () => {
    render(
      <Flex
        data-testid="flex"
        direction="column"
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        gap="4"
      >
        <span>One</span>
      </Flex>,
    );

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle('flex-direction: column');
    expect(flex).toHaveStyle('flex-wrap: wrap');
    expect(flex).toHaveStyle('justify-content: space-between');
    expect(flex).toHaveStyle('align-items: center');
    expect(flex).toHaveStyle('gap: var(--spacing-4)');
  });

  it('supports inline and custom element', () => {
    render(
      <Flex as="section" inline data-testid="flex">
        Content
      </Flex>,
    );

    const flex = screen.getByTestId('flex');
    expect(flex.tagName).toBe('SECTION');
    expect(flex).toHaveStyle('display: inline-flex');
  });
});
