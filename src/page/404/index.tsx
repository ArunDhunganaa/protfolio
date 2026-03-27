import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';

export default function Four04() {
  const params = useParams();
  const navigate = useNavigate();
  const glitchRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle floating / glitch animation via RAF
  useEffect(() => {
    let rafId: number;
    let t = 0;

    const tick = () => {
      t += 0.02;
      if (glitchRef.current) {
        // Gentle vertical float
        glitchRef.current.style.transform = `translateY(${Math.sin(t) * 8}px)`;
      }
      if (containerRef.current) {
        // Very slow hue-shift on the accent glow
        const hue = 240 + Math.sin(t * 0.3) * 20;
        containerRef.current.style.setProperty('--glow-hue', `${hue}deg`);
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[--color-dark-bg] px-6 text-center"
      style={{ '--glow-hue': '240deg' } as React.CSSProperties}
    >
      {/* ── Background grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-dark-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-dark-border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Radial glow behind the 404 ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: `radial-gradient(circle, hsl(var(--glow-hue), 80%, 65%), transparent 70%)`,
          }}
        />
      </div>

      {/* ── Marquee strip (mirrors existing marquee theme) ── */}
      <div className="pointer-events-none absolute top-0 w-full overflow-hidden border-b border-[--color-dark-border] py-2">
        <div
          className="flex gap-12 text-xs font-bold tracking-[0.3em] whitespace-nowrap text-[--color-dark-muted] uppercase"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i}>
              PAGE NOT FOUND &nbsp;·&nbsp; 404 ERROR &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Giant background number */}
        <div
          className="pointer-events-none absolute -z-10 font-[--font-playfairDisplay] text-[30vw] leading-none font-black text-white italic opacity-[0.03] select-none"
          aria-hidden
        >
          404
        </div>

        {/* Label */}
        <p
          className="font-[--font-opensans] text-xs font-bold tracking-[0.25em] text-[--color-dark-primary] uppercase"
          style={{
            animation: 'fadeSlideUp 0.6s ease both',
            animationDelay: '0s',
          }}
        >
          {params.id ? `Route /${params.id}` : 'Error'} &nbsp;/&nbsp; Page not
          found
        </p>

        {/* 404 heading */}
        <h1
          ref={glitchRef}
          className="font-[--font-playfairDisplay] text-[clamp(6rem,20vw,14rem)] leading-none font-black tracking-tighter text-[--color-dark-text]"
          style={{
            animation: 'fadeSlideUp 0.7s ease both',
            animationDelay: '0.1s',
            textShadow: '0 0 60px hsl(var(--glow-hue), 80%, 65% / 0.4)',
          }}
        >
          404
        </h1>

        {/* Description */}
        <p
          className="max-w-md font-[--font-opensans] leading-relaxed text-[--color-dark-muted] text-[--text-base]"
          style={{
            animation: 'fadeSlideUp 0.7s ease both',
            animationDelay: '0.3s',
          }}
        >
          The page you're looking for doesn't exist, was moved, or never existed
          in the first place. Let's get you back on track.
        </p>

        {/* CTA buttons */}
        <div
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
          style={{
            animation: 'fadeSlideUp 0.7s ease both',
            animationDelay: '0.4s',
          }}
        >
          <button
            onClick={() => navigate(-1)}
            className="group relative overflow-hidden rounded-full border border-[--color-dark-border] px-8 py-3 font-[--font-opensans] font-bold tracking-widest text-[--color-dark-text] text-[--text-sm] uppercase transition-colors duration-300 hover:border-[--color-dark-primary]"
          >
            <span className="relative z-10">← Go Back</span>
            <span className="absolute inset-0 -translate-x-full bg-[--color-dark-primary] opacity-10 transition-transform duration-300 group-hover:translate-x-0" />
          </button>

          <button
            onClick={() => navigate('/')}
            className="group relative overflow-hidden rounded-full bg-[--color-dark-primary] px-8 py-3 font-[--font-opensans] font-bold tracking-widest text-[--color-dark-bg] text-[--text-sm] uppercase transition-all duration-300 hover:shadow-[--shadow-blue]"
          >
            <span className="relative z-10">Home →</span>
            <span className="absolute inset-0 translate-x-full bg-white opacity-10 transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
