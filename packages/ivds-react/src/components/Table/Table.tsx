import React, { useMemo, useState } from 'react';
import { IconChevronDown, IconChevronUp } from '../../icons';
import { BaseComponentProps } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface TableColumn {
  key: string;
  headerName: string;
  isSortable?: boolean;
  transform?: (args: { value: unknown; row: Record<string, unknown> }) => React.ReactNode;
}

type SortDirection = 'asc' | 'desc' | 'none';

export interface TableProps
  extends BaseComponentProps,
    Omit<React.TableHTMLAttributes<HTMLTableElement>, keyof BaseComponentProps | 'children'> {
  cols: TableColumn[];
  rows: Record<string, unknown>[];
  caption?: React.ReactNode;
  heading?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  dense?: boolean;
  striped?: boolean;
}

export const Table: React.FC<TableProps> = ({
  cols,
  rows,
  caption,
  heading,
  headingLevel = 2,
  dense = false,
  striped = false,
  className = '',
  id,
  'data-testid': testId,
  ...props
}) => {
  const tableId = useStableId(id, 'ivds-table');
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>('none');
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : d === 'desc' ? 'none' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const sortedRows = useMemo(() => {
    if (!sortKey || sortDir === 'none') return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = String(a[sortKey] ?? '');
      const bv = String(b[sortKey] ?? '');
      const cmp = av.localeCompare(bv, undefined, { numeric: true });
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return copy;
  }, [rows, sortKey, sortDir]);

  const tableClasses = [
    'ivds-table',
    dense && 'ivds-table--dense',
    striped && 'ivds-table--striped',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="ivds-table-container">
      {heading && <HeadingTag className="ivds-table__heading" id={`${tableId}-heading`}>{heading}</HeadingTag>}
      <table
        className={tableClasses}
        id={tableId}
        data-testid={testId}
        aria-labelledby={heading ? `${tableId}-heading` : undefined}
        {...props}
      >
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col.key} scope="col">
                {col.isSortable ? (
                  <button
                    type="button"
                    className="ivds-table__sort-button"
                    aria-label={`Trier par ${col.headerName}`}
                    onClick={() => handleSort(col.key)}
                  >
                    {col.headerName}
                    {sortKey === col.key && sortDir === 'asc' && <IconChevronUp />}
                    {sortKey === col.key && sortDir === 'desc' && <IconChevronDown />}
                  </button>
                ) : (
                  col.headerName
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, rowIdx) => (
            <tr key={String(row.id ?? rowIdx)}>
              {cols.map((col) => (
                <td key={col.key}>
                  {col.transform ? col.transform({ value: row[col.key], row }) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.displayName = 'Table';
