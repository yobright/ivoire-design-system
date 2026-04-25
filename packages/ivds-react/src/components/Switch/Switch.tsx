import React, { forwardRef } from 'react';
import { BaseComponentProps, Size } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface SwitchProps
  extends BaseComponentProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseComponentProps | 'size' | 'children' | 'type' | 'onChange'> {
  /** Switch label */
  label?: string;
  /** Whether the switch is checked */
  checked?: boolean;
  /** Default checked state for uncontrolled switch */
  defaultChecked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Switch size */
  size?: Size;
  /** Helper text */
  helperText?: string;
  /** Name for the input */
  name?: string;
  /** ID for the input */
  id?: string;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      checked,
      defaultChecked,
      disabled = false,
      size = 'medium',
      helperText,
      className = '',
      name,
      id,
      onChange,
      'aria-label': ariaLabel,
      'data-testid': testId,
      children,
      ...props
    },
    ref
  ) => {
    const switchId = useStableId(id, 'ivds-switch');
    const baseClass = 'ivds-switch';
    const wrapperClass = `${baseClass}-wrapper`;
    const normalizedSize = size === 'xs' || size === 'sm' || size === 'small'
      ? 'small'
      : size === 'lg' || size === 'xl' || size === 'large'
        ? 'large'
        : 'medium';
    const resolvedAriaLabel = ariaLabel ?? (!label && typeof children === 'string' ? children : undefined);
    
    const containerClasses = [
      baseClass,
      normalizedSize !== 'medium' && `${baseClass}--${normalizedSize}`,
      disabled && `${baseClass}--disabled`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClass}>
        <label className={containerClasses} htmlFor={switchId}>
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            name={name}
            className={`${baseClass}__input`}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={onChange}
            data-testid={testId}
            aria-label={resolvedAriaLabel}
            aria-describedby={helperText ? `${switchId}-helper` : undefined}
            {...props}
          />
          <span className={`${baseClass}__track`} />
          {(label || children) && (
            <span className={`${baseClass}__label`}>
              {label}
              {children}
            </span>
          )}
        </label>
        {helperText && (
          <div className={`${baseClass}__helper`} id={`${switchId}-helper`}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
