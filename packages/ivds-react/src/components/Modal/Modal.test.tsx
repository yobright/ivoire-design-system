import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from './Modal';

describe('Modal', () => {
  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={() => undefined} title="Modal title">
        Body
      </Modal>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders dialog content when open', () => {
    render(
      <Modal isOpen onClose={() => undefined} title="Modal title">
        Body content
      </Modal>,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Body content')).toBeInTheDocument();
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('calls onClose on overlay and close button click', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen onClose={onClose} title="Modal title" data-testid="overlay">
        Body
      </Modal>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Close modal overlay' }));
    fireEvent.click(screen.getByRole('button', { name: 'Close modal' }));

    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it('does not close when clicking inside modal container', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen onClose={onClose} title="Modal title">
        <button type="button">Inner action</button>
      </Modal>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Inner action' }));

    expect(onClose).not.toHaveBeenCalled();
  });

  it('hides close button when showCloseButton is false and restores overflow when closed', () => {
    const { rerender } = render(
      <Modal isOpen onClose={() => undefined} title="Modal title" showCloseButton={false}>
        Body
      </Modal>,
    );

    expect(screen.queryByRole('button', { name: 'Close modal' })).not.toBeInTheDocument();

    rerender(
      <Modal isOpen={false} onClose={() => undefined} title="Modal title" showCloseButton={false}>
        Body
      </Modal>,
    );

    expect(document.body.style.overflow).toBe('');
  });
});
