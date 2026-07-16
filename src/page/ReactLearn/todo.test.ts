import { describe, it, expect } from 'vitest';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  saveEdit,
  filterTodos,
  getProgress,
  type Todo,
} from './todoHelpers';

const make = (overrides: Partial<Todo> = {}): Todo => ({
  id: 'test-id',
  text: 'Test task',
  done: false,
  ...overrides,
});

describe('addTodo', () => {
  it('appends a new undone task', () => {
    const result = addTodo([], 'Buy milk');
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({ text: 'Buy milk', done: false });
  });

  it('trims whitespace from text', () => {
    const result = addTodo([], '  Buy milk  ');
    expect(result[0].text).toBe('Buy milk');
  });

  it('generates a unique id per call', () => {
    const a = addTodo([], 'a')[0];
    const b = addTodo([], 'b')[0];
    expect(a.id).not.toBe(b.id);  
  });

  it('preserves existing todos', () => {
    const existing = [make({ id: 'x' })];
    expect(addTodo(existing, 'new')).toHaveLength(2);
    expect(addTodo(existing, 'new')[0].id).toBe('x');
  });
});

describe('toggleTodo', () => {
  it('flips done from false to true', () => {
    const todos = [make({ id: '1', done: false })];
    expect(toggleTodo(todos, '1')[0].done).toBe(true);
  });

  it('flips done from true to false', () => {
    const todos = [make({ id: '1', done: true })];
    expect(toggleTodo(todos, '1')[0].done).toBe(false);
  });

  it('does not mutate other todos', () => {
    const todos = [make({ id: '1' }), make({ id: '2' })];
    const result = toggleTodo(todos, '1');
    expect(result[1]).toStrictEqual(todos[1]);
  });
});

describe('deleteTodo', () => {
  it('removes the matching todo', () => {
    const todos = [make({ id: '1' }), make({ id: '2' })];
    const result = deleteTodo(todos, '1');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('2');
  });

  it('is a no-op for an unknown id', () => {
    const todos = [make({ id: '1' })];
    expect(deleteTodo(todos, 'nope')).toHaveLength(1);
  });
});

describe('clearCompleted', () => {
  it('removes only done todos', () => {
    const todos = [make({ id: '1', done: true }), make({ id: '2', done: false })];
    const result = clearCompleted(todos);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('2');
  });

  it('returns the same list when nothing is done', () => {
    const todos = [make({ done: false })];
    expect(clearCompleted(todos)).toHaveLength(1);
  });
});

describe('saveEdit', () => {
  it('updates the text of the matching todo', () => {
    const todos = [make({ id: '1', text: 'old' })];
    expect(saveEdit(todos, '1', 'new')[0].text).toBe('new');
  });

  it('trims whitespace', () => {
    const todos = [make({ id: '1', text: 'old' })];
    expect(saveEdit(todos, '1', '  trimmed  ')[0].text).toBe('trimmed');
  });

  it('does not mutate other todos', () => {
    const todos = [make({ id: '1' }), make({ id: '2', text: 'unchanged' })];
    expect(saveEdit(todos, '1', 'updated')[1].text).toBe('unchanged');
  });
});

describe('filterTodos', () => {
  const todos = [make({ id: '1', done: false }), make({ id: '2', done: true })];

  it('All returns every todo', () => {
    expect(filterTodos(todos, 'All')).toHaveLength(2);
  });

  it('Active returns only undone', () => {
    const result = filterTodos(todos, 'Active');
    expect(result).toHaveLength(1);
    expect(result[0].done).toBe(false);
  });

  it('Completed returns only done', () => {
    const result = filterTodos(todos, 'Completed');
    expect(result).toHaveLength(1);
    expect(result[0].done).toBe(true);
  });
});

describe('getProgress', () => {
  it('returns 0 for an empty list', () => {
    expect(getProgress([])).toBe(0);
  });

  it('returns 100 when all tasks are done', () => {
    expect(getProgress([make({ done: true })])).toBe(100);
  });

  it('calculates percentage correctly', () => {
    const todos = [make({ done: true }), make({ done: false })];
    expect(getProgress(todos)).toBe(50);
  });

  it('rounds to the nearest integer', () => {
    const todos = [make({ done: true }), make({ done: false }), make({ done: false })];
    expect(getProgress(todos)).toBe(33);
  });
});
