import { useState } from 'react';

interface HistoryEntry {
  value: number;
  delta: number | 'reset';
  time: string;
}

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const change = (amount: number) => {
    setCount((prev) => prev + amount);
    setHistory((h) => {
      const next = (h[0]?.value ?? 0) + amount;
      return [
        { value: next, delta: amount, time: new Date().toLocaleTimeString() },
        ...h,
      ].slice(0, 8);
    });
  };

  const reset = () => {
    setCount(0);
    setHistory((h) =>
      [
        {
          value: 0,
          delta: 'reset' as const,
          time: new Date().toLocaleTimeString(),
        },
        ...h,
      ].slice(0, 8),
    );
  };

  const countColor =
    count > 0 ? 'text-accent' : count < 0 ? 'text-rose-400' : 'text-dark-muted';

  return (
    <section className="counter min-h-screen pt-24 pb-10 sm:pt-48 sm:pb-16" id="counter-app">
      <h2 className="mb-4 px-4 text-center text-4xl font-bold sm:mb-6 sm:text-6xl">
        Counter app
      </h2>

      <div className="container flex flex-1 flex-col items-center gap-6 px-4 py-8 sm:gap-10 sm:py-12 md:py-20">
        <div className="relative flex flex-col items-center">
          <div className="bg-dark-primary/5 pointer-events-none absolute inset-0 scale-150 rounded-full blur-3xl" />
          <p className="text-dark-muted mb-2 text-xs font-bold tracking-widest uppercase sm:mb-4">
            Current Count
          </p>
          <span
            className={`text-4xl font-bold transition-all duration-300 md:text-6xl ${countColor}`}
          >
            {count}
          </span>
          {count !== 0 && (
            <span
              className={`mt-2 text-xs font-medium sm:mt-3 sm:text-sm ${countColor}`}
            >
              {count > 0
                ? `+${count} above zero`
                : `${Math.abs(count)} below zero`}
            </span>
          )}
        </div>

        <div className="flex w-full max-w-xs flex-wrap items-center justify-center gap-2 sm:max-w-none sm:gap-3">
          {([-10, -5, -1] as number[]).map((n) => (
            <button
              key={n}
              onClick={() => change(n)}
              className="bg-dark-bg border-dark-border h-12 w-12 rounded-2xl border text-sm font-bold text-rose-400 transition-all duration-150 hover:border-rose-800 hover:bg-rose-900/20 active:scale-95 sm:h-14 sm:w-14"
            >
              {n}
            </button>
          ))}

          <button
            onClick={reset}
            className="bg-dark-surface border-dark-border text-dark-muted hover:border-dark-muted h-12 w-12 rounded-2xl border text-xs font-bold transition-all duration-150 active:scale-95 sm:h-14 sm:w-14"
          >
            RST
          </button>

          {([1, 5, 10] as number[]).map((n) => (
            <button
              key={n}
              onClick={() => change(n)}
              className="bg-dark-surface border-dark-border text-accent h-12 w-12 rounded-2xl border text-sm font-bold transition-all duration-150 hover:border-emerald-800 hover:bg-emerald-900/20 active:scale-95 sm:h-14 sm:w-14"
            >
              +{n}
            </button>
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6">
          <button
            onClick={() => change(-1)}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 text-3xl font-light text-white shadow-lg transition-all duration-150 hover:bg-rose-600 active:scale-95 sm:h-20 sm:w-20 sm:text-4xl"
          >
            −
          </button>
          <button
            onClick={() => change(1)}
            className="bg-accent flex h-16 w-16 items-center justify-center rounded-full text-3xl font-light text-white shadow-lg transition-all duration-150 hover:bg-emerald-600 active:scale-95 sm:h-20 sm:w-20 sm:text-4xl"
          >
            +
          </button>
        </div>

        {history.length > 0 && (
          <div className="w-full max-w-xs sm:max-w-sm">
            <p className="mb-2 text-xs font-bold tracking-widest uppercase sm:mb-3">
              History
            </p>
            <ul className="space-y-1.5">
              {history.map((h, i) => (
                <li
                  key={i}
                  style={{ opacity: 1 - i * 0.1 }}
                  className="flex items-center justify-between rounded-xl border bg-black px-3 py-2 sm:px-4 sm:py-2.5"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {h.value}
                  </span>
                  <span
                    className={`text-xs font-bold ${
                      h.delta === 'reset'
                        ? 'text-white'
                        : (h.delta as number) > 0
                          ? 'text-accent'
                          : 'text-rose-500'
                    }`}
                  >
                    {h.delta === 'reset'
                      ? 'reset'
                      : (h.delta as number) > 0
                        ? `+${h.delta}`
                        : h.delta}
                  </span>
                  <span className="text-muted text-xs">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
