import React from 'react';
import { IconHelpCircle } from '../../icons';
import { BaseComponentProps } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export type TooltipPlacement = 'auto' | 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  boxShadow?: boolean;
  placement?: TooltipPlacement;
  small?: boolean;
  buttonLabel?: string;
  tooltipLabel?: string;
  buttonClassName?: string;
  tooltipClassName?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  boxShadow = false,
  children,
  placement = 'auto',
  small = false,
  buttonLabel = 'Tooltip',
  tooltipLabel = 'Tooltip',
  buttonClassName = '',
  tooltipClassName = '',
  className = '',
  id,
  'data-testid': testId,
  ...props
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const tooltipId = useStableId(id, 'ivds-tooltip');

  React.useEffect(() => {
    if (!isTooltipOpen || typeof document === 'undefined') {
      return undefined;
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsTooltipOpen(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node | null;

      if (target && rootRef.current && !rootRef.current.contains(target)) {
        setIsTooltipOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isTooltipOpen]);

  const bubbleClasses = [
    'ivds-tooltip__bubble',
    `ivds-tooltip__bubble--${placement}`,
    small && 'ivds-tooltip__bubble--small',
    boxShadow && 'ivds-tooltip__bubble--shadow',
    tooltipClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={rootRef} id={tooltipId} className={['ivds-tooltip', className].filter(Boolean).join(' ')} data-testid={testId} {...props}>
      <button
        type="button"
        className={['ivds-tooltip__button', buttonClassName].filter(Boolean).join(' ')}
        aria-label={buttonLabel}
        aria-expanded={isTooltipOpen}
        aria-controls={`${tooltipId}-content`}
        aria-describedby={isTooltipOpen ? `${tooltipId}-content` : undefined}
        onClick={() => setIsTooltipOpen((open) => !open)}
      >
        <span aria-hidden="true">
          <IconHelpCircle />
        </span>
      </button>
      {isTooltipOpen ? (
        <section
          id={`${tooltipId}-content`}
          role="tooltip"
          aria-label={tooltipLabel}
          className={bubbleClasses}
        >
          <div className="ivds-tooltip__content">{children}</div>
          <div className="ivds-tooltip__arrow" aria-hidden="true" />
        </section>
      ) : null}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
