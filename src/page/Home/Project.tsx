import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from '../../lib/gsap';
import corporate_cms from '../../assets/corporate_cms.webp';
import e_commerce from '../../assets/e_commerce.webp';
import portfolio from '../../assets/portfolio.webp';

export default function Project() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  const projects = [
    {
      title: 'Template Serenite',
      desc: 'Custom Webflow template built with responsive layout, reusable components, and smooth interactions.',
      skills: ['Webflow', 'CMS'],
      color: 'from-cyan-500/20',
      img: corporate_cms,
      link: 'https://serenite-d07c4f.webflow.io/',
    },
    {
      title: 'SmartFunds',
      desc: 'Drupal-based financial platform with structured content types and scalable CMS architecture.',
      skills: ['Drupal', 'Twig'],
      color: 'from-indigo-500/20',
      img: e_commerce,
      link: 'http://250626718972.multi.phpstg.com/',
    },
    {
      title: 'FitMind',
      desc: 'WordPress website developed with custom theme, optimized performance, and responsive design.',
      skills: ['WordPress', 'PHP', 'Sass'],
      color: 'from-orange-500/20',
      img: portfolio,
      link: 'https://eduarunyy.multi.phpstg.com/',
    },
  ];

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;

      itemsRef.current.forEach((item) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            y: isMobile ? 30 : 60,
            opacity: 0,
            scale: isMobile ? 0.95 : 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: isMobile ? 0.7 : 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: isMobile ? 'top 95%' : 'top 85%',
              toggleActions: isMobile
                ? 'play none none none'
                : 'play none none reverse',
              once: isMobile,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="project"
      ref={containerRef}
      className="project relative z-10 min-h-screen overflow-hidden py-20 md:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="text-center text-5xl font-bold tracking-tighter text-slate-900 md:text-9xl">
            Projects<span className="text-blue-500">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {projects.map((project, index) => (
            <article
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el as HTMLElement;
              }}
              className="group relative flex h-full w-full"
            >
              <div
                className={`relative flex flex-1 flex-col overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br ${project.color} to-transparent p-1 backdrop-blur-3xl transition-all duration-500 group-hover:border-blue-500/50`}
              >
                <div className="flex flex-1 flex-col rounded-[1.9rem] bg-[#0f0f0f]/90 p-6 md:p-8">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-widest text-blue-400 uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-blue-400 md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mb-8 grow text-sm leading-relaxed text-gray-400 md:text-base">
                    {project.desc}
                  </p>

                  <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-800">
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    aria-label={`Visit ${project.title}`}
                    className="mt-8 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white uppercase"
                  >
                    <span aria-hidden="true">Visit</span>
                    <div className="h-px w-6 bg-blue-500 transition-all group-hover:w-10" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
