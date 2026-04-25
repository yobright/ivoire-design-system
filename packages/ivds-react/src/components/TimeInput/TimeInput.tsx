import React from 'react';
import { TextInput, type TextInputProps } from '../TextInput';

export interface TimeInputProps extends Omit<TextInputProps, 'type'> {
  hoursLabel?: string;
  minutesLabel?: string;
}

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(
  ({ autoComplete = 'off', inputMode = 'numeric', spellCheck = false, ...props }, ref) => (
    <TextInput
      {...props}
      ref={ref}
      type="time"
      autoComplete={autoComplete}
      inputMode={inputMode}
      spellCheck={spellCheck}
    />
  ),
);

TimeInput.displayName = 'TimeInput';
