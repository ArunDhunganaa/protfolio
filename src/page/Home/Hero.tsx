import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PrimaryButton } from '../../component/ui/PrimaryButton';
import { OutlineButton } from '../../component/ui/OutlineButton';
import graphiccell from '../../assets/graphic-cell.png';
import brownmine from '../../assets/brownmine.png';

export default function Hero() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(48px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes revealLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(30px, -20px) scale(1.08); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-20px, 30px) scale(1.05); }
        }

        .hero-section { background: #0C0C0F; }

        .tag-pill     { animation: fadeUp 0.6s cubic-bezier(.16,1,.3,1) 0.1s both; }
        .hero-h1-line { overflow: hidden; }
        .hero-h1-line span {
          display: inline-block;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) both;
        }
        .hero-h1-line:nth-child(1) span { animation-delay: 0.25s; }
        .hero-h1-line:nth-child(2) span { animation-delay: 0.38s; }
        .hero-h1-line:nth-child(3) span { animation-delay: 0.51s; }

        .hero-sub    { animation: fadeUp 0.7s cubic-bezier(.16,1,.3,1) 0.65s both; }
        .hero-ctas   { animation: fadeUp 0.7s cubic-bezier(.16,1,.3,1) 0.80s both; }
        .hero-stats  { animation: fadeUp 0.7s cubic-bezier(.16,1,.3,1) 0.95s both; }
        .hero-divider { animation: revealLine 0.8s cubic-bezier(.16,1,.3,1) 1.0s both; transform-origin: left; }

        .hero-card   { animation: slideRight 1s cubic-bezier(.16,1,.3,1) 0.4s both; }
        .card-float  { animation: float 6s ease-in-out infinite 1.5s; }

        .badge-pill  { animation: fadeUp 0.6s cubic-bezier(.16,1,.3,1) 1.1s both; }

        .live-dot    { animation: pulse-dot 1.8s ease-in-out infinite; }

        .orb-1 { animation: orb1 12s ease-in-out infinite; }
        .orb-2 { animation: orb2 15s ease-in-out infinite; }

        .stat-num {
          background: linear-gradient(135deg, #fff 40%, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.35) !important;
          opacity: 1 !important;
          width: 6px !important;
          height: 6px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #fff !important;
          width: 22px !important;
          border-radius: 3px !important;
        }

        .img-hover {
          transition: transform 0.6s cubic-bezier(.16,1,.3,1);
        }
        .hero-card:hover .img-hover {
          transform: scale(1.04);
        }
      `}</style>

      <section className="hero-section relative overflow-hidden">
        {/* Background orbs */}
        <div
          className="orb-1 pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          }}
        />
        <div
          className="orb-2 pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
          }}
        />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
          {/* ── Two-column on md+, single column on mobile ── */}
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-8 lg:gap-16">
            {/* ── LEFT: Text ── */}
            <div className="flex flex-col md:w-[52%]">
              {/* Tag */}
              <div className="tag-pill mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="live-dot h-2 w-2 rounded-full bg-emerald-400" />
                <span
                  className="text-xs font-medium tracking-widest text-white/60 uppercase"
                  style={{ fontFamily: '"Outfit", sans-serif' }}
                >
                  Available for work
                </span>
              </div>

              {/* Heading */}
              <h1
                className="mb-8 leading-[0.9] font-black tracking-[-0.03em] text-white"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(3.2rem, 9vw, 7rem)',
                }}
              >
                <div className="hero-h1-line">
                  <span>Iam</span>
                </div>
                <div className="hero-h1-line">
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)' }}
                  >
                    Arun
                  </span>
                </div>
              </h1>

              {/* Sub */}
              <div className="hero-sub mb-9">
                <p
                  className="mb-2 text-lg font-medium text-white/90 sm:text-xl"
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Full-stack Developer
                </p>
                <p
                  className="max-w-sm text-sm leading-relaxed text-white/45 sm:text-base"
                  style={{ fontFamily: '"Outfit", sans-serif' }}
                >
                  I craft modern, interactive web experiences — fast,
                  accessible, and obsessively refined.
                </p>
              </div>

              {/* CTAs */}
              <div className="hero-ctas mb-10 flex flex-wrap gap-3">
                <PrimaryButton text="View my work" href="#" />
                <OutlineButton text="Get in touch" href="#" />
              </div>

              {/* Stats */}
              <div className="hero-stats flex items-center gap-8">
                <div
                  className="hero-divider h-px flex-1 bg-white/10"
                  style={{ transformOrigin: 'left' }}
                />
                {[
                  { value: '3+', label: 'Years' },
                  { value: '20+', label: 'Projects' },
                  { value: '10+', label: 'Clients' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p
                      className="stat-num text-2xl font-black"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="text-[10px] tracking-widest text-white/30 uppercase"
                      style={{ fontFamily: '"Outfit", sans-serif' }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Card ── */}
            <div className="hero-card md:w-[48%]">
              <div className="card-float relative">
                {/* Glow behind card */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-3xl opacity-40 blur-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                  }}
                />

                {/* Swiper */}
                <div
                  className="overflow-hidden rounded-2xl sm:rounded-3xl"
                  style={{
                    boxShadow:
                      '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
                  }}
                >
                  <Swiper
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3800, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    speed={800}
                    className="w-full"
                  >
                    {[
                      {
                        src: graphiccell,
                        label: 'Graphic Cell',
                        tag: 'UI Design',
                      },
                      {
                        src: brownmine,
                        label: 'Brown Mine',
                        tag: 'Full-stack',
                      },
                    ].map(({ src, label, tag }) => (
                      <SwiperSlide key={label}>
                        <div className="relative overflow-hidden">
                          <img
                            src={src}
                            alt={label}
                            className="img-hover block h-auto w-full"
                          />
                          {/* Slide overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-6">
                            <span
                              className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] tracking-widest text-white/70 uppercase backdrop-blur-sm"
                              style={{ fontFamily: '"Outfit", sans-serif' }}
                            >
                              {tag}
                            </span>
                            <p
                              className="text-base font-bold text-white sm:text-lg"
                              style={{
                                fontFamily: '"Playfair Display", serif',
                              }}
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
                <div className="badge-pill absolute -bottom-4 -left-3 sm:-left-5">
                  <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5 shadow-2xl backdrop-blur-md sm:px-4">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-xl text-sm"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                      }}
                    >
                      ✦
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold text-white"
                        style={{ fontFamily: '"Outfit", sans-serif' }}
                      >
                        Latest Work
                      </p>
                      <p
                        className="text-[10px] text-white/40"
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
        </div>
      </section>
    </>
  );
}
