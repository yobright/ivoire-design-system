import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type IvdsThemeMode = 'light' | 'dark';
export type IvdsThemeTarget = 'root' | 'scoped';
export type IvdsThemeTokens = Record<string, string | number>;

export interface ThemeContextValue {
  mode: IvdsThemeMode;
  tokens: IvdsThemeTokens;
  target: IvdsThemeTarget;
  attributeName: string;
  setMode: (mode: IvdsThemeMode) => void;
  setTokens: (tokens: IvdsThemeTokens) => void;
}

export interface ThemeProviderProps {
  mode?: IvdsThemeMode;
  tokens?: IvdsThemeTokens;
  target?: IvdsThemeTarget;
  attributeName?: string;
  className?: string;
  children: React.ReactNode;
}

const DEFAULT_THEME_CONTEXT: ThemeContextValue = {
  mode: 'light',
  tokens: {},
  target: 'scoped',
  attributeName: 'data-ivds-theme',
  setMode: () => undefined,
  setTokens: () => undefined,
};

const ThemeContext = createContext<ThemeContextValue>(DEFAULT_THEME_CONTEXT);
const EMPTY_TOKENS: IvdsThemeTokens = {};

const normalizeTokenName = (name: string): string => (name.startsWith('--') ? name : `--${name}`);

const areTokensEqual = (a: IvdsThemeTokens, b: IvdsThemeTokens): boolean => {
  const aEntries = Object.entries(a);
  const bEntries = Object.entries(b);

  if (aEntries.length !== bEntries.length) {
    return false;
  }

  return aEntries.every(([name, value]) => b[name] === value);
};

const toCssTokenMap = (tokens: IvdsThemeTokens): Record<string, string> =>
  Object.entries(tokens).reduce<Record<string, string>>((acc, [name, value]) => {
    acc[normalizeTokenName(name)] = String(value);
    return acc;
  }, {});

export function ThemeProvider({
  mode = 'light',
  tokens = EMPTY_TOKENS,
  target = 'scoped',
  attributeName = 'data-ivds-theme',
  className,
  children,
}: ThemeProviderProps): JSX.Element {
  const [currentMode, setCurrentMode] = useState<IvdsThemeMode>(mode);
  const [currentTokens, setCurrentTokens] = useState<IvdsThemeTokens>(tokens);
  const cssTokenMap = useMemo(() => toCssTokenMap(currentTokens), [currentTokens]);

  useEffect(() => {
    setCurrentMode((previousMode) => (previousMode === mode ? previousMode : mode));
  }, [mode]);

  useEffect(() => {
    setCurrentTokens((previousTokens) => (areTokensEqual(previousTokens, tokens) ? previousTokens : tokens));
  }, [tokens]);

  useEffect(() => {
    if (target !== 'root' || typeof document === 'undefined') {
      return undefined;
    }

    const root = document.documentElement;
    root.setAttribute(attributeName, currentMode);
    const entries = Object.entries(cssTokenMap);

    entries.forEach(([tokenName, tokenValue]) => {
      root.style.setProperty(tokenName, tokenValue);
    });

    return () => {
      entries.forEach(([tokenName]) => {
        root.style.removeProperty(tokenName);
      });
      root.removeAttribute(attributeName);
    };
  }, [attributeName, cssTokenMap, currentMode, target]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode: currentMode,
      tokens: currentTokens,
      target,
      attributeName,
      setMode: setCurrentMode,
      setTokens: setCurrentTokens,
    }),
    [attributeName, currentMode, currentTokens, target],
  );

  if (target === 'root') {
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={className} data-ivds-theme={currentMode} style={cssTokenMap as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
