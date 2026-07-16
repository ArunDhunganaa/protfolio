import { useRef } from 'react';
import gsap from '../../lib/gsap';
import { useGSAP } from '@gsap/react';
import { Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Footer() {
  const container = useRef(null);
  const nameRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(nameRef.current, {
        fontSize: 'clamp(2rem, 12vw, 9rem)',
        y: 140,
        fontWeight: '700',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: 1,
        },
      });
    },
    { scope: container },
  );

  const handleBackToTop = (e: React.MouseEvent): void => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: 0,
      ease: 'power4.inOut',
    });
  };

  return (
    <footer
      ref={container}
      className="border-t border-zinc-900 bg-zinc-950 px-6 pt-10 pb-16 text-zinc-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-24 items-center justify-between">
          <button
            onClick={handleBackToTop}
            aria-label="Back to top of page"
            className="z-10 cursor-pointer text-xs tracking-[0.2em] uppercase transition-colors hover:text-orange-400"
          >
            Back to Top {'\u2191'}
          </button>

          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p
              ref={nameRef}
              className="leading-none tracking-tighter whitespace-nowrap text-white uppercase"
            >
              Arun Dhungana
            </p>
          </div>

          <a
            href="mailto:a.d.since03@gmail.com"
            aria-label="Send email to Arun Dhungana"
            className="z-10 rounded-full bg-zinc-900 p-2 transition-all hover:bg-zinc-800"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="mt-72 flex flex-col items-center justify-between gap-12 md:flex-row md:items-end">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <span className="text-xs tracking-widest text-zinc-400 uppercase">
              Connect
            </span>
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/arun-dhungana-151047229/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-xl bg-zinc-900 p-3 transition-all duration-300 hover:-translate-y-1 hover:text-orange-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                aria-label="GitHub profile"
                href="https://github.com/ArunDhunganaa"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-zinc-900 p-3 transition-all duration-300 hover:-translate-y-1 hover:text-orange-400"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <p className="max-w-xs text-center text-sm leading-relaxed font-light text-white md:text-right">
            Thanks for scrolling this far. Feel free to leave a message or
            feedback.
          </p>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-zinc-900/50 pt-8 text-xs text-white">
          <p className="text-white">© 2026 ARUN DHUNGANA</p>
          <p className="text-white">BUILT WITH GSAP & TAILWIND</p>
        </div>
      </div>
    </footer>
  );
}
