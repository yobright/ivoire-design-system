import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card', () => {
  it('renders with basic content', () => {
    render(<Card>Card content</Card>);
    
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Card variant="elevated">Elevated card</Card>);
    const card = screen.getByText('Elevated card').closest('.ivds-card');
    
    expect(card).toHaveClass('ivds-card--elevated');
  });

  it('handles interactive cards', () => {
    const handleClick = jest.fn();
    render(<Card interactive onClick={handleClick}>Interactive card</Card>);
    const card = screen.getByText('Interactive card').closest('.ivds-card');
    
    expect(card).toHaveClass('ivds-card--interactive');
    expect(card).toHaveAttribute('role', 'button');
    
    fireEvent.click(card!);
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders with header and footer', () => {
    render(
      <Card 
        header={<div>Card Header</div>}
        footer={<div>Card Footer</div>}
      >
        Card Body
      </Card>
    );
    
    expect(screen.getByText('Card Header')).toBeInTheDocument();
    expect(screen.getByText('Card Body')).toBeInTheDocument();
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('renders with media', () => {
    render(
      <Card media={<img src="test.jpg" alt="Test" />}>
        Card with media
      </Card>
    );
    
    expect(screen.getByAltText('Test')).toBeInTheDocument();
  });

  it('applies compact styling', () => {
    render(
      <Card 
        compact
        header={<div>Header</div>}
        footer={<div>Footer</div>}
      >
        Content
      </Card>
    );
    
    const header = screen.getByText('Header').closest('.ivds-card__header');
    const footer = screen.getByText('Footer').closest('.ivds-card__footer');
    
    expect(header).toHaveClass('ivds-card__header--compact');
    expect(footer).toHaveClass('ivds-card__footer--compact');
  });
});