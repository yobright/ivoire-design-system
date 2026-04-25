import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Linkbox } from './Linkbox';

describe('Linkbox', () => {
  const defaultProps = {
    href: '/test',
    heading: 'Link Title',
    text: 'Description',
    linkAriaLabel: 'Go to test',
    linkboxAriaLabel: 'Test linkbox',
  };

  it('renders heading and text', () => {
    render(<Linkbox {...defaultProps} />);
    expect(screen.getByText('Link Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('renders link with correct href', () => {
    render(<Linkbox {...defaultProps} />);
    const link = screen.getByLabelText('Go to test');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies border variant', () => {
    const { container } = render(<Linkbox {...defaultProps} border />);
    expect(container.querySelector('.ivds-linkbox--border')).toBeInTheDocument();
  });

  it('renders image when provided', () => {
    render(<Linkbox {...defaultProps} imgSrc="test.jpg" imgAlt="Image" />);
    expect(screen.getByAltText('Image')).toBeInTheDocument();
  });

  it('has region role with aria-label', () => {
    render(<Linkbox {...defaultProps} />);
    expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Test linkbox');
  });
});
