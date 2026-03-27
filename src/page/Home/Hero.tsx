import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PrimaryButton } from '../../component/ui/PrimaryButton';
import { OutlineButton } from '../../component/ui/OutlineButton';
import graphiccell from '../../assets/graphic-cell.png';
import brownmine from '../../assets/brownmine.png';
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
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <section
        ref={heroRef}
        className="relative overflow-hidden bg-stone-50 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
      >
        {/* Decorative blobs — pure Tailwind */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-violet-100 opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-amber-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100 opacity-40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-14 md:flex-row md:items-center md:gap-10 lg:gap-20">
            {/* ── LEFT: Text ── */}
            <div className="flex flex-col md:w-[52%]">
              {/* Tag */}
              <div className="hero-tag mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-stone-200 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span
                  className="text-xs font-medium tracking-widest text-stone-400 uppercase"
                  style={{ fontFamily: '"Outfit", sans-serif' }}
                >
                  Available for work
                </span>
              </div>

              {/* Heading */}
              <h1
                className="mb-8 leading-[0.92] font-black tracking-tight text-stone-900"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(3.4rem, 9vw, 7rem)',
                }}
              >
                <div className="overflow-hidden">
                  <span className="hero-word inline-block">Iam</span>
                </div>
                <div className="overflow-hidden">
                  <span className="hero-word inline-block text-stone-300">
                    Arun
                  </span>
                </div>
              </h1>

              {/* Subtitle */}
              <div className="mb-9 space-y-1">
                <div className="overflow-hidden">
                  <p
                    className="hero-sub-line text-lg font-semibold text-stone-700 sm:text-xl"
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Full-stack Developer
                  </p>
                </div>
                <div className="overflow-hidden">
                  <p
                    className="hero-sub-line max-w-sm text-sm leading-relaxed text-stone-400 sm:text-base"
                    style={{ fontFamily: '"Outfit", sans-serif' }}
                  >
                    I craft modern, interactive web experiences — fast,
                    accessible, and obsessively refined.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="hero-ctas mb-12 flex flex-wrap gap-3">
                <PrimaryButton text="View my work" href="#" />
                <OutlineButton text="Get in touch" href="#" />
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 border-t border-stone-200 pt-6">
                {[
                  { value: '3+', label: 'Years exp.' },
                  { value: '20+', label: 'Projects' },
                  { value: '10+', label: 'Clients' },
                ].map((s) => (
                  <div key={s.label} className="hero-stat">
                    <p
                      className="text-2xl font-black text-stone-900"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="text-[10px] tracking-widest text-stone-400 uppercase"
                      style={{ fontFamily: '"Outfit", sans-serif' }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Card ── */}
            <div className="hero-card relative md:w-[48%]">
              {/* Soft glow behind card */}
              <div className="pointer-events-none absolute inset-4 -z-10 rounded-3xl bg-violet-200 opacity-30 blur-2xl" />

              {/* Swiper */}
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
                      tag: 'UI Design',
                    },
                    { src: brownmine, label: 'Brown Mine', tag: 'Full-stack' },
                  ].map(({ src, label, tag }) => (
                    <SwiperSlide key={label}>
                      <div className="group relative overflow-hidden">
                        <img
                          src={src}
                          alt={label}
                          className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-6">
                          <span
                            className="mb-2 inline-block rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-[10px] tracking-widest text-white/80 uppercase backdrop-blur-sm"
                            style={{ fontFamily: '"Outfit", sans-serif' }}
                          >
                            {tag}
                          </span>
                          <p
                            className="text-base font-bold text-white sm:text-lg"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                          >
                            {label}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Floating badge */}
              <div className="hero-badge absolute -bottom-4 -left-3 sm:-left-5">
                <div className="flex items-center gap-2.5 rounded-2xl border border-stone-200 bg-white px-3.5 py-2.5 shadow-xl">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-900 text-sm text-white">
                    ✦
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold text-stone-800"
                      style={{ fontFamily: '"Outfit", sans-serif' }}
                    >
                      Latest Work
                    </p>
                    <p
                      className="text-[10px] text-stone-400"
                      style={{ fontFamily: '"Outfit", sans-serif' }}
                    >
                      2 projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
