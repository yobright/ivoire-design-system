import React from 'react';
import { TextInput, type TextInputProps } from '../TextInput';

export interface PhoneInputProps extends Omit<TextInputProps, 'type'> {}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ autoComplete = 'tel', inputMode = 'tel', spellCheck = false, ...props }, ref) => (
    <TextInput {...props} ref={ref} type="tel" autoComplete={autoComplete} inputMode={inputMode} spellCheck={spellCheck} />
  ),
);

PhoneInput.displayName = 'PhoneInput';
