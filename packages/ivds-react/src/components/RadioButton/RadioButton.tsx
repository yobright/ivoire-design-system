import React, { forwardRef } from 'react';
import { BaseComponentProps, Size } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface RadioButtonProps extends BaseComponentProps {
  /** Radio button label */
  label?: string;
  /** Whether the radio button is checked */
  checked?: boolean;
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Whether the radio button is required */
  required?: boolean;
  /** Radio button size */
  size?: Size;
  /** Radio button description */
  description?: string;
  /** Radio button value */
  value?: string;
  /** Radio button name (required for grouping) */
  name?: string;
  /** Default checked state */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Whether the radio button has an error */
  error?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      label,
      checked,
      disabled = false,
      required = false,
      size = 'medium',
      description,
      value,
      name = '',
      defaultChecked,
      error = false,
      className = '',
      children,
      onChange,
      onFocus,
      onBlur,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const baseClass = 'ivds-radio-button';
    const isChecked = checked ?? defaultChecked ?? false;
    const inputLabel = label ?? children;

    const labelClasses = [
      baseClass,
      size !== 'medium' && `${baseClass}--${size}`,
      disabled && `${baseClass}--disabled`,
      isChecked && `${baseClass}--checked`,
      error && `${baseClass}--error`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      `${baseClass}__input`,
      disabled && `${baseClass}--disabled`,
      error && `${baseClass}--error`,
    ]
      .filter(Boolean)
      .join(' ');

    const inputId = useStableId(props.id, 'ivds-radio');

    const descriptionId = description ? `${inputId}-description` : undefined;

    return (
      <label className={labelClasses} htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          type="radio"
          className={inputClasses}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          required={required}
          value={value}
          name={name}
          aria-invalid={error || undefined}
          aria-describedby={descriptionId}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          data-testid={testId}
          {...props}
        />
        <div className={`${baseClass}__circle`} />
        {(inputLabel || description) && (
          <div className={`${baseClass}__label-group`}>
            {inputLabel && (
              <span
                className={[
                  `${baseClass}__label`,
                  required && 'ivds-radio-button-label--required',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {inputLabel}
                {required && <span className={`${baseClass}__required`}>*</span>}
              </span>
            )}
            {description && (
              <span className={`${baseClass}__description`} id={descriptionId}>
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';
