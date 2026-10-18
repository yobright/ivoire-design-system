import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type IvdsThemePreset = 'default' | 'dark' | 'high-contrast';
export type IvdsThemeMode = 'light' | IvdsThemePreset;
export type IvdsThemeTarget = 'root' | 'scoped';
export type IvdsThemeTokens = Record<string, string | number>;

export interface ThemeContextValue {
  mode: IvdsThemeMode;
  preset: IvdsThemePreset;
  tokens: IvdsThemeTokens;
  target: IvdsThemeTarget;
  attributeName: string;
  setMode: (mode: IvdsThemeMode) => void;
  setPreset: (preset: IvdsThemePreset) => void;
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
  mode: 'default',
  preset: 'default',
  tokens: {},
  target: 'scoped',
  attributeName: 'data-ivds-theme',
  setMode: () => undefined,
  setPreset: () => undefined,
  setTokens: () => undefined,
};

const ThemeContext = createContext<ThemeContextValue>(DEFAULT_THEME_CONTEXT);
const EMPTY_TOKENS: IvdsThemeTokens = {};

const normalizeTokenName = (name: string): string => (name.startsWith('--') ? name : `--${name}`);
const resolveThemeMode = (mode: IvdsThemeMode): IvdsThemePreset => (mode === 'light' ? 'default' : mode);

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
  mode = 'default',
  tokens = EMPTY_TOKENS,
  target = 'scoped',
  attributeName = 'data-ivds-theme',
  className,
  children,
}: ThemeProviderProps): JSX.Element {
  const [currentMode, setCurrentMode] = useState<IvdsThemeMode>(mode);
  const [currentTokens, setCurrentTokens] = useState<IvdsThemeTokens>(tokens);
  const cssTokenMap = useMemo(() => toCssTokenMap(currentTokens), [currentTokens]);
  const resolvedMode = useMemo<IvdsThemePreset>(() => resolveThemeMode(currentMode), [currentMode]);
  const scopedThemeAttribute = useMemo<Record<string, string>>(() => ({ [attributeName]: resolvedMode }), [attributeName, resolvedMode]);

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
    root.setAttribute(attributeName, resolvedMode);
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
  }, [attributeName, cssTokenMap, resolvedMode, target]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode: currentMode,
      preset: resolvedMode,
      tokens: currentTokens,
      target,
      attributeName,
      setMode: (nextMode) => setCurrentMode(nextMode),
      setPreset: (nextPreset) => setCurrentMode(nextPreset),
      setTokens: (nextTokens) => setCurrentTokens(nextTokens),
    }),
    [attributeName, currentMode, currentTokens, resolvedMode, target],
  );

  if (target === 'root') {
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
  }

  return (
    <ThemeContext.Provider value={value}>
      <div {...scopedThemeAttribute} className={className} style={cssTokenMap as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
