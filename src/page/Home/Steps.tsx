const steps = [
  { id: 1, text: 'Plan and wireframe the project' },
  { id: 2, text: 'Design the user interface' },
  { id: 3, text: 'Develop frontend and backend' },
  { id: 4, text: 'Test, deploy, and iterate' },
];

export default function Steps() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-start gap-16 px-6">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-2">
            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-10 w-10 rotate-180 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l-4 4m0 0l4 4m-4-4h12"
              />
            </svg>

            {/* Text below arrow */}
            <p className="text-center text-lg font-medium">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
