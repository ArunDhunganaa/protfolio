import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from '../../lib/gsap';

const sections = [
  { color: '#ff6b6b', text: 'Section 1' },
  { color: '#4dabf7', text: 'Section 2' },
  { color: '#51cf66', text: 'Section 3' },
  { color: '#fcc419', text: 'Section 4' },
  { color: '#845ef7', text: 'Section 5' },
];

export default function Week5() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.panel');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: () => `top ${(document.querySelector('header')?.getBoundingClientRect().height ?? 80)}px`,
        end: `+=${panels.length * 100}%`,
        scrub: true,
        pin: true,
        pinType: 'transform',
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / panels.length,
          duration: 0.4,
          ease: 'power1.out',
        },
      },
    });

    panels.forEach((panel, i) => {
      tl.fromTo(
        panel,
        {
          yPercent: i % 2 === 0 || i === 0 ? 0 : 100,
          xPercent: i % 2 === 1 || i === 0 ? 0 : 100,
        },
        {
          yPercent: 0,
          xPercent: 0,
          duration: 1,
          ease: 'power2.out',
        },
      );
    });
  }, { scope: containerRef });

  return (
    <section className="week5 mb-24">
      <div className="mb-8 md:mb-12">
        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">Week 5</h2>
      </div>

      <div ref={containerRef} className="relative h-[100svh] overflow-hidden">
        {sections.map((s, i) => (
          <div
            key={i}
            className="panel absolute inset-0 flex items-center justify-center text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            style={{ backgroundColor: s.color }}
          >
            {s.text}
          </div>
        ))}
      </div>
    </section>
  );
}
