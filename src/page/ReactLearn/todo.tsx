import { useState } from 'react';

type Filter = 'All' | 'Active' | 'Completed';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const FILTERS: Filter[] = ['All', 'Active', 'Completed'];

const INITIAL_TODOS: Todo[] = [
  { id: 1, text: 'Build Counter App', done: true },
  { id: 2, text: 'Build Todo List', done: false },
  { id: 3, text: 'Build Weather App', done: false },
];

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);
  const [input, setInput] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('All');
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), done: false },
    ]);
    setInput('');
  };

  const toggleTodo = (id: number) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  const deleteTodo = (id: number) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const clearCompleted = () => setTodos((prev) => prev.filter((t) => !t.done));

  const saveEdit = (id: number) => {
    if (!editText.trim()) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: editText.trim() } : t)),
    );
    setEditId(null);
  };

  const filtered = todos.filter((t) => {
    if (filter === 'Active') return !t.done;
    if (filter === 'Completed') return t.done;
    return true;
  });

  const completedCount = todos.filter((t) => t.done).length;
  const pct = todos.length
    ? Math.round((completedCount / todos.length) * 100)
    : 0;

  return (
    <section className="todo min-h-screen pt-24 pb-10 sm:pt-48 sm:pb-16">
      <h2 className="mb-4 px-4 text-center text-4xl font-bold sm:mb-6 sm:text-6xl">
        Todo app
      </h2>

      <div className="container mx-auto flex max-w-2xl flex-1 flex-col gap-4 px-4 py-6 sm:gap-6 sm:px-6 sm:py-10">
        {/* Progress */}
        <div className="bg-surface border-border rounded-2xl border p-4 sm:p-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-text text-sm font-semibold">
              Overall Progress
            </span>
            <span className="text-primary text-sm font-bold">{pct}%</span>
          </div>
          <div className="bg-border h-2 w-full overflow-hidden rounded-full">
            <div
              className="bg-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-muted mt-2 text-xs">
            {completedCount} of {todos.length} tasks done
          </p>
        </div>

        {/* Input */}
        <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-3 sm:p-4">
          <div className="flex gap-2">
            <input
              className="bg-bg border-border text-text placeholder:text-muted focus:border-primary flex-1 rounded-xl border px-3 py-2.5 text-sm transition-colors focus:outline-none sm:px-4 sm:py-3"
              placeholder="Add a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            />
            {/* Visible add button on mobile since Enter may be inconvenient */}
            <button
              onClick={addTodo}
              className="bg-primary rounded-xl px-4 text-sm font-semibold text-white transition-all active:scale-95 sm:hidden"
            >
              Add
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-surface border-border flex gap-1 rounded-xl border p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all duration-150 sm:text-sm ${
                filter === f
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-text'
              }`}
            >
              {f}
              {f === 'Active' && (
                <span className="ml-1 text-xs opacity-70 sm:ml-1.5">
                  {todos.filter((t) => !t.done).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Todo list */}
        <ul className="space-y-2">
          {filtered.length === 0 && (
            <li className="text-muted py-8 text-center text-sm sm:py-10">
              {filter === 'Completed'
                ? 'No completed tasks yet.'
                : 'Nothing here. Add a task above!'}
            </li>
          )}
          {filtered.map((todo) => (
            <li
              key={todo.id}
              className={`bg-surface group flex items-center gap-2 rounded-xl border px-3 py-2.5 transition-all duration-150 sm:gap-3 sm:px-4 sm:py-3 ${
                todo.done
                  ? 'border-border opacity-60'
                  : 'border-border hover:border-primary/40'
              }`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                  todo.done
                    ? 'bg-accent border-accent'
                    : 'border-muted hover:border-accent'
                }`}
              >
                {todo.done && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>

              {editId === todo.id ? (
                <input
                  title="task"
                  autoFocus
                  className="bg-bg border-primary text-text flex-1 rounded-lg border px-2 py-1 text-sm focus:outline-none"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') saveEdit(todo.id);
                    if (e.key === 'Escape') setEditId(null);
                  }}
                />
              ) : (
                <span
                  onDoubleClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                  title="Double-click to edit"
                  className={`flex-1 cursor-text text-sm leading-relaxed ${
                    todo.done ? 'text-muted line-through' : 'text-text'
                  }`}
                >
                  {todo.text}
                </span>
              )}

              {editId === todo.id ? (
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="text-accent shrink-0 text-xs font-bold hover:opacity-70"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => deleteTodo(todo.id)}
                  /* Always visible on touch devices; hover-reveal on desktop */
                  className="text-muted shrink-0 transition-all hover:text-rose-500 sm:opacity-0 sm:group-hover:opacity-100"
                  aria-label="delete"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ul>

        {completedCount > 0 && (
          <div className="flex justify-end">
            <button
              onClick={clearCompleted}
              className="text-dark text-xs transition-colors hover:text-rose-500"
            >
              Clear {completedCount} completed
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
