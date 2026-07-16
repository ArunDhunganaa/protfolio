import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './counter';

describe('Counter component', () => {
  it('renders with initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments when the +1 button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button', { name: 'Increment by 1' }));
    expect(screen.getByText('+1 above zero')).toBeInTheDocument();
  });

  it('decrements when the -1 button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button', { name: 'Decrement by 1' }));
    expect(screen.getByText('1 below zero')).toBeInTheDocument();
  });

  it('resets count after incrementing', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button', { name: 'Increment by 1' }));
    await user.click(screen.getByRole('button', { name: 'Reset counter' }));
    expect(screen.queryByText('+1 above zero')).not.toBeInTheDocument();
  });
});
