import React, { forwardRef, useState } from 'react';
import { BaseComponentProps, Size } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface TextInputProps extends BaseComponentProps {
  /** Input label */
  label?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Default value for uncontrolled component */
  defaultValue?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';
  /** Input size */
  size?: Size;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is required */
  required?: boolean;
  /** Whether the input is readonly */
  readOnly?: boolean;
  /** Whether the input has an error */
  error?: boolean | string;
  /** Error message to display (legacy, use error prop with string instead) */
  errorMessage?: string;
  /** Error message to display (legacy alias) */
  errorText?: string;
  /** Whether the input has a success state */
  success?: boolean;
  /** Helper text to display */
  helperText?: string;
  /** Maximum length of input */
  maxLength?: number;
  /** Icon to display (legacy, use iconLeft or iconRight instead) */
  icon?: React.ReactNode;
  /** Position of the icon (legacy) */
  iconPosition?: 'left' | 'right';
  /** Icon to display on the left */
  iconLeft?: React.ReactNode;
  /** Icon to display on the right */
  iconRight?: React.ReactNode;
  /** Whether this is a textarea */
  multiline?: boolean;
  /** Number of rows for textarea */
  rows?: number;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextInputProps>(
  (
    {
      label,
      placeholder,
      value,
      defaultValue,
      type = 'text',
      size = 'medium',
      disabled = false,
      required = false,
      readOnly = false,
      error = false,
      errorMessage,
      errorText,
      success = false,
      helperText,
      maxLength,
      icon,
      iconPosition = 'left',
      iconLeft,
      iconRight,
      multiline = false,
      rows = 4,
      className = '',
      onChange,
      onFocus,
      onBlur,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    
    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;

    const hasError = !!error || !!errorMessage || !!errorText;
    const normalizedErrorText = typeof error === 'string' ? error : errorText || errorMessage;
    const hasSuccess = success && !hasError;

    const leftIcon = iconLeft || (icon && iconPosition === 'left' ? icon : null);
    const rightIcon = iconRight || (icon && iconPosition === 'right' ? icon : null);

    const baseClass = 'ivds-text-input';
    const wrapperClass = 'ivds-text-input-wrapper';
    
    const inputClasses = [
      baseClass,
      multiline && `${baseClass}--textarea`,
      size !== 'medium' && `${baseClass}--${size}`,
      hasError && `${baseClass}--error`,
      hasSuccess && `${baseClass}--success`,
      disabled && `${baseClass}--disabled`,
      focused && `${baseClass}--focused`,
      (leftIcon || rightIcon) && `${baseClass}--with-icon`,
      leftIcon && `${baseClass}--with-icon-left`,
      rightIcon && `${baseClass}--with-icon-right`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      onBlur?.(event);
    };

    const inputId = useStableId(props.id, 'ivds-text-input');

    const commonProps = {
      id: inputId,
      className: inputClasses,
      value: inputValue,
      placeholder,
      disabled,
      required,
      readOnly,
      maxLength,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      'data-testid': testId,
      'aria-invalid': hasError,
      'aria-describedby': [
        normalizedErrorText && `${inputId}-error`,
        helperText && `${inputId}-helper`,
      ].filter(Boolean).join(' ') || undefined,
      ...props,
    };

    const InputElement = multiline ? (
      <textarea
        ref={ref as React.Ref<HTMLTextAreaElement>}
        rows={rows}
        {...commonProps}
      />
    ) : (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        type={type}
        {...commonProps}
      />
    );

    return (
      <div className={wrapperClass}>
        {label && (
          <label
            className={[
              `${baseClass}__label`,
              required && 'ivds-text-input-label--required',
            ]
              .filter(Boolean)
              .join(' ')}
            htmlFor={inputId}
          >
            {label}
            {required && <span className={`${baseClass}__required`}>*</span>}
          </label>
        )}
        
        <div className={`${baseClass}__input-wrapper`}>
          {leftIcon && (
            <span className={`${baseClass}__icon ${baseClass}__icon--left`}>
              {leftIcon}
            </span>
          )}
          
          {InputElement}
          
          {rightIcon && (
            <span className={`${baseClass}__icon ${baseClass}__icon--right`}>
              {rightIcon}
            </span>
          )}
        </div>

        {normalizedErrorText && (
          <div className={`${baseClass}__error`} id={`${inputId}-error`}>
            {normalizedErrorText}
          </div>
        )}

        {helperText && (
          <div
            className={`${baseClass}__helper`}
            id={`${inputId}-helper`}
            aria-hidden={hasError ? 'true' : undefined}
            hidden={hasError || undefined}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
