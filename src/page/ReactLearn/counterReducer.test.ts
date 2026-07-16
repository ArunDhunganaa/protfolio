import { describe, it, expect } from 'vitest';
import { counterReducer, INITIAL_STATE } from './counterReducer';
import type { CounterState } from './counterReducer';

const empty: CounterState = INITIAL_STATE;

describe('counterReducer – change action', () => {
  it('increments count by a positive amount', () => {
    const next = counterReducer(empty, { type: 'change', amount: 5 });
    expect(next.count).toBe(5);
  });

  it('decrements count by a negative amount', () => {
    const next = counterReducer(empty, { type: 'change', amount: -3 });
    expect(next.count).toBe(-3);
  });

  it('accumulates across multiple dispatches', () => {
    const s1 = counterReducer(empty, { type: 'change', amount: 10 });
    const s2 = counterReducer(s1, { type: 'change', amount: -4 });
    expect(s2.count).toBe(6);
  });

  it('adds a history entry with correct value and delta', () => {
    const next = counterReducer(empty, { type: 'change', amount: 7 });
    expect(next.history).toHaveLength(1);
    expect(next.history[0]).toMatchObject({ value: 7, delta: 7 });
  });

  it('prepends entries so the most recent is first', () => {
    const s1 = counterReducer(empty, { type: 'change', amount: 1 });
    const s2 = counterReducer(s1, { type: 'change', amount: 2 });
    expect(s2.history[0]).toMatchObject({ value: 3, delta: 2 });
    expect(s2.history[1]).toMatchObject({ value: 1, delta: 1 });
  });

  it('caps history at 8 entries', () => {
    let state = empty;
    for (let i = 0; i < 10; i++) {
      state = counterReducer(state, { type: 'change', amount: 1 });
    }
    expect(state.history).toHaveLength(8);
  });

  it('does not mutate the previous state', () => {
    counterReducer(empty, { type: 'change', amount: 5 });
    expect(empty.count).toBe(0);
    expect(empty.history).toHaveLength(0);
  });
});

describe('counterReducer – reset action', () => {
  it('resets count to 0 from a non-zero value', () => {
    const s1 = counterReducer(empty, { type: 'change', amount: 42 });
    const s2 = counterReducer(s1, { type: 'reset' });
    expect(s2.count).toBe(0);
  });

  it('adds a history entry with delta "reset"', () => {
    const s1 = counterReducer(empty, { type: 'change', amount: 5 });
    const s2 = counterReducer(s1, { type: 'reset' });
    expect(s2.history[0]).toMatchObject({ value: 0, delta: 'reset' });
  });

  it('prepends the reset entry to existing history', () => {
    const s1 = counterReducer(empty, { type: 'change', amount: 3 });
    const s2 = counterReducer(s1, { type: 'reset' });
    expect(s2.history).toHaveLength(2);
    expect(s2.history[0].delta).toBe('reset');
  });

  it('caps history at 8 after a reset', () => {
    let state = empty;
    for (let i = 0; i < 8; i++) {
      state = counterReducer(state, { type: 'change', amount: 1 });
    }
    state = counterReducer(state, { type: 'reset' });
    expect(state.history).toHaveLength(8);
  });
});
