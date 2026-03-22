import React, { forwardRef } from 'react';
import { BaseComponentProps, Size } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps extends BaseComponentProps {
  /** Select label */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string | boolean;
  /** Selected value */
  value?: string | number;
  /** Default value for uncontrolled select */
  defaultValue?: string | number;
  /** Options for select */
  options?: SelectOption[];
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether the select is required */
  required?: boolean;
  /** Select size */
  size?: Size;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  /** Select name */
  name?: string;
  /** Unique ID for the select */
  id?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      value,
      defaultValue,
      options = [],
      disabled = false,
      required = false,
      size = 'medium',
      className = '',
      onChange,
      onFocus,
      onBlur,
      name,
      id,
      children,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const selectId = useStableId(id, 'ivds-select');
    const isError = !!error;
    const descriptionId =
      isError && typeof error === 'string'
        ? `${selectId}-error`
        : helperText
        ? `${selectId}-helper`
        : undefined;

    const baseClass = 'ivds-select';
    const wrapperClass = 'ivds-select-wrapper';
    
    const selectClasses = [
      baseClass,
      size !== 'medium' && `${baseClass}--${size}`,
      isError && `${baseClass}--error`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClass}>
        {label && (
          <label htmlFor={selectId} className={`${baseClass}__label`}>
            {label}
            {required && <span className={`${baseClass}__required`}>*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          name={name}
          className={selectClasses}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          data-testid={testId}
          aria-invalid={isError || undefined}
          aria-describedby={descriptionId}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
          {children}
        </select>
        {isError && typeof error === 'string' ? (
          <span className={`${baseClass}__error-msg`} id={`${selectId}-error`}>
            {error}
          </span>
        ) : (
          helperText && (
            <span className={`${baseClass}__helper`} id={`${selectId}-helper`}>
              {helperText}
            </span>
          )
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
