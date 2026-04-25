import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface LoadingSpinnerProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  multicolor?: boolean;
  small?: boolean;
  loadingText?: string;
  loadingFinishedText?: string;
  valuenow?: number;
}

const visuallyHiddenStyles: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

const useNotificationArea = (loadingText: string, loadingFinishedText: string) => {
  React.useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    Object.assign(announcer.style, visuallyHiddenStyles);
    document.body.appendChild(announcer);
    announcer.textContent = loadingText;

    return () => {
      announcer.textContent = loadingFinishedText;
      window.setTimeout(() => {
        announcer.remove();
      }, 250);
    };
  }, [loadingFinishedText, loadingText]);
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  multicolor = false,
  small = false,
  loadingText = 'Page is loading',
  loadingFinishedText = 'Page has finished loading',
  valuenow,
  className = '',
  role,
  'aria-label': ariaLabel,
  'data-testid': testId,
  ...props
}) => {
  useNotificationArea(loadingText, loadingFinishedText);

  const classes = ['ivds-loading-spinner', small && 'ivds-loading-spinner--small', multicolor && 'ivds-loading-spinner--multicolor', className]
    .filter(Boolean)
    .join(' ');

  const resolvedRole = role ?? (typeof valuenow === 'number' ? 'progressbar' : 'status');
  const resolvedAriaLabel = ariaLabel ?? loadingText;

  return (
    <div
      className={classes}
      role={resolvedRole}
      aria-label={resolvedAriaLabel}
      aria-valuemin={typeof valuenow === 'number' ? 0 : undefined}
      aria-valuemax={typeof valuenow === 'number' ? 100 : undefined}
      aria-valuenow={typeof valuenow === 'number' ? valuenow : undefined}
      data-testid={testId}
      {...props}
    >
      <span className="ivds-loading-spinner__sr-text">{loadingText}</span>
      <div aria-hidden="true" />
      <div aria-hidden="true" />
      <div aria-hidden="true" />
    </div>
  );
};

LoadingSpinner.displayName = 'LoadingSpinner';
