import Week2 from './week2';
import Week3 from './week3';
import Week4 from './week4';
import Week5 from './week5';

export default function Animation() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <h1 className="mx-auto mb-12 max-w-[1536px] text-6xl font-bold tracking-tighter text-zinc-900 md:text-8xl">
        Animations<span className="text-blue-500">.</span>
      </h1>
      <div className="flex flex-col">
        <Week2 />
        <Week3 />
        <Week4 />
        <Week5 />
      </div>
    </div>
  );
}
