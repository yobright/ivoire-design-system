import React, { forwardRef } from 'react';
import { IconCheckCircleFill, IconXCircleFill } from '../../icons';
import { BaseComponentProps, ComponentCSSProperties } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';
import { Tooltip, TooltipProps } from '../Tooltip';

export type ToggleButtonVariant = 'default' | 'inline';

export interface ToggleButtonTheme {
  '--toggle-button-color'?: string;
  '--toggle-button-hover-color'?: string;
}

export interface ToggleButtonProps
  extends BaseComponentProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseComponentProps | 'children' | 'onChange' | 'type'> {
  label: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  tooltipLabel?: string;
  tooltipButtonLabel?: string;
  tooltipText?: React.ReactNode;
  tooltip?: React.ReactElement<TooltipProps>;
  variant?: ToggleButtonVariant;
  theme?: ToggleButtonTheme;
}

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    {
      id,
      label,
      checked,
      disabled = false,
      onChange,
      onClick,
      tooltipLabel,
      tooltipButtonLabel,
      tooltipText,
      tooltip,
      variant = 'default',
      theme,
      style,
      className = '',
      'data-testid': testId,
      ...props
    },
    ref,
  ) => {
    const buttonId = useStableId(id, 'ivds-toggle-button');
    const labelId = `${buttonId}-label`;
    const mergedStyle = { ...(theme ?? {}), ...(style ?? {}) } as ComponentCSSProperties;

    const tooltipElement = tooltip
      ? React.cloneElement(tooltip, {
          buttonClassName: ['ivds-toggle-button__tooltip-button', tooltip.props.buttonClassName]
            .filter(Boolean)
            .join(' '),
        })
      : tooltipText
        ? (
            <Tooltip
              buttonClassName="ivds-toggle-button__tooltip-button"
              tooltipLabel={tooltipLabel}
              buttonLabel={tooltipButtonLabel}
            >
              {tooltipText}
            </Tooltip>
          )
        : null;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }

      onChange(!checked);
      onClick?.(event);
    };

    return (
      <div
        className={['ivds-toggle-button', variant === 'inline' && 'ivds-toggle-button--inline', className]
          .filter(Boolean)
          .join(' ')}
        style={mergedStyle}
      >
        <div className="ivds-toggle-button__header">
          <span id={labelId} className="ivds-toggle-button__label">
            {label}
          </span>
          {tooltipElement}
        </div>
        <button
          {...props}
          id={buttonId}
          ref={ref}
          type="button"
          disabled={disabled}
          aria-pressed={checked}
          aria-labelledby={labelId}
          className={['ivds-toggle-button__control', checked && 'ivds-toggle-button__control--checked']
            .filter(Boolean)
            .join(' ')}
          onClick={handleClick}
          data-testid={testId}
        >
          <span className="ivds-toggle-button__icon ivds-toggle-button__icon--off" aria-hidden="true">
            <IconXCircleFill />
          </span>
          <span className="ivds-toggle-button__thumb" aria-hidden="true" />
          <span className="ivds-toggle-button__icon ivds-toggle-button__icon--on" aria-hidden="true">
            <IconCheckCircleFill />
          </span>
        </button>
      </div>
    );
  },
);

ToggleButton.displayName = 'ToggleButton';
