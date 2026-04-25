import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { BaseComponentProps, Size } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface CheckboxProps
  extends BaseComponentProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseComponentProps | 'size' | 'children' | 'type' | 'onChange'> {
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
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Aria-label for accessibility */
  'aria-label'?: string;
  /** Data-testid for testing */
  'data-testid'?: string;
  /** Error state */
  error?: boolean;
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
      'aria-label': ariaLabel,
      'data-testid': testId,
      children,
      error,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const baseClass = 'ivds-checkbox';
    const normalizedSize = size === 'xs' || size === 'sm' || size === 'small'
      ? 'small'
      : size === 'lg' || size === 'xl' || size === 'large'
        ? 'large'
        : 'medium';
    const labelClasses = [
      baseClass,
      normalizedSize !== 'medium' && `${baseClass}--${normalizedSize}`,
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
    const resolvedAriaLabel = ariaLabel ?? (!label && typeof children === 'string' ? children : undefined);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const handleRef = (node: HTMLInputElement | null) => {
      inputRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <label className={labelClasses} htmlFor={inputId}>
        <input
          ref={handleRef}
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
          aria-label={resolvedAriaLabel}
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
              required && `${baseClass}__label--required`,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
            {children}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
