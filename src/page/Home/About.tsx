import { useGSAP } from '@gsap/react';
import gsap from '../../lib/gsap';
import { SplitText } from '../../lib/gsap';
import { useRef } from 'react';
export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!containerRef.current) return;
    const split = SplitText.create(
      containerRef.current.querySelectorAll('span'),
      {
        type: 'words,chars',
      },
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        toggleActions: 'play pause resume reset',
      },
    });
    tl.to(split.words, {
      color: 'blue',
      stagger: { amount: 0.3, from: 'random' },
    });
  });
  return (
    <section ref={containerRef} className="about bg-gray-200 py-16">
      <div className="container">
        <h2 className="text-2xl lg:text-3xl">
          <span className="mb-8 block">
            I am a passionate web developer who enjoys creating clean,
            responsive, and user-friendly web experiences. I specialize in
            building modern websites and web applications that combine both
            functionality and aesthetic appeal.
          </span>
          <span className="block">
            I thrive on tackling challenging problems and constantly exploring
            new technologies to improve my skills. My focus is on delivering
            solutions that are efficient, scalable, and provide a seamless
            experience for users.
          </span>
        </h2>
      </div>
    </section>
  );
}
