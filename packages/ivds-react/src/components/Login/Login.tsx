import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface LoginProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children' | 'title'> {
  title?: string;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Login: React.FC<LoginProps> = ({
  title = 'Connexion',
  description,
  actions,
  footer,
  children,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  return (
    <div className={['ivds-login', className].filter(Boolean).join(' ')} data-testid={testId} {...props}>
      {title && <h2 className="ivds-login__title">{title}</h2>}
      {description && <p className="ivds-login__description">{description}</p>}
      {children && <div className="ivds-login__fields">{children}</div>}
      {actions && <div className="ivds-login__actions">{actions}</div>}
      {footer && <div className="ivds-login__footer">{footer}</div>}
    </div>
  );
};

Login.displayName = 'Login';
