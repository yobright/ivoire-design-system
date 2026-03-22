import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, useTheme } from './index';

function ThemeProbe(): JSX.Element {
  const { mode, tokens, setMode } = useTheme();

  return (
    <div>
      <span data-testid="mode">{mode}</span>
      <span data-testid="token">{tokens['color-brand-primary-600']}</span>
      <button type="button" onClick={() => setMode('dark')}>
        set-dark
      </button>
    </div>
  );
}

describe('ThemeProvider', () => {
  it('applies scoped theme attributes and exposes context', () => {
    const { container } = render(
      <ThemeProvider mode="light" tokens={{ 'color-brand-primary-600': '#123456' }}>
        <ThemeProbe />
      </ThemeProvider>,
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveAttribute('data-ivds-theme', 'light');
    expect(wrapper.style.getPropertyValue('--color-brand-primary-600')).toBe('#123456');
    expect(screen.getByTestId('mode')).toHaveTextContent('light');
    expect(screen.getByTestId('token')).toHaveTextContent('#123456');
  });

  it('supports state updates through useTheme setter', () => {
    render(
      <ThemeProvider mode="light">
        <ThemeProbe />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'set-dark' }));
    expect(screen.getByTestId('mode')).toHaveTextContent('dark');
  });

  it('applies root-level theme attributes when target is root', () => {
    const { unmount } = render(
      <ThemeProvider target="root" mode="dark" tokens={{ '--color-brand-primary-600': '#654321' }}>
        <div>content</div>
      </ThemeProvider>,
    );

    expect(document.documentElement).toHaveAttribute('data-ivds-theme', 'dark');
    expect(document.documentElement.style.getPropertyValue('--color-brand-primary-600')).toBe('#654321');

    unmount();

    expect(document.documentElement).not.toHaveAttribute('data-ivds-theme');
    expect(document.documentElement.style.getPropertyValue('--color-brand-primary-600')).toBe('');
  });
});
