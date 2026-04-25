import React from 'react';
import { BaseComponentProps } from '../../utils/types';

type PaginationLanguage = 'fr' | 'en';
type PaginationItem = number | 'start-ellipsis' | 'end-ellipsis';

type PaginationChangeEvent = React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>;

const labels = {
  fr: {
    pagination: 'Pagination',
    previous: 'Précédente',
    next: 'Suivante',
    page: (pageNumber: number) => `Aller à la page ${pageNumber}`,
    current: (pageNumber: number) => `Page actuelle, ${pageNumber}`,
  },
  en: {
    pagination: 'Pagination',
    previous: 'Previous',
    next: 'Next',
    page: (pageNumber: number) => `Go to page ${pageNumber}`,
    current: (pageNumber: number) => `Current page, ${pageNumber}`,
  },
} satisfies Record<PaginationLanguage, {
  pagination: string;
  previous: string;
  next: string;
  page: (pageNumber: number) => string;
  current: (pageNumber: number) => string;
}>;

const range = (start: number, end: number): number[] =>
  start > end ? [] : Array.from({ length: end - start + 1 }, (_, index) => start + index);

const createPaginationItems = (pageCount: number, pageIndex: number, siblingCount: number): PaginationItem[] => {
  if (pageCount <= 0) {
    return [];
  }

  const currentPage = pageIndex + 1;
  const totalPageNumbers = siblingCount * 2 + 5;

  if (pageCount <= totalPageNumbers) {
    return range(1, pageCount);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, pageCount - 1);
  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < pageCount - 1;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + siblingCount * 2;
    return [...range(1, leftItemCount), 'end-ellipsis', pageCount];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + siblingCount * 2;
    return [1, 'start-ellipsis', ...range(pageCount - rightItemCount + 1, pageCount)];
  }

  return [1, 'start-ellipsis', ...range(leftSiblingIndex, rightSiblingIndex), 'end-ellipsis', pageCount];
};

export interface PaginationProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLElement>, keyof BaseComponentProps | 'children' | 'onChange'> {
  pageCount: number;
  pageIndex: number;
  pageHref?: (index: number) => string;
  onChange?: (event: PaginationChangeEvent, index: number) => void;
  paginationAriaLabel?: string;
  siblingCount?: number;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
  previousLabel?: string;
  nextLabel?: string;
  language?: PaginationLanguage;
  size?: 'small' | 'medium' | 'large';
  compact?: boolean;
  rounded?: boolean;
}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      pageCount,
      pageIndex,
      pageHref,
      onChange,
      paginationAriaLabel,
      siblingCount = 1,
      hidePrevButton = false,
      hideNextButton = false,
      previousLabel,
      nextLabel,
      language = 'fr',
      size = 'medium',
      compact = false,
      rounded = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const resolvedPageCount = Math.max(0, Math.floor(pageCount));

    if (resolvedPageCount === 0) {
      return null;
    }

    const locale = labels[language];
    const resolvedPageIndex = Math.min(Math.max(pageIndex, 0), resolvedPageCount - 1);
    const items = createPaginationItems(resolvedPageCount, resolvedPageIndex, siblingCount);
    const classes = [
      'ivds-pagination',
      size === 'small' && 'ivds-pagination--small',
      size === 'large' && 'ivds-pagination--large',
      compact && 'ivds-pagination--compact',
      rounded && 'ivds-pagination--rounded',
      className,
    ]
      .filter(Boolean)
      .join(' ');
    const resolvedPreviousLabel = previousLabel ?? locale.previous;
    const resolvedNextLabel = nextLabel ?? locale.next;

    const renderPage = (pageNumber: number) => {
      const index = pageNumber - 1;
      const isCurrent = index === resolvedPageIndex;
      const commonClassName = ['ivds-pagination__link', isCurrent && 'ivds-pagination__link--active']
        .filter(Boolean)
        .join(' ');

      if (isCurrent) {
        return (
          <span className={commonClassName} aria-current="page" aria-label={locale.current(pageNumber)}>
            {pageNumber}
          </span>
        );
      }

      if (pageHref) {
        return (
          <a
            href={pageHref(index)}
            className={commonClassName}
            aria-label={locale.page(pageNumber)}
            onClick={(event) => onChange?.(event, index)}
          >
            {pageNumber}
          </a>
        );
      }

      return (
        <button
          type="button"
          className={commonClassName}
          aria-label={locale.page(pageNumber)}
          onClick={(event) => onChange?.(event, index)}
        >
          {pageNumber}
        </button>
      );
    };

    const renderControl = (index: number, label: string, disabled: boolean) => {
      const commonClassName = [
        'ivds-pagination__link',
        disabled && 'ivds-pagination__link--disabled',
      ]
        .filter(Boolean)
        .join(' ');

      if (disabled) {
        return (
          <span className={commonClassName} aria-disabled="true">
            {label}
          </span>
        );
      }

      if (pageHref) {
        return (
          <a
            href={pageHref(index)}
            className={commonClassName}
            aria-label={label}
            onClick={(event) => onChange?.(event, index)}
          >
            {label}
          </a>
        );
      }

      return (
        <button
          type="button"
          className={commonClassName}
          aria-label={label}
          onClick={(event) => onChange?.(event, index)}
        >
          {label}
        </button>
      );
    };

    return (
      <nav
        ref={ref}
        className={classes}
        aria-label={paginationAriaLabel ?? locale.pagination}
        {...props}
      >
        <ul className="ivds-pagination__list">
          {!hidePrevButton && (
            <li className="ivds-pagination__item">
              {renderControl(resolvedPageIndex - 1, resolvedPreviousLabel, resolvedPageIndex === 0)}
            </li>
          )}

          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`} className="ivds-pagination__item">
              {typeof item === 'number' ? (
                renderPage(item)
              ) : (
                <span className="ivds-pagination__ellipsis" aria-hidden="true">
                  …
                </span>
              )}
            </li>
          ))}

          {!hideNextButton && (
            <li className="ivds-pagination__item">
              {renderControl(
                resolvedPageIndex + 1,
                resolvedNextLabel,
                resolvedPageIndex >= resolvedPageCount - 1,
              )}
            </li>
          )}
        </ul>
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';
