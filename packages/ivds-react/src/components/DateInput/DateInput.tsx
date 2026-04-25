import React from 'react';
import { TextInput, type TextInputProps } from '../TextInput';

export interface DateInputProps extends Omit<TextInputProps, 'type'> {}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ autoComplete = 'off', inputMode, spellCheck = false, ...props }, ref) => (
    <TextInput
      {...props}
      ref={ref}
      type="date"
      autoComplete={autoComplete}
      inputMode={inputMode}
      spellCheck={spellCheck}
    />
  ),
);

DateInput.displayName = 'DateInput';
