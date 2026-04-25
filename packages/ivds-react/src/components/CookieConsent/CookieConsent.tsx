import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface CookieConsentProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children' | 'title'> {
  title?: string;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  onAccept?: () => void;
  onReject?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  title = 'Ce site utilise des cookies',
  description,
  actions,
  children,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  return (
    <aside
      className={['ivds-cookie-consent', className].filter(Boolean).join(' ')}
      role="dialog"
      aria-label={title}
      data-testid={testId}
      {...props}
    >
      {title && <h2 className="ivds-cookie-consent__title">{title}</h2>}
      {description && <p className="ivds-cookie-consent__description">{description}</p>}
      {children}
      {actions && <div className="ivds-cookie-consent__actions">{actions}</div>}
    </aside>
  );
};

CookieConsent.displayName = 'CookieConsent';
