import Counter from './counter';
import TodoApp from './todo';
import Weather from './weather';

export default function ReactLearn() {
  return (
    <div className="container mx-auto min-h-screen px-6 pt-32 pb-20">
      <h1 className="mb-12 text-6xl font-bold tracking-tighter text-zinc-900 md:text-8xl">
        React Learning<span className="text-blue-500">.</span>
      </h1>
      <div className="flex flex-col">
        <Counter></Counter>
        <TodoApp></TodoApp>
        <Weather></Weather>
      </div>
    </div>
  );
}
