import React, { useState } from 'react';
import { TextInput, type TextInputProps } from '../TextInput';

export interface PasswordInputProps extends Omit<TextInputProps, 'type' | 'actionRight'> {
  includeShowPasswordButton?: boolean;
  initiallyRevealed?: boolean;
  revealPasswordButtonAriaLabel?: string;
  concealPasswordButtonAriaLabel?: string;
  type?: 'password' | 'text';
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      includeShowPasswordButton = true,
      initiallyRevealed = false,
      revealPasswordButtonAriaLabel = 'Afficher le mot de passe',
      concealPasswordButtonAriaLabel = 'Masquer le mot de passe',
      type,
      autoComplete = 'current-password',
      spellCheck = false,
      ...props
    },
    ref,
  ) => {
    const [revealed, setRevealed] = useState(initiallyRevealed);
    const resolvedType = includeShowPasswordButton ? (revealed ? 'text' : 'password') : type ?? 'password';
    const actionRight = includeShowPasswordButton ? (
      <button
        type="button"
        aria-label={revealed ? concealPasswordButtonAriaLabel : revealPasswordButtonAriaLabel}
        onClick={() => setRevealed((current) => !current)}
        onMouseDown={(event) => event.preventDefault()}
      >
        {revealed ? 'Masquer' : 'Afficher'}
      </button>
    ) : undefined;

    return (
      <TextInput
        {...props}
        ref={ref}
        type={resolvedType}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        actionRight={actionRight}
      />
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
