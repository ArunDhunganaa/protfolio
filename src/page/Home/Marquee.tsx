export default function Marquee({
  rotation = 'straight',
}: {
  rotation?: string;
}) {
  return (
    <section
      className="marquee text-surface font-playfairDisplay bg-primary my-4 flex items-center overflow-hidden py-3 text-3xl leading-normal font-bold lg:py-6 lg:text-5xl"
      aria-hidden="true"
    >
      <div
        className={`marquee-inner flex flex-none items-center overflow-hidden ${rotation == 'straight' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="marquee-item relative flex flex-none items-center px-6">
            <a href="mailto:a.d.since03@gmail.com" className={i === 0 ? 'block' : ''} tabIndex={-1}>
              Let's work together!
            </a>
          </div>
        ))}
      </div>
      <div
        className={`marquee-inner flex flex-none items-center overflow-hidden ${rotation == 'straight' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="marquee-item relative flex flex-none items-center px-6">
            <a href="mailto:a.d.since03@gmail.com" tabIndex={-1}>
              Let's work together!
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
