import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Box } from './Box';

describe('Box', () => {
  it('renders as div by default with base box sizing', () => {
    render(<Box data-testid="box">Content</Box>);

    const box = screen.getByTestId('box');
    expect(box.tagName).toBe('DIV');
    expect(box).toHaveStyle('box-sizing: border-box');
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('supports custom element and merges style props', () => {
    render(
      <Box as="section" data-testid="box" style={{ padding: '16px' }}>
        Section content
      </Box>,
    );

    const box = screen.getByTestId('box');
    expect(box.tagName).toBe('SECTION');
    expect(box).toHaveStyle('padding: 16px');
    expect(box).toHaveStyle('box-sizing: border-box');
  });
});
