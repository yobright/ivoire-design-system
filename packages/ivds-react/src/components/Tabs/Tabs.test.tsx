import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tabs } from './Tabs';

const items = [
  { id: 'one', label: 'One', content: 'First tab content' },
  { id: 'two', label: 'Two', content: 'Second tab content' },
  { id: 'three', label: 'Three', content: 'Third tab content', disabled: true },
];

describe('Tabs', () => {
  it('renders first tab active by default', () => {
    render(<Tabs items={items} />);

    expect(screen.getByRole('tab', { name: 'One' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel', { name: 'One' })).toHaveTextContent('First tab content');
  });

  it('supports default active id', () => {
    render(<Tabs items={items} defaultActiveId="two" />);

    expect(screen.getByRole('tab', { name: 'Two' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel', { name: 'Two' })).toHaveTextContent('Second tab content');
  });

  it('updates active tab and emits onChange', () => {
    const onChange = jest.fn();
    render(<Tabs items={items} onChange={onChange} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Two' }));

    expect(screen.getByRole('tabpanel', { name: 'Two' })).toHaveTextContent('Second tab content');
    expect(onChange).toHaveBeenCalledWith('two');
  });

  it('does not activate disabled tab', () => {
    render(<Tabs items={items} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Three' }));

    expect(screen.getByRole('tabpanel', { name: 'One' })).toHaveTextContent('First tab content');
  });
});
