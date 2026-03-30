import { useEffect, useRef } from 'react';
import gsap from '../../lib/gsap';

import wordpress_l from '../../assets/wordpress.png';
import react_l from '../../assets/react.png';
import webflow_l from '../../assets/webflow.png';
import html_sass_l from '../../assets/html-sass.jpg';
import drupal_l from '../../assets/drupal.webp';

import wordpress from '../../assets/wordpress.jpg';
import react from '../../assets/react-e.png';
import webflow from '../../assets/webflow.webp';
import html_sass from '../../assets/html.jpeg';
import drupal from '../../assets/drupal.jpg';

export default function Skill() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const images = gsap.utils.toArray<HTMLElement>('.skill-img');
        const items = gsap.utils.toArray<HTMLElement>('.skill-item');
        const headerHeight = 103;

        gsap.set(images, {
          position: 'absolute',
          inset: 0,
          clipPath: 'inset(100% 0 0 0)',
          zIndex: (i) => i,
        });
        gsap.set(images[0], { clipPath: 'inset(0% 0 0 0)' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${headerHeight}px`,
            end: 'bottom bottom',
            scrub: 1.5,
            pin: pinContainerRef.current,
            pinSpacing: true,
          },
        });

        items.forEach((_, i) => {
          if (i === 0) return;
          tl.to(
            images[i],
            { clipPath: 'inset(0% 0 0 0)', ease: 'power1.inOut' },
            `+=${i * 0.5}`,
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const skills = [
    {
      icon: wordpress_l,
      img: wordpress,
      title: 'WordPress',
      desc: 'Skilled in developing custom WordPress themes, modifying plugins, and building responsive CMS-driven websites. Experienced with Elementor, ACF, performance optimization, and SEO-friendly structures.',
    },
    {
      icon: react_l,
      img: react,
      title: 'React',
      desc: 'Experienced in building modern React applications with reusable components, hooks, and state management. Comfortable integrating APIs, animations with GSAP, and responsive UI using Tailwind.',
    },
    {
      icon: html_sass_l,
      img: html_sass,
      title: 'HTML & Sass',
      desc: 'Strong foundation in semantic HTML and scalable Sass architecture. Able to create pixel-perfect responsive layouts, reusable mixins, and maintainable component-based styling systems.',
    },
    {
      icon: webflow_l,
      img: webflow,
      title: 'Webflow',
      desc: 'Skilled in building custom Webflow templates with CMS collections, interactions, and responsive layouts. Able to convert Figma designs into clean, structured Webflow builds.',
    },
    {
      icon: drupal_l,
      img: drupal,
      title: 'Drupal CMS',
      desc: 'Experience working with Drupal themes, Twig templates, and structured content types. Comfortable customizing layouts and maintaining scalable CMS-driven platforms.',
    },
  ];

  return (
    <section ref={sectionRef} className="skill relative mt-12 md:mt-20">
      <div className="container mx-auto flex flex-col items-start md:flex-row">
        <div className="w-full md:w-1/2 md:pr-12">
          {skills.map((s, i) => (
            <div
              key={i}
              className="skill-item mb-12 flex flex-col justify-center md:mb-0 md:min-h-[80vh]"
            >
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl shadow-lg md:hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <img
                alt={s.title}
                src={s.icon}
                className="mb-4 h-8 w-fit object-contain md:mb-6 md:h-12"
              />
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl">
                {s.title}
              </h3>
              <p className="leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <div
          ref={pinContainerRef}
          className="hidden w-1/2 items-center justify-center md:flex"
          style={{ height: `calc(100vh - 103px)` }}
        >
          <div className="relative aspect-square w-full max-w-125 overflow-hidden rounded-xl shadow-2xl">
            {skills.map((s, i) => (
              <img
                key={i}
                src={s.img}
                className="skill-img h-full w-full object-cover"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
