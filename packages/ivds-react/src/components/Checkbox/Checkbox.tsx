import React, { forwardRef, useState } from 'react';
import { BaseComponentProps, Size } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface CheckboxProps extends BaseComponentProps {
  /** Checkbox label */
  label?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Default checked state for uncontrolled component */
  defaultChecked?: boolean;
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Whether the checkbox is required */
  required?: boolean;
  /** Checkbox size */
  size?: Size;
  /** Checkbox value */
  value?: string;
  /** Checkbox name */
  name?: string;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Whether the checkbox has an error */
  error?: boolean;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked,
      defaultChecked = false,
      indeterminate = false,
      disabled = false,
      required = false,
      size = 'medium',
      value,
      name,
      className = '',
      onChange,
      onFocus,
      onBlur,
      'data-testid': testId,
      children,
      error,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const baseClass = 'ivds-checkbox';
    const labelClasses = [
      baseClass,
      size !== 'medium' && `${baseClass}--${size}`,
      disabled && `${baseClass}--disabled`,
      isChecked && `${baseClass}--checked`,
      indeterminate && `${baseClass}--indeterminate`,
      error && `${baseClass}--error`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(event.target.checked);
      }
      onChange?.(event);
    };

    const inputId = useStableId(props.id, 'ivds-checkbox');

    // Set indeterminate property on the input element
    React.useEffect(() => {
      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.indeterminate = indeterminate;
      }
    }, [indeterminate, ref]);

    return (
      <label className={labelClasses} htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={`${baseClass}__input`}
          checked={isChecked}
          disabled={disabled}
          required={required}
          value={value}
          name={name}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          data-testid={testId}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          aria-invalid={error || undefined}
          {...props}
        />
        <div className={`${baseClass}__box`}>
          <div className={`${baseClass}__checkmark`} />
        </div>
        {(label || children) && (
          <span
            className={[
              `${baseClass}__label`,
              required && 'ivds-checkbox-label--required',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
            {children}
            {required && <span className={`${baseClass}__required`}>*</span>}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
