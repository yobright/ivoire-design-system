import React, { forwardRef } from 'react';
import { BaseComponentProps, Size } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps
  extends BaseComponentProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, keyof BaseComponentProps | 'children' | 'size' | 'onChange'> {
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
  /** Placeholder option label */
  placeholder?: string;
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
      placeholder,
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
      'aria-label': ariaLabel,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const selectId = useStableId(id, 'ivds-select');
    const isError = !!error;
    const normalizedSize = size === 'xs' || size === 'sm' || size === 'small'
      ? 'small'
      : size === 'lg' || size === 'xl' || size === 'large'
        ? 'large'
        : 'medium';
    const descriptionId =
      isError && typeof error === 'string'
        ? `${selectId}-error`
        : helperText
        ? `${selectId}-helper`
        : undefined;
    const resolvedAriaLabel = ariaLabel ?? (!label ? placeholder : undefined);

    const baseClass = 'ivds-select';
    const wrapperClass = 'ivds-select-wrapper';
    
    const selectClasses = [
      baseClass,
      normalizedSize !== 'medium' && `${baseClass}--${normalizedSize}`,
      isError && `${baseClass}--error`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClass}>
        {label && (
          <label
            htmlFor={selectId}
            className={[
              `${baseClass}__label`,
              required && `${baseClass}__label--required`,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
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
          aria-label={resolvedAriaLabel}
          aria-invalid={isError || undefined}
          aria-describedby={descriptionId}
          {...props}
        >
          {placeholder && (
            <option value="" disabled={required} hidden={required}>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
          {children}
        </select>
        {isError && typeof error === 'string' ? (
          <span className={`${baseClass}__error-msg`} id={`${selectId}-error`} aria-live="polite">
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
