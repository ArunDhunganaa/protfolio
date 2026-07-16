export type Filter = 'All' | 'Active' | 'Completed';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export function addTodo(todos: Todo[], text: string): Todo[] {
  return [...todos, { id: crypto.randomUUID(), text: text.trim(), done: false }];
}

export function toggleTodo(todos: Todo[], id: string): Todo[] {
  return todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
}

export function deleteTodo(todos: Todo[], id: string): Todo[] {
  return todos.filter((t) => t.id !== id);
}

export function clearCompleted(todos: Todo[]): Todo[] {
  return todos.filter((t) => !t.done);
}

export function saveEdit(todos: Todo[], id: string, text: string): Todo[] {
  return todos.map((t) => (t.id === id ? { ...t, text: text.trim() } : t));
}

export function filterTodos(todos: Todo[], filter: Filter): Todo[] {
  if (filter === 'Active') return todos.filter((t) => !t.done);
  if (filter === 'Completed') return todos.filter((t) => t.done);
  return todos;
}

export function getProgress(todos: Todo[]): number {
  return todos.length
    ? Math.round((todos.filter((t) => t.done).length / todos.length) * 100)
    : 0;
}
