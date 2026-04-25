import React, { useMemo, useState } from 'react';
import { TextInput, type TextInputProps } from '../TextInput';

const parseNumericValue = (value: string): number | '' => {
  if (value.trim() === '') {
    return '';
  }

  const parsed = Number(value);
  return Number.isNaN(parsed) ? '' : parsed;
};

const clampValue = (value: number, min?: number, max?: number): number => {
  if (min !== undefined && value < min) {
    return min;
  }

  if (max !== undefined && value > max) {
    return max;
  }

  return value;
};

export interface NumberInputProps extends Omit<TextInputProps, 'type' | 'value' | 'defaultValue' | 'onChange' | 'actionLeft' | 'actionRight'> {
  value?: number | '';
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  minusStepButtonAriaLabel?: string;
  plusStepButtonAriaLabel?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: number | '') => void;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      defaultValue,
      min,
      max,
      step = 1,
      unit,
      minusStepButtonAriaLabel = 'Diminuer la valeur',
      plusStepButtonAriaLabel = 'Augmenter la valeur',
      onChange,
      onValueChange,
      inputMode = 'decimal',
      autoComplete = 'off',
      spellCheck = false,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue !== undefined ? String(defaultValue) : '');
    const isControlled = value !== undefined;
    const inputValue = useMemo(() => {
      if (isControlled) {
        return value === '' ? '' : String(value);
      }

      return internalValue;
    }, [internalValue, isControlled, value]);

    const updateValue = (nextValue: string) => {
      if (!isControlled) {
        setInternalValue(nextValue);
      }

      onValueChange?.(parseNumericValue(nextValue));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;
      updateValue(nextValue);
      onChange?.(event as React.ChangeEvent<HTMLInputElement>);
    };

    const handleStep = (direction: -1 | 1) => {
      const currentNumericValue = parseNumericValue(inputValue);
      const baseValue = currentNumericValue === '' ? min ?? 0 : currentNumericValue;
      const nextValue = clampValue(baseValue + direction * step, min, max);
      updateValue(String(nextValue));
    };

    const actionLeft = (
      <button type="button" aria-label={minusStepButtonAriaLabel} onClick={() => handleStep(-1)}>
        −
      </button>
    );
    const actionRight = (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
        {unit ? <span aria-hidden="true">{unit}</span> : null}
        <button type="button" aria-label={plusStepButtonAriaLabel} onClick={() => handleStep(1)}>
          +
        </button>
      </div>
    );

    return (
      <TextInput
        {...props}
        ref={ref}
        type="number"
        value={inputValue}
        min={min}
        max={max}
        step={step}
        inputMode={inputMode}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        actionLeft={actionLeft}
        actionRight={actionRight}
        onChange={handleChange}
      />
    );
  },
);

NumberInput.displayName = 'NumberInput';
