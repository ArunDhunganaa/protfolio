import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Github, Linkedin, X, Menu as MenuIcon } from 'lucide-react';
import profile from '../../assets/profile.jpg';

gsap.registerPlugin(useGSAP);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(() => {
    const updateScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${scrolled}%`;
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const handleToggle = contextSafe(() => {
    const mainContent = document.getElementById('main-content');
    const tl = gsap.timeline();

    if (!isOpen) {
      setIsOpen(true);
      gsap.set('.full-menu', { display: 'flex' });
      gsap.set('.menu-item', { y: 100, opacity: 0 });
      gsap.set('.menu-extra', { opacity: 0, y: 20 });

      tl.to(mainContent, {
        filter: 'blur(15px)',
        scale: 0.9,
        duration: 0.8,
        ease: 'power2.inOut',
      })
        .fromTo(
          '.full-menu',
          { y: '-100%' },
          { y: '0%', duration: 1, ease: 'expo.inOut' },
          '<',
        )
        .to(
          '.menu-item',
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.4',
        )
        .to(
          '.menu-extra',
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.5,
          },
          '-=0.3',
        );
    } else {
      tl.to('.menu-item', {
        y: -40,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power2.in',
      })
        .to(
          '.menu-extra',
          {
            opacity: 0,
            duration: 0.3,
          },
          '-=0.2',
        )
        .to('.full-menu', {
          y: '-100%',
          duration: 0.8,
          ease: 'expo.inOut',
        })
        .to(
          mainContent,
          {
            filter: 'blur(0px)',
            scale: 1,
            duration: 0.6,
            ease: 'power2.inOut',
          },
          '-=0.6',
        )
        .add(() => {
          gsap.set('.full-menu', { display: 'none' });
          setIsOpen(false);
        });
    }
  });

  return (
    <header ref={container} className="w-full">
      <div
        className={`fixed top-0 left-0 z-90 h-20 w-full transition-all duration-500 ${isOpen ? 'bg-transparent' : 'border-b border-zinc-100 bg-white/80 backdrop-blur-md'}`}
      >
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-zinc-100">
          <div
            ref={scrollProgressRef}
            className="h-full w-0 bg-red-600 transition-all duration-100"
          />
        </div>
      </div>

      <div className="pointer-events-none fixed top-0 left-0 z-100 flex h-20 w-full items-center justify-between px-6 md:px-12">
        <button
          onClick={handleToggle}
          className="group pointer-events-auto h-8 cursor-pointer overflow-hidden px-2"
        >
          <div
            className={`flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? '-translate-y-8' : 'translate-y-0'}`}
          >
            <div className="flex h-8 items-center gap-2">
              <MenuIcon size={16} className="text-zinc-900" />
              <span className="text-xs font-bold tracking-widest text-zinc-900 uppercase">
                Menu
              </span>
            </div>
            <div className="flex h-8 items-center gap-2">
              <X size={16} className="text-white" />
              <span className="text-xs font-bold tracking-widest text-white uppercase">
                Close
              </span>
            </div>
          </div>
        </button>

        <Link
          to="/"
          className={`pointer-events-auto text-sm font-black tracking-[0.2em] uppercase transition-colors duration-500 md:text-base ${isOpen ? 'text-white' : 'text-zinc-900'}`}
        >
          Arun Dhungana
        </Link>
      </div>

      <div className="full-menu fixed inset-0 z-95 hidden h-screen w-screen flex-col overflow-hidden bg-zinc-950 text-white">
        <div className="container mx-auto grid h-full grid-cols-1 items-center gap-12 px-10 pt-24 md:grid-cols-3 md:pt-0">
          <div className="menu-extra hidden aspect-4/5 overflow-hidden rounded-3xl bg-zinc-900 md:block">
            <img
              src={profile}
              alt="Profile"
              className="h-full w-full object-cover opacity-50 grayscale"
            />
          </div>

          <div className="flex flex-col gap-6">
            <span className="menu-extra text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
              Navigation
            </span>
            <ul className="flex flex-col">
              {['Home', 'JS', 'React-learning'].map((item) => (
                <li key={item} className="menu-item overflow-hidden">
                  <NavLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={handleToggle}
                    className={({ isActive }) =>
                      `block py-2 text-4xl font-black tracking-tighter uppercase transition-all duration-300 md:text-6xl ${isActive ? 'text-red-600' : 'text-zinc-200 hover:translate-x-6 hover:text-red-500'} `
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-extra flex flex-col gap-10 self-center md:items-end md:self-end md:pb-32">
            <span className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
              Connect
            </span>
            <div className="flex gap-8 md:flex-col">
              <a
                href="https://www.linkedin.com/in/arun-dhungana-151047229/"
                target="_blank"
                rel="noopener"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="linkedin"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/ArunDhunganaa"
                target="_blank"
                rel="noopener"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="github"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
