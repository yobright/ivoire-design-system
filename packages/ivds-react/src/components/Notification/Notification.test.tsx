import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Notification } from './Notification';

describe('Notification', () => {
  it('renders with basic content', () => {
    render(<Notification>Basic notification</Notification>);
    
    expect(screen.getByText('Basic notification')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('applies type classes correctly', () => {
    render(<Notification type="success">Success message</Notification>);
    const notification = screen.getByRole('alert');
    
    expect(notification).toHaveClass('ivds-notification--success');
  });

  it('renders with title', () => {
    render(<Notification title="Important">Message content</Notification>);
    
    expect(screen.getByText('Important')).toBeInTheDocument();
    expect(screen.getByText('Message content')).toBeInTheDocument();
  });

  it('shows default icon based on type', () => {
    render(<Notification type="error">Error message</Notification>);
    
    expect(screen.getByText('✕')).toBeInTheDocument();
  });

  it('renders custom icon', () => {
    render(
      <Notification icon={<span data-testid="custom-icon">🔥</span>}>
        Custom icon message
      </Notification>
    );
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    render(<Notification showIcon={false}>No icon message</Notification>);
    
    expect(screen.queryByText('ℹ')).not.toBeInTheDocument();
  });

  it('renders dismissible notification', () => {
    const handleDismiss = jest.fn();
    render(
      <Notification dismissible onDismiss={handleDismiss}>
        Dismissible message
      </Notification>
    );
    
    const notification = screen.getByRole('alert');
    const dismissButton = screen.getByLabelText('Dismiss notification');
    
    expect(notification).toHaveClass('ivds-notification--dismissible');
    expect(dismissButton).toBeInTheDocument();
    
    fireEvent.click(dismissButton);
    expect(handleDismiss).toHaveBeenCalled();
  });

  it('renders all notification types with correct icons', () => {
    const types = [
      { type: 'info', icon: 'ℹ' },
      { type: 'success', icon: '✓' },
      { type: 'warning', icon: '⚠' },
      { type: 'error', icon: '✕' },
    ] as const;

    types.forEach(({ type, icon }) => {
      const { unmount } = render(<Notification type={type}>Message</Notification>);
      expect(screen.getByText(icon)).toBeInTheDocument();
      unmount();
    });
  });
});