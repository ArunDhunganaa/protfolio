import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PrimaryButton } from '../../component/ui/PrimaryButton';
import { OutlineButton } from '../../component/ui/OutlineButton';
import graphiccell from '../../assets/graphic-cell.webp';
import brownmine from '../../assets/brownmine.webp';
import { useGSAP } from '@gsap/react';
import gsap from '../../lib/gsap';
import { useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Tag pill
      gsap.fromTo(
        '.hero-tag',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 },
      );
      // Each heading word
      gsap.fromTo(
        '.hero-word',
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power4.out',
          stagger: 0.13,
          delay: 0.25,
        },
      );
      // Subtitle lines
      gsap.fromTo(
        '.hero-sub-line',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 0.6,
        },
      );
      // Buttons
      gsap.fromTo(
        '.hero-ctas',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', delay: 0.85 },
      );
      // Stats
      gsap.fromTo(
        '.hero-stat',
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 1.0,
        },
      );
      // Card
      gsap.fromTo(
        '.hero-card',
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          delay: 0.35,
        },
      );
      // Badge
      gsap.fromTo(
        '.hero-badge',
        { opacity: 0, x: -16, y: 8 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'back.out(1.6)',
          delay: 1.15,
        },
      );
      // Idle float
      gsap.to('.hero-card', {
        y: '-=8',
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.4,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-stone-50 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
      >
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col gap-14 md:flex-row md:items-center md:gap-10 lg:gap-20">
            <div className="flex flex-col md:w-[52%]">
              <h1 className="mb-8 text-4xl leading-[0.92] font-black tracking-tight text-stone-900 md:text-6xl" aria-label="Arun Dhungana">
                <div aria-hidden="true" className="overflow-hidden">
                  <span className="hero-word inline-block text-stone-300">
                    I'm
                  </span>
                </div>
                <div aria-hidden="true" className="overflow-hidden">
                  <span className="hero-word inline-block">Arun</span>
                </div>
              </h1>

              <div className="mb-9 space-y-1">
                <div className="overflow-hidden">
                  <p className="hero-sub-line text-lg font-semibold text-stone-700 sm:text-xl">
                    Full-stack Developer
                  </p>
                </div>
                <div className="overflow-hidden">
                  <p className="hero-sub-line max-w-sm text-sm leading-relaxed text-stone-600 sm:text-base">
                    I craft modern, interactive web experiences — fast,
                    accessible, and obsessively refined.
                  </p>
                </div>
              </div>

              <div className="hero-ctas mb-12 flex flex-wrap gap-3">
                <PrimaryButton text="View my work" href="#project" />
                <OutlineButton
                  text="Get in touch"
                  href="mailto:a.d.since03@gmail.com"
                />
              </div>

              <div className="flex items-center gap-6 border-t border-stone-200 pt-6">
                {[
                  { value: '2+', label: 'Years exp.' },
                  { value: '20+', label: 'Projects' },
                  { value: '10+', label: 'Clients' },
                ].map((s) => (
                  <div key={s.label} className="hero-stat">
                    <p className="text-2xl font-black text-stone-900">
                      {s.value}
                    </p>
                    <p className="text-[10px] tracking-widest text-stone-700 uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card relative md:w-[48%]">
              <div className="pointer-events-none absolute inset-4 -z-10 rounded-3xl bg-violet-200 opacity-30 blur-2xl" />

              <div className="overflow-hidden rounded-2xl border border-stone-100 shadow-2xl sm:rounded-3xl">
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3800, disableOnInteraction: false }}
                  modules={[Pagination, Autoplay]}
                  speed={700}
                  className="w-full"
                >
                  {[
                    {
                      src: graphiccell,
                      label: 'Graphic Cell',
                      tag: 'Full stack',
                    },
                    { src: brownmine, label: 'Brownmine', tag: 'Frontend' },
                  ].map(({ src, label, tag }) => (
                    <SwiperSlide key={label}>
                      <div className="group relative overflow-hidden">
                        <img
                          src={src}
                          alt={label}
                          fetchPriority="high"
                          className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-6">
                          <span className="mb-2 inline-block rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-[10px] tracking-widest text-white/80 uppercase backdrop-blur-sm">
                            {tag}
                          </span>
                          <p className="text-base font-bold text-white sm:text-lg">
                            {label}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
