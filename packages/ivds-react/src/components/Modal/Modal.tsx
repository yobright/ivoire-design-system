import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BaseComponentProps } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface ModalProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'title' | 'children'> {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback for when the modal should close */
  onClose: () => void;
  /** Title for the modal header */
  title?: string;
  /** Optional supporting description */
  description?: React.ReactNode;
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether to show a close button */
  showCloseButton?: boolean;
  /** Footer actions */
  footer?: React.ReactNode;
  /** Whether clicking the overlay should close the modal */
  closeOnOverlayClick?: boolean;
  /** Whether pressing Escape should close the modal */
  closeOnEscape?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  size = 'md',
  showCloseButton = true,
  footer,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  children,
  className = '',
  'aria-label': ariaLabel,
  'data-testid': testId,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useStableId(undefined, 'ivds-modal-title');
  const descriptionId = useStableId(undefined, 'ivds-modal-description');
  const bodyId = useStableId(undefined, 'ivds-modal-body');

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') {
      return undefined;
    }

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    const container = containerRef.current;
    if (container) {
      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      );
      const target = focusable[0] ?? container;
      target.focus();
    }

    return () => {
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const baseClass = 'ivds-modal';
  const overlayClasses = [
    `${baseClass}__overlay`,
    size !== 'md' && `${baseClass}--${size}`,
  ].filter(Boolean).join(' ');
  const containerClasses = [
    `${baseClass}__container`,
    className,
  ].filter(Boolean).join(' ');
  const describedBy = [
    description && descriptionId,
    bodyId,
  ].filter(Boolean).join(' ') || undefined;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (closeOnEscape && event.key === 'Escape') {
      event.stopPropagation();
      onClose();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    );

    if (focusable.length === 0) {
      event.preventDefault();
      container.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeElement = document.activeElement as HTMLElement | null;

    if (event.shiftKey && activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const modalContent = (
    <div className={overlayClasses} data-testid={testId}>
      <button
        type="button"
        className={`${baseClass}__backdrop`}
        onClick={handleOverlayClick}
        aria-label="Close modal overlay"
        tabIndex={-1}
      />
      <div
        ref={containerRef}
        className={containerClasses}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={describedBy}
        aria-label={title ? undefined : ariaLabel}
        tabIndex={-1}
        {...props}
      >
        {(title || description || showCloseButton) && (
          <header className={`${baseClass}__header`}>
            {(title || description) && (
              <div className={`${baseClass}__heading`}>
                {title && (
                  <h2 id={titleId} className={`${baseClass}__title`}>
                    {title}
                  </h2>
                )}
                {description && (
                  <p id={descriptionId} className={`${baseClass}__description`}>
                    {description}
                  </p>
                )}
              </div>
            )}
            {showCloseButton && (
              <button
                className={`${baseClass}__close`}
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </header>
        )}
        <div id={bodyId} className={`${baseClass}__body`}>
          {children}
        </div>
        {footer && <footer className={`${baseClass}__footer`}>{footer}</footer>}
      </div>
    </div>
  );

  if (typeof document === 'undefined') {
    return modalContent;
  }

  return createPortal(modalContent, document.body);
};

Modal.displayName = 'Modal';
