import React from 'react';
import { BaseComponentProps } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export type KorosType = 'basic' | 'beat' | 'pulse' | 'wave' | 'vibration' | 'calm';

export interface KorosProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  type?: KorosType;
  dense?: boolean;
  flipVertical?: boolean;
}

const patterns: Record<KorosType, (scale: number) => React.ReactNode> = {
  basic: (s) => <path transform={`scale(${s})`} d="m0 5v80h32v-80c-8 0-8-5-16-5s-8 5-16 5z" />,
  beat: (s) => <path transform={`scale(${s})`} d="m0 21v64h32v-64c-4 0-5.4-4-5.4-4l-5.2-13s-1.4-4-5.4-4-5.4 4-5.4 4l-5.2 13s-1.4 4-5.4 4z" />,
  pulse: (s) => <path transform={`scale(${s})`} d="m0 10v75h32v-75c-8 0-8-10-16-10s-8 10-16 10z" />,
  wave: (s) => <path transform={`scale(${s})`} d="m0 10v75h32v-75c-8 0-13-3.7-16-10-3 6.3-8 10-16 10z" />,
  vibration: (s) => <path transform={`scale(${s})`} d="m0 0v85h32v-85l-16 16z" />,
  calm: (s) => <path transform={`scale(${s})`} d="m0 0v85h32v-85z" />,
};

export const Koros: React.FC<KorosProps> = ({
  type = 'basic',
  dense = false,
  flipVertical = false,
  className = '',
  id,
  'data-testid': testId,
  ...props
}) => {
  const korosId = useStableId(id, 'ivds-koros');
  const patternId = `${korosId}-pattern`;
  const scale = dense ? 1 : 3;
  const patternWidth = dense ? 32 : 96;
  const height = dense ? 12 : 85;

  const classes = [
    'ivds-koros',
    flipVertical && 'ivds-koros--flip',
    dense && 'ivds-koros--dense',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} data-testid={testId} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height={height}>
        <defs>
          <pattern id={patternId} x="0" y="0" width={patternWidth} height="85" patternUnits="userSpaceOnUse">
            {patterns[type](scale)}
          </pattern>
        </defs>
        <rect fill={`url(#${patternId})`} width="100%" height="85" />
      </svg>
    </div>
  );
};

Koros.displayName = 'Koros';
