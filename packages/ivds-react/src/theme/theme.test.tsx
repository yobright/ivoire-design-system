import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, useTheme } from './index';

function ThemeProbe(): JSX.Element {
  const { mode, preset, tokens, setMode, setPreset } = useTheme();

  return (
    <div>
      <span data-testid="mode">{mode}</span>
      <span data-testid="preset">{preset}</span>
      <span data-testid="token">{tokens['color-brand-primary-600']}</span>
      <button type="button" onClick={() => setMode('dark')}>
        set-dark
      </button>
      <button type="button" onClick={() => setPreset('high-contrast')}>
        set-high-contrast
      </button>
    </div>
  );
}

describe('ThemeProvider', () => {
  it('applies scoped theme attributes and exposes context', () => {
    const { container } = render(
      <ThemeProvider mode="default" tokens={{ 'color-brand-primary-600': '#123456' }}>
        <ThemeProbe />
      </ThemeProvider>,
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveAttribute('data-ivds-theme', 'default');
    expect(wrapper.style.getPropertyValue('--color-brand-primary-600')).toBe('#123456');
    expect(screen.getByTestId('mode')).toHaveTextContent('default');
    expect(screen.getByTestId('preset')).toHaveTextContent('default');
    expect(screen.getByTestId('token')).toHaveTextContent('#123456');
  });

  it('maps the light alias to the default preset attribute', () => {
    const { container } = render(
      <ThemeProvider mode="light">
        <ThemeProbe />
      </ThemeProvider>,
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveAttribute('data-ivds-theme', 'default');
    expect(screen.getByTestId('mode')).toHaveTextContent('light');
    expect(screen.getByTestId('preset')).toHaveTextContent('default');
  });

  it('supports state updates through useTheme setter', () => {
    const { container } = render(
      <ThemeProvider mode="default">
        <ThemeProbe />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'set-dark' }));
    expect(screen.getByTestId('mode')).toHaveTextContent('dark');
    expect(screen.getByTestId('preset')).toHaveTextContent('dark');
    expect(container.firstElementChild).toHaveAttribute('data-ivds-theme', 'dark');

    fireEvent.click(screen.getByRole('button', { name: 'set-high-contrast' }));
    expect(screen.getByTestId('mode')).toHaveTextContent('high-contrast');
    expect(screen.getByTestId('preset')).toHaveTextContent('high-contrast');
    expect(container.firstElementChild).toHaveAttribute('data-ivds-theme', 'high-contrast');
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

  it('supports custom theme attribute names in scoped mode', () => {
    const { container } = render(
      <ThemeProvider attributeName="data-theme" mode="high-contrast">
        <ThemeProbe />
      </ThemeProvider>,
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveAttribute('data-theme', 'high-contrast');
    expect(wrapper).not.toHaveAttribute('data-ivds-theme');
    expect(screen.getByTestId('preset')).toHaveTextContent('high-contrast');
  });
});
