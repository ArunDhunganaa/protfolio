import { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  { title: 'Design', color: '#FF3366', desc: 'Crafting digital experiences.' },
  { title: 'Develop', color: '#20C997', desc: 'Building robust systems.' },
  { title: 'Deploy', color: '#4DABF7', desc: 'Scaling to the world.' },
  { title: 'Iterate', color: '#FFD43B', desc: 'Refining every detail.' },
];

export default function Week4() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [vh, setVh] = useState(() =>
    typeof window !== 'undefined' ? window.innerHeight : 0,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);

    let rafId: number;

    const update = () => {
      if (!trackRef.current) return;

      const track = trackRef.current;
      const trackHeight = track.offsetHeight;
      const scrolled = window.scrollY;
      const trackTop = track.offsetTop;
      const relativeScroll = scrolled - trackTop;

      const children = track.querySelectorAll('.stack-section');

      children.forEach((el, i) => {
        const section = el as HTMLElement;
        const mainText = section.querySelector('.main-text') as HTMLElement;
        const bgNumber = section.querySelector('.bg-number') as HTMLElement;

        const sectionStart = i * vh;

        const progress = Math.min(
          Math.max((relativeScroll - sectionStart) / vh, 0),
          1,
        );

        if (relativeScroll < sectionStart) {
          section.style.position = 'absolute';
          section.style.top = `${sectionStart}px`;
          section.style.left = '0';
          section.style.width = '100%';
          section.style.transform = `scale(1)`;
          section.style.filter = `brightness(1)`;
        } else if (
          relativeScroll >= sectionStart &&
          relativeScroll < (SECTIONS.length - 1) * vh
        ) {
          section.style.position = 'fixed';
          section.style.top = '0px';
          section.style.left = '0';
          section.style.width = '100vw';

          if (mainText) {
            mainText.style.transform = `translateY(${progress * -200}px)`;
            mainText.style.opacity = `${1 - progress * 0.4}`;
          }
          if (bgNumber) {
            bgNumber.style.transform = `translateY(${progress * 100}px)`;
          }

          const nextStart = (i + 1) * vh;
          if (relativeScroll > nextStart) {
            const outProgress = (relativeScroll - nextStart) / vh;
            section.style.transform = `scale(${1 - outProgress * 0.05})`;
            section.style.filter = `brightness(${1 - outProgress * 0.4})`;
          } else {
            section.style.transform = `scale(1)`;
            section.style.filter = `brightness(1)`;
          }
        } else {
          section.style.position = 'absolute';
          section.style.top = `${trackHeight - vh}px`;
          section.style.left = '0';
          section.style.width = '100%';
        }
      });

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [vh]);

  return (
    <section className="overflow-x-hidden bg-white">
      <div className="container mx-auto mb-12 px-4">
        <h2 className="text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          Week 4
        </h2>
      </div>

      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${SECTIONS.length * 100}vh` }}
      >
        {SECTIONS.map((item, index) => (
          <div
            key={index}
            className="stack-section left-0 flex h-screen w-full items-center justify-center overflow-hidden"
            style={{
              backgroundColor: item.color,
              zIndex: index,
              willChange: 'transform, top',
            }}
          >
            <div className="main-text relative z-10 px-6 text-center text-white sm:px-10">
              <h3 className="mb-4 text-5xl font-black tracking-tighter uppercase sm:text-7xl md:text-9xl">
                {item.title}
              </h3>
              <p className="mx-auto max-w-xl text-base font-medium opacity-90 sm:text-xl md:text-2xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
