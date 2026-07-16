import { useRef } from 'react';
import gsap from '../../lib/gsap';
import { useGSAP } from '@gsap/react';

const items = [
  {
    year: '2021',
    title: 'High School Diploma',
    desc: 'Completed high school with a GPA of 3.5.',
  },
  {
    year: 'Jul 2024 – Nov 2024',
    title: 'Intern — P2H',
    desc: 'Worked on real-world web development tasks.',
  },
  {
    year: '2025',
    title: "Bachelor's Degree",
    desc: 'Focused on software and web development.',
  },
  {
    year: 'Nov 2024 – Present',
    title: 'Junior Full Stack Developer',
    desc: 'Building and maintaining full-stack web applications.',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.innerWidth < 768) return;

    const track = timelineRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const scrollDistance = track.scrollWidth - window.innerWidth;
    if (scrollDistance <= 0) return;

    gsap.to(track, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <>
      <section
        ref={sectionRef}
        className="experience hidden overflow-hidden md:block"
      >
        <div className="container mx-auto px-6 py-16">
          <h2 className="mb-16 text-center text-5xl font-bold">
            Education/Experience
          </h2>
        </div>

        <div ref={timelineRef} className="flex flex-nowrap">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative min-w-[33.33vw] shrink-0 border-t-2 border-black pt-20 pl-10"
            >
              <span className="absolute top-0 left-0 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black bg-white after:absolute after:top-1/2 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-black" />
              <span className="font-mono text-lg">[ {item.year} ]</span>
              <div className="w-[80%] pb-20">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience px-6 py-16 md:hidden">
        <h2 className="mb-12 text-center text-xl font-bold lg:text-4xl">
          Education/Experience
        </h2>

        <ol className="relative mx-auto flex max-w-sm flex-col">
          <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-gray-300" />

          {items.map((item, index) => (
            <li key={index} className="relative mb-10 flex gap-5 last:mb-0">
              <div className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <div className="pt-0.5">
                <p className="font-mono text-xs font-medium tracking-wide text-gray-600 uppercase">
                  {item.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
