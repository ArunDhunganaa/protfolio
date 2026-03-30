import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';

export default function Four04() {
  const params = useParams();
  const navigate = useNavigate();
  const glitchRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let t = 0;

    const tick = () => {
      t += 0.02;
      if (glitchRef.current) {
        glitchRef.current.style.transform = `translateY(${Math.sin(t) * 8}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative px-6 pb-15 text-center md:pt-35"
    >
      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Giant background number */}
        <div
          className="pointer-events-none absolute -z-10 text-[30vw] leading-none font-black text-white italic opacity-[0.03] select-none"
          aria-hidden
        >
          404
        </div>

        {/* Label */}
        <p className="text-xs font-bold tracking-[0.25em] text-[--color-dark-primary] uppercase">
          {params.id ? `Route /${params.id}` : 'Error'} &nbsp;/&nbsp; Page not
          found
        </p>

        {/* 404 heading */}
        <h1
          ref={glitchRef}
          className="mb-6 text-[clamp(6rem,20vw,14rem)] leading-none font-black tracking-tighter text-[--color-dark-text]"
        >
          404
        </h1>

        <p className="max-w-md leading-relaxed">
          The page you're looking for doesn't exist, was moved, or never existed
          in the first place. Let's get you back on track.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="group relative cursor-pointer overflow-hidden rounded-full border border-[--color-dark-border] px-8 py-3 font-bold tracking-widest uppercase transition-colors duration-300 hover:border-[--color-dark-primary]"
          >
            <span className="relative z-10">← Go Back</span>
            <span className="absolute inset-0 -translate-x-full bg-[--color-dark-primary] opacity-10 transition-transform duration-300 group-hover:translate-x-0" />
          </button>

          <button
            onClick={() => navigate('/')}
            className="group relative cursor-pointer overflow-hidden rounded-full bg-[--color-dark-primary] px-8 py-3 font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[--shadow-blue]"
          >
            <span className="relative z-10">Home →</span>
            <span className="absolute inset-0 translate-x-full bg-white opacity-10 transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
