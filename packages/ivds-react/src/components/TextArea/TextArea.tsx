import React from 'react';
import { TextInput, type TextInputProps } from '../TextInput';

export interface TextAreaProps extends Omit<TextInputProps, 'type' | 'multiline' | 'onChange'> {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ rows = 4, onChange, ...props }, ref) => (
    <TextInput
      {...props}
      ref={ref as React.Ref<HTMLInputElement | HTMLTextAreaElement>}
      multiline
      rows={rows}
      onChange={onChange as TextInputProps['onChange']}
    />
  ),
);

TextArea.displayName = 'TextArea';

export const Textarea = TextArea;
