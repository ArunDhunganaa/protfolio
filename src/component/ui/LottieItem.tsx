import { useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';

interface LottieItemProps {
  animationData: object;
  speed?: number;
  loop?: boolean;
  direction?: 1 | -1;
  label?: string;
}

export function LottieItem({
  animationData,
  speed = 1,
  loop = true,
  direction = 1,
  label,
}: LottieItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let mounted = true;
    let observer: IntersectionObserver | undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    import('lottie-web/build/player/lottie_light.js').then((mod) => {
      if (!mounted) return;

      const lottie = mod.default;

      if (animationRef.current) {
        animationRef.current.destroy();
      }

      const animation = lottie.loadAnimation({
        container: element,
        renderer: 'svg',
        autoplay: false,
        loop: reducedMotion ? false : loop,
        animationData,
      });

      animation.setSpeed(speed);
      animation.setDirection(direction);
      animationRef.current = animation;

      if (reducedMotion) {
        animation.goToAndStop(0, true);
      } else {
        observer = new IntersectionObserver(
          ([entry]) => {
            entry.isIntersecting ? animation.play() : animation.pause();
          },
          { threshold: 0.5 },
        );
        observer.observe(element);
      }
    });

    return () => {
      mounted = false;
      observer?.disconnect();
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [animationData, speed, loop, direction]);

  return (
    <div
      ref={containerRef}
      className="h-75 w-75 cursor-pointer"
      role="img"
      aria-label={label ?? 'Lottie animation'}
    />
  );
}
