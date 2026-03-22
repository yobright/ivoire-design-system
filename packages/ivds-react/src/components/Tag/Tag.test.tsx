import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders with basic content', () => {
    render(<Tag>Basic tag</Tag>);
    
    expect(screen.getByText('Basic tag')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<Tag variant="success">Success tag</Tag>);
    const tag = screen.getByText('Success tag').closest('.ivds-tag');
    
    expect(tag).toHaveClass('ivds-tag--success');
  });

  it('applies size classes correctly', () => {
    render(<Tag size="large">Large tag</Tag>);
    const tag = screen.getByText('Large tag').closest('.ivds-tag');
    
    expect(tag).toHaveClass('ivds-tag--large');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Tag onClick={handleClick}>Clickable tag</Tag>);
    const tag = screen.getByText('Clickable tag').closest('.ivds-tag');
    
    expect(tag).toHaveClass('ivds-tag--clickable');
    expect(tag).toHaveAttribute('role', 'button');
    expect(tag).toHaveAttribute('tabIndex', '0');
    
    fireEvent.click(tag!);
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders removable tag', () => {
    const handleRemove = jest.fn();
    render(<Tag removable onRemove={handleRemove}>Removable tag</Tag>);
    const tag = screen.getByText('Removable tag').closest('.ivds-tag');
    const removeButton = screen.getByLabelText('Remove tag');
    
    expect(tag).toHaveClass('ivds-tag--removable');
    expect(removeButton).toBeInTheDocument();
    
    fireEvent.click(removeButton);
    expect(handleRemove).toHaveBeenCalled();
  });

  it('renders with icon', () => {
    render(<Tag icon={<span data-testid="tag-icon">★</span>}>Tag with icon</Tag>);
    
    expect(screen.getByTestId('tag-icon')).toBeInTheDocument();
  });

  it('prevents remove event from bubbling to tag click', () => {
    const handleClick = jest.fn();
    const handleRemove = jest.fn();
    
    render(
      <Tag removable onClick={handleClick} onRemove={handleRemove}>
        Clickable removable
      </Tag>
    );
    
    const removeButton = screen.getByLabelText('Remove tag');
    fireEvent.click(removeButton);
    
    expect(handleRemove).toHaveBeenCalled();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies neutral variant by default', () => {
    render(<Tag>Default tag</Tag>);
    const tag = screen.getByText('Default tag').closest('.ivds-tag');
    
    expect(tag).toHaveClass('ivds-tag--neutral');
  });

  it('applies medium size by default', () => {
    render(<Tag>Default size tag</Tag>);
    const tag = screen.getByText('Default size tag').closest('.ivds-tag');
    
    expect(tag).toHaveClass('ivds-tag');
    expect(tag).not.toHaveClass('ivds-tag--small');
    expect(tag).not.toHaveClass('ivds-tag--large');
  });
});