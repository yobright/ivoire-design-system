import React, { useEffect, useRef, useState } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends BaseComponentProps {
  /** Array of tab items */
  items: TabItem[];
  /** Initially active tab ID */
  defaultActiveId?: string;
  /** Whether tabs should take full width */
  fullWidth?: boolean;
  /** Accessible label for the tab list */
  ariaLabel?: string;
  /** Callback on tab change */
  onChange?: (id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveId,
  fullWidth = false,
  ariaLabel,
  onChange,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const getInitialActiveId = () => {
    const defaultItem = items.find((item) => item.id === defaultActiveId && !item.disabled);
    if (defaultItem) {
      return defaultItem.id;
    }

    return items.find((item) => !item.disabled)?.id;
  };

  const [activeId, setActiveId] = useState<string | undefined>(() => getInitialActiveId());

  useEffect(() => {
    if (activeId && items.some((item) => item.id === activeId && !item.disabled)) {
      return;
    }

    const nextId = getInitialActiveId();
    if (nextId && nextId !== activeId) {
      setActiveId(nextId);
    }
  }, [activeId, defaultActiveId, items]);

  const handleTabClick = (id: string) => {
    setActiveId(id);
    if (onChange) onChange(id);
  };

  const focusTabAt = (index: number) => {
    tabsRef.current[index]?.focus();
  };

  const getNextEnabledIndex = (currentIndex: number, direction: 1 | -1) => {
    const total = items.length;
    if (total === 0) return currentIndex;

    let nextIndex = currentIndex;
    for (let i = 0; i < total; i += 1) {
      nextIndex = (nextIndex + direction + total) % total;
      if (!items[nextIndex]?.disabled) {
        return nextIndex;
      }
    }
    return currentIndex;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (items.length === 0) return;

    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = getNextEnabledIndex(index, 1);
        break;
      case 'ArrowLeft':
        nextIndex = getNextEnabledIndex(index, -1);
        break;
      case 'Home':
        nextIndex = items.findIndex((item) => !item.disabled);
        break;
      case 'End':
        for (let i = items.length - 1; i >= 0; i -= 1) {
          if (!items[i]?.disabled) {
            nextIndex = i;
            break;
          }
        }
        break;
      default:
        break;
    }

    if (nextIndex === null || nextIndex === -1) {
      return;
    }

    event.preventDefault();
    const nextItem = items[nextIndex];
    if (nextItem && !nextItem.disabled) {
      handleTabClick(nextItem.id);
      focusTabAt(nextIndex);
    }
  };

  const baseClass = 'ivds-tabs';
  const classes = [
    baseClass,
    fullWidth && `${baseClass}--full-width`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} data-testid={testId} {...props}>
      <div className={`${baseClass}__list`} role="tablist" aria-label={ariaLabel}>
        {items.map((item, index) => (
          <button
            key={item.id}
            role="tab"
            type="button"
            aria-selected={activeId === item.id}
            aria-controls={`${baseClass}__content-${item.id}`}
            id={`${baseClass}__tab-${item.id}`}
            className={`${baseClass}__trigger ${activeId === item.id ? `${baseClass}__trigger--active` : ''}`}
            onClick={() => !item.disabled && handleTabClick(item.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            disabled={item.disabled}
            tabIndex={activeId === item.id ? 0 : -1}
            ref={(node) => {
              tabsRef.current[index] = node;
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={`${baseClass}__content`}>
        {items.map((item) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`${baseClass}__content-${item.id}`}
            aria-labelledby={`${baseClass}__tab-${item.id}`}
            hidden={item.id !== activeId}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';
