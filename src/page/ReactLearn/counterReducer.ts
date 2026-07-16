export interface HistoryEntry {
  id: number;
  value: number;
  delta: number | 'reset';
  time: string;
}

export interface CounterState {
  count: number;
  history: HistoryEntry[];
}

export type CounterAction =
  | { type: 'change'; amount: number }
  | { type: 'reset' };

export const INITIAL_STATE: CounterState = { count: 0, history: [] };

export function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'change': {
      const next = state.count + action.amount;
      return {
        count: next,
        history: [
          { id: Date.now(), value: next, delta: action.amount, time: new Date().toLocaleTimeString() },
          ...state.history,
        ].slice(0, 8),
      };
    }
    case 'reset':
      return {
        count: 0,
        history: [
          { id: Date.now(), value: 0, delta: 'reset' as const, time: new Date().toLocaleTimeString() },
          ...state.history,
        ].slice(0, 8),
      };
  }
}
