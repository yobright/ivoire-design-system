import React from 'react';

const sanitizeId = (value: string): string => value.replace(/:/g, '');

export const useStableId = (providedId?: string, prefix = 'ivds'): string => {
  const reactId = React.useId();
  const generatedId = `${prefix}-${sanitizeId(reactId)}`;
  return providedId ?? generatedId;
};
