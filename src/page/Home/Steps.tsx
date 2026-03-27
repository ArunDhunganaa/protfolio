export default function Steps() {
  const steps = [
    {
      id: 1,
      text: 'Plan and wireframe',
      desc: 'Define goals and create wireframes to visualize structure.',
    },
    {
      id: 2,
      text: 'Design the UI',
      desc: 'Create a clean UI with consistent colors and typography.',
    },
    {
      id: 3,
      text: 'Develop',
      desc: 'Implement features using modern technologies and APIs.',
    },
    {
      id: 4,
      text: 'Test and Deploy',
      desc: 'Test for bugs, deploy, and gather user feedback.',
    },
  ];

  const getPath = (i: number) =>
    i === 0
      ? 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
      : 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)';

  return (
    <section className="step bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* ── Desktop: horizontal chevrons ── */}
        <div className="hidden items-start md:flex">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group flex w-1/4 cursor-default flex-col items-center gap-3 text-center"
              style={{ marginLeft: index !== 0 ? '-1.5%' : '0' }}
            >
              <p className="min-h-14 text-lg font-semibold text-gray-700">
                {step.text}
              </p>

              <div className="relative h-40 w-full">
                <div
                  className="flex h-full w-full items-center justify-center bg-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-700"
                  style={{ clipPath: getPath(index) }}
                >
                  <span className="text-2xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
              </div>

              <div className="px-4">
                <p className="text-sm text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: vertical list ── */}
        <ol className="flex flex-col gap-0 md:hidden">
          {steps.map((step, index) => (
            <li key={step.id} className="flex gap-4">
              {/* Left: number + connector line */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <span className="text-base font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="my-1 w-0.5 flex-1 bg-blue-200" />
                )}
              </div>

              {/* Right: text */}
              <div className="pt-1.5 pb-8">
                <p className="text-base font-semibold text-gray-700">
                  {step.text}
                </p>
                <p className="mt-1 text-sm text-gray-500">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
