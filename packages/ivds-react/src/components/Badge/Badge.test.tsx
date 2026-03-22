import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders default variant', () => {
    render(<Badge>Label</Badge>);

    const badge = screen.getByText('Label');
    expect(badge).toHaveClass('ivds-badge');
    expect(badge).toHaveClass('ivds-badge--neutral');
  });

  it('renders specific variant and dot indicator', () => {
    const { container } = render(
      <Badge variant="success" showDot>
        Active
      </Badge>,
    );

    expect(screen.getByText('Active')).toHaveClass('ivds-badge--success');
    expect(container.querySelector('.ivds-badge__dot')).toBeInTheDocument();
  });
});
