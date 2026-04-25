import React, { useState } from 'react';
import { BaseComponentProps } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

const getFileNames = (files: FileList | null): string[] => {
  if (!files) {
    return [];
  }

  return Array.from(files).map((file) => file.name);
};

export interface FileInputProps
  extends BaseComponentProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseComponentProps | 'children' | 'type' | 'value' | 'onChange'> {
  label?: string;
  helperText?: React.ReactNode;
  error?: string | boolean;
  buttonLabel?: string;
  noFileText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      label,
      helperText,
      error,
      buttonLabel = 'Choisir un fichier',
      noFileText = 'Aucun fichier sélectionné',
      disabled = false,
      required = false,
      multiple = false,
      className = '',
      onChange,
      id,
      name,
      'aria-label': ariaLabel,
      'data-testid': testId,
      ...props
    },
    ref,
  ) => {
    const inputId = useStableId(id, 'ivds-file-input');
    const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
    const errorId = typeof error === 'string' ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;
    const resolvedAriaLabel = ariaLabel ?? (!label ? buttonLabel : undefined);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedFiles(getFileNames(event.target.files));
      onChange?.(event);
    };

    return (
      <div className={['ivds-file-input-wrapper', className].filter(Boolean).join(' ')}>
        {label ? <label className="ivds-file-input__label" htmlFor={inputId}>{label}</label> : null}
        <div className="ivds-file-input__control">
          <input
            ref={ref}
            id={inputId}
            className="ivds-file-input"
            type="file"
            name={name}
            disabled={disabled}
            required={required}
            multiple={multiple}
            onChange={handleChange}
            aria-label={resolvedAriaLabel}
            aria-invalid={!!error || undefined}
            aria-describedby={describedBy}
            data-testid={testId}
            {...props}
          />
          <label className="ivds-file-input__trigger" htmlFor={inputId}>
            {buttonLabel}
          </label>
          <span className="ivds-file-input__status">
            {selectedFiles.length > 0 ? selectedFiles.join(', ') : noFileText}
          </span>
        </div>
        {selectedFiles.length > 1 ? (
          <ul className="ivds-file-input__list" aria-label="Fichiers sélectionnés">
            {selectedFiles.map((fileName) => (
              <li key={fileName}>{fileName}</li>
            ))}
          </ul>
        ) : null}
        {typeof error === 'string' ? (
          <div className="ivds-file-input__error" id={errorId} aria-live="polite">
            {error}
          </div>
        ) : null}
        {helperText ? (
          <div className="ivds-file-input__helper" id={helperId} hidden={typeof error === 'string' || undefined}>
            {helperText}
          </div>
        ) : null}
      </div>
    );
  },
);

FileInput.displayName = 'FileInput';
