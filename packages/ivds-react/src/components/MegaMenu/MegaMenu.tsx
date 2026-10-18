import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { IconChevronDown, IconMenu, IconX } from '../../icons';
import { BaseComponentProps } from '../../utils/types';

export interface MegaMenuLink {
  label: string;
  href: string;
  isCurrent?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

export interface MegaMenuSection {
  id: string;
  label: string;
  columns: MegaMenuColumn[];
}

export interface MegaMenuAction {
  label: string;
  href: string;
}

export interface MegaMenuProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  sections: MegaMenuSection[];
  action?: MegaMenuAction;
  ariaLabel?: string;
  menuButtonLabel?: string;
  closeLabel?: string;
  defaultOpenId?: string;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  sections,
  action,
  ariaLabel = 'Navigation principale',
  menuButtonLabel = 'Menu',
  closeLabel = 'Fermer',
  defaultOpenId,
  className = '',
  id,
  'data-testid': testId,
  ...props
}) => {
  const generatedId = useId();
  const rootId = id ?? `ivds-mega-menu-${generatedId}`;
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === openId) ?? null,
    [openId, sections]
  );

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenId(null);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenId(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointer);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('pointerdown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const toggleSection = (sectionId: string) => {
    setOpenId((current) => (current === sectionId ? null : sectionId));
  };

  const classes = ['ivds-mega-menu', className].filter(Boolean).join(' ');

  return (
    <div ref={rootRef} id={rootId} className={classes} data-testid={testId} {...props}>
      <div className="ivds-mega-menu__bar">
        <button
          className="ivds-mega-menu__mobile-trigger"
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <IconMenu aria-hidden="true" />
          {menuButtonLabel}
        </button>

        <nav className="ivds-mega-menu__nav" aria-label={ariaLabel}>
          {sections.map((section) => {
            const isOpen = openId === section.id;
            const panelId = `${rootId}-${section.id}-panel`;

            return (
              <button
                key={section.id}
                type="button"
                className={['ivds-mega-menu__trigger', isOpen && 'ivds-mega-menu__trigger--active']
                  .filter(Boolean)
                  .join(' ')}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleSection(section.id)}
                onMouseEnter={() => setOpenId(section.id)}
              >
                <span>{section.label}</span>
                <IconChevronDown aria-hidden="true" />
              </button>
            );
          })}
        </nav>

        {action ? (
          <a className="ivds-mega-menu__action" href={action.href}>
            {action.label}
          </a>
        ) : null}
      </div>

      {activeSection ? (
        <div
          className="ivds-mega-menu__panel"
          id={`${rootId}-${activeSection.id}-panel`}
          onMouseLeave={() => setOpenId(null)}
        >
          <div className="ivds-mega-menu__panel-inner">
            <div className="ivds-mega-menu__panel-actions">
              <button className="ivds-mega-menu__close" type="button" onClick={() => setOpenId(null)}>
                {closeLabel}
                <IconX aria-hidden="true" />
              </button>
            </div>

            <div className="ivds-mega-menu__columns">
              {activeSection.columns.map((column) => (
                <section className="ivds-mega-menu__column" key={column.title}>
                  <h2 className="ivds-mega-menu__column-title">{column.title}</h2>
                  <ul className="ivds-mega-menu__list">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          className="ivds-mega-menu__link"
                          href={link.href}
                          aria-current={link.isCurrent ? 'page' : undefined}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="ivds-mega-menu__mobile-panel" role="dialog" aria-modal="true" aria-label={menuButtonLabel}>
          <div className="ivds-mega-menu__mobile-header">
            <strong>{menuButtonLabel}</strong>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label={closeLabel}>
              <IconX aria-hidden="true" />
            </button>
          </div>
          <div className="ivds-mega-menu__mobile-body">
            {sections.map((section) => (
              <details key={section.id} open={section.id === defaultOpenId}>
                <summary>{section.label}</summary>
                {section.columns.map((column) => (
                  <div className="ivds-mega-menu__mobile-group" key={column.title}>
                    <h2>{column.title}</h2>
                    {column.links.map((link) => (
                      <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </details>
            ))}
            {action ? (
              <a className="ivds-mega-menu__mobile-action" href={action.href} onClick={() => setMobileOpen(false)}>
                {action.label}
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

MegaMenu.displayName = 'MegaMenu';
